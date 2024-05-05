import React, {Suspense, useState} from 'react';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Badge,
  Avatar,
  Button,
} from '@nextui-org/react';
import {useLocation, useLoaderData, Await} from '@remix-run/react';
import {ProductLogo} from '~/components/common/ProductLogo';
import {Icon} from '~/components/common/Icon';
import {useRootLoaderData} from '~/root';

export function Navbar({header, cart, isLoggedIn}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {publicStoreDomain} = useRootLoaderData();
  const loaderData = useLoaderData();
  const {pathname} = useLocation();
  const {shop, menu} = header;
  const customer = loaderData?.customer ?? {};
  const menuItems = menu?.items ?? [];

  const getRelativeUrl = (item) => {
    if (!item.url) return null;

    const url =
      item.url.includes('myshopify.com') ||
      item.url.includes(header.shop.primaryDomain.url) ||
      item.url.includes(publicStoreDomain)
        ? new URL(item.url).pathname
        : item.url;

    return url;
  };

  return (
    <NextUINavbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred
      height="5rem"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />

        <Link href="/" className="hover:opacity-100">
          <NavbarBrand>
            <ProductLogo name={shop.name} />
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => {
          const url = getRelativeUrl(item);

          return (
            <NavbarItem key={item.id} isActive={url === pathname}>
              <Link href={url} color="primary" size="lg">
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SearchToggle />
        </NavbarItem>
        <NavbarItem className="mt-1">
          <CartToggle cart={cart} />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link href="/account">
            <Suspense fallback="Sign in">
              <Await resolve={isLoggedIn} errorElement="Sign in">
                {(isLoggedIn) => (
                  <>
                    {isLoggedIn && (
                      <Avatar
                        size="sm"
                        showFallback
                        name={customer?.firstName}
                        src="https://images.unsplash.com/broken"
                      />
                    )}
                    {!isLoggedIn && (
                      <Button
                        href="/account/login"
                        as={Link}
                        color="primary"
                        variant="solid"
                        size="sm"
                      >
                        Sign In
                      </Button>
                    )}
                  </>
                )}
              </Await>
            </Suspense>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => {
          const url = getRelativeUrl(item);

          return (
            <NavbarMenuItem
              key={`nav-menu-item-${item.id}`}
              isActive={url === pathname}
            >
              <Link
                color="foreground"
                className="w-full"
                href={url}
                size="md"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          );
        })}
        <NavbarMenuItem>
          <Suspense fallback="Sign in">
            <Await resolve={isLoggedIn} errorElement="Sign in">
              {(isLoggedIn) => (
                <>
                  {isLoggedIn && (
                    <Link
                      href="/account"
                      as={Link}
                      color="foreground"
                      className="w-full"
                      size="md"
                    >
                      Account
                    </Link>
                  )}

                  {!isLoggedIn && (
                    <Link
                      href="/account/login"
                      as={Link}
                      color="foreground"
                      className="w-full"
                      size="md"
                    >
                      Sign In
                    </Link>
                  )}
                </>
              )}
            </Await>
          </Suspense>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}

function SearchToggle() {
  return (
    <a href="#search-aside">
      <Icon icon="search" size={24} className="stroke-current text-primary" />
    </a>
  );
}

function CartBadge({count}) {
  return (
    <a href="#cart-aside">
      <Badge
        content={count}
        size="sm"
        color="primary"
        shape="circle"
        showOutline={false}
        isInvisible={count === 0}
      >
        <Icon
          icon="shopping-bag"
          size={24}
          className="stroke-current text-primary"
        />
      </Badge>
    </a>
  );
}

function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}
