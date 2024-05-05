import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData} from '@remix-run/react';
import {Suspense} from 'react';
import {Money} from '@shopify/hydrogen';
import {Button, Link, Card, Image, CardHeader} from '@nextui-org/react';
import {HeroBackground} from '~/components/common/HeroBackground';

/**
 * @type {MetaFunction}
 */
export const meta = ({data}) => {
  return [
    {
      title: data?.shop?.name ?? 'Cameo Chemicals',
      description: data?.shop?.description ?? '',
    },
  ];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const {storefront} = context;
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollections = collections.nodes ?? [];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const shop = await storefront.query(SHOP_QUERY);

  return defer({featuredCollections, recommendedProducts, shop});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div>
      <div className="hero">
        <HeroBackground />
        <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 col-start-1 mx-auto md:mx-10">
            <h1 className="text-4xl font-bold mb-4">
              Tailored Solutions Redefining Industries
            </h1>
            <p className="mb-4">
              We are an industrial chemical company that focuses on the Car
              Wash, Truck Wash, Ready Mix Concrete, Asphalt, Floor Care, Odor
              Control and Manufacturing Industries.
            </p>
            <p className="mb-4">
              Cameo Chemicals offers custom blending products to meet the
              specific needs of our customers, and we are able to supply these
              products in a variety of quantities and sizes. We also offer a
              wide selection of standard products.
            </p>
            <Button
              href="/collections"
              as={Link}
              size="large"
              radius="sm"
              variant="solid"
              className="bg-white text-primary font-bold"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <FeaturedCollections
        collections={data?.featuredCollections}
        className="mt-4"
      />
      <RecommendedProducts
        products={data.recommendedProducts}
        className="mt-4"
      />
    </div>
  );
}

/**
 * @param {{
 *   collection: FeaturedCollectionFragment;
 * }}
 */
function FeaturedCollections({collections}) {
  // const image = collections?.image;
  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-primary">
        Supported Industries
      </h2>
      <div className="gap-6 grid grid-cols-12 grid-rows-2 px-8">
        {collections.map((item, index) => (
          <Card
            key={`featured-collection-${index + 1}`}
            shadow="sm"
            isPressable
            isFooterBlurred
            className="w-full h-[300px] col-span-4"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h4 className="text-white font-medium text-2xl">{item.title}</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://placehold.co/1024x1024/369b92/369b92.png"
            />
            {/* <Image data={item?.image} sizes="100vw" /> */}
          </Card>
        ))}
      </div>
    </div>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const SHOP_QUERY = `#graphql
  query Shop {
    shop {
      name
      description
    }
  }
`;

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    description
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 8, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
