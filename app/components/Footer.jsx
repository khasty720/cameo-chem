import {Link} from '@nextui-org/react';
import {useRootLoaderData} from '~/root';

export function Footer({menu, shop}) {
  return (
    <footer className="relative bg-brand-alt pt-10 lg:pt-24 pb-6">
      <div className="flex flex-col mx-auto max-w-6xl justify-center">
        <div className="grid gap-4 grid-cols-2">
          <div className="col-span-2 md:col-span-1">
            <FooterLinks
              menu={menu}
              primaryDomainUrl={shop.primaryDomain.url}
            />
          </div>
        </div>
        <hr className="my-6 border-slate-200/20" />
        <FooterFinisher />
      </div>
    </footer>
  );
}

function FooterLinks({menu, primaryDomainUrl}) {
  const {publicStoreDomain} = useRootLoaderData();
  const menuItems = menu?.items || FALLBACK_FOOTER_MENU.items;

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 px-4 mb-6">
      <div className="col-span-1">
        <span className="block capitalize text-white text-sm font-semibold mb-2">
          General
        </span>
        <ul className="list-unstyled">
          <li>
            <Link
              className="hover:text-accent block pb-2 text-sm"
              href="/collections"
              scroll={false}
            >
              Catalog
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-accent block pb-2 text-sm"
              href="/pages/about"
              scroll={false}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-accent block pb-2 text-sm"
              href="/pages/contact"
              scroll={false}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-1">
        <span className="block capitalize text-white text-sm font-semibold mb-2">
          Legal
        </span>
        <ul className="list-unstyled">
          {menuItems.map((item) => {
            if (!item.url) return null;

            const url =
              item.url.includes('myshopify.com') ||
              item.url.includes(publicStoreDomain) ||
              item.url.includes(primaryDomainUrl)
                ? new URL(item.url).pathname
                : item.url;

            return (
              <li key={item.id}>
                <Link
                  className="hover:text-accent block pb-2 text-sm"
                  href={url}
                  scroll={false}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function FooterFinisher() {
  return (
    <div className="flex flex-wrap items-center justify-between px-3 py-2 xl:px-0">
      <div className="w-fit">
        <div className="text-sm py-1 text-white">
          © {new Date().getFullYear()} Cameo Chemicals LLC
        </div>
      </div>
      <div className="items-center justify-center">
        <a
          className="mx-3.5 text-sm font-medium text-accent hover:text-accent-300 transition ease-in-out delay-150 duration-300"
          href="https://www.linkedin.com/in/kyle-hasty-431a8848"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin fa-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></i>
        </a>
        <a
          className="mx-3.5 text-sm font-medium text-accent hover:text-accent-300 transition ease-in-out delay-150 duration-300"
          href="https://twitter.com/khasty1319"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter fa-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></i>
        </a>
        <a
          className="mx-3.5 text-sm font-medium text-accent hover:text-accent-300 transition ease-in-out delay-150 duration-300"
          href="mailto:me@kylehasty.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-envelope fa-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"></i>
        </a>
      </div>
    </div>
  );
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};
