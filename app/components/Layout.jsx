import {Await, useNavigate} from '@remix-run/react';
import {Suspense} from 'react';
import {Input} from '@nextui-org/react';
import {Providers} from '~/components/common/Providers';
import {Aside} from '~/components/Aside';
import {Footer} from '~/components/Footer';
import {Navbar} from '~/components/Navbar';
import {CartMain} from '~/components/Cart';
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search';

/**
 * @param {LayoutProps}
 */
export function Layout({cart, children = null, footer, header, isLoggedIn}) {
  const navigate = useNavigate();
  return (
    <>
      <Providers navigate={navigate}>
        <CartAside cart={cart} />
        <SearchAside />

        <Navbar header={header} cart={cart} isLoggedIn={isLoggedIn} />
        <main className="min-h-screen">{children}</main>
        <Suspense>
          <Await resolve={footer}>
            {(footer) => <Footer menu={footer?.menu} shop={header?.shop} />}
          </Await>
        </Suspense>
      </Providers>
    </>
  );
}

/**
 * @param {{cart: LayoutProps['cart']}}
 */
function CartAside({cart}) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  return (
    <Aside id="search-aside" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <PredictiveSearchForm>
          {({fetchResults, inputRef}) => (
            <div className="flex w-full flex-wrap md:flex-nowrap gap-2 items-center">
              <Input
                name="q"
                onClear={() => {
                  fetchResults({target: {value: ''}});
                  inputRef.current.value = '';
                }}
                onChange={fetchResults}
                label="Search"
                placeholder="Start typing to search ..."
                ref={inputRef}
                type="search"
                size="md"
                autocomplete="off"
              />
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  );
}

/**
 * @typedef {{
 *   cart: Promise<CartApiQueryFragment | null>;
 *   children?: React.ReactNode;
 *   footer: Promise<FooterQuery>;
 *   header: HeaderQuery;
 *   isLoggedIn: Promise<boolean>;
 * }} LayoutProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
