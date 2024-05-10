import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, useNavigate} from '@remix-run/react';
import {Suspense} from 'react';
import {Money} from '@shopify/hydrogen';
import {
  Button,
  Link,
  Image,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from '@nextui-org/react';
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
              Cameo Chemicals is an industrial chemical company that focuses on
              Car Wash, Truck Wash, Ready Mix Concrete, Asphalt, Floor Care,
              Odor Control and Manufacturing Industries.
            </p>
            <p className="mb-4">
              We offer a wide selection of standard and custom blended products
              & solutions. We are able to supply our solutions in a variety of
              quantities and sizes to meet your specific needs.
            </p>
            <Button
              href="/collections"
              as={Link}
              size="large"
              radius="sm"
              variant="solid"
              className="bg-white text-primary font-bold mt-2"
            >
              Explore Solutions
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
  let navigate = useNavigate();

  return (
    <div className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-primary">
        Our Industries & Solutions
      </h2>
      <div className="gap-6 grid grid-cols-12 grid-rows-2 md:px-20 px-8">
        {collections.map((item, index) => (
          <>
            <Card
              key={`featured-collection-${index + 1}`}
              shadow="sm"
              onPress={() => navigate(`/collections/${item.handle}`)}
              isPressable
              isFooterBlurred
              className="w-full h-[300px] md:col-span-4 sm:col-span-6 col-span-12"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <h4 className="text-white font-medium text-2xl">
                  {item.title}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt={item?.title}
                className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                src={item?.image?.url}
              />
            </Card>
          </>
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
  let navigate = useNavigate();

  return (
    <div className="py-16 px-4 bg-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">
        Recommended Products
      </h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="md:px-20 px-8 w-full overflow-x-auto">
              <div className="flex whitespace-nowrap">
                {/* TODO Use the actual products from the query */}
                {new Array(12)
                  .fill(products.nodes[0])

                  .map((product, index) => (
                    <div
                      className="inline-block"
                      key={`featured-product-${index + 1}`}
                    >
                      <Card
                        shadow="md"
                        onPress={() => navigate(`/products/${product.handle}`)}
                        isPressable
                        isFooterBlurred
                        className="mx-4 my-4 h-[250px] w-[250px]"
                      >
                        <CardBody className="overflow-visible p-0">
                          <Image
                            src={product.images.nodes?.[0]?.url}
                            removeWrapper
                            alt={product?.title}
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                          />
                        </CardBody>
                        <CardFooter className="text-small justify-between text-white absolute z-10 bottom-0 flex-col items-start">
                          <b>{product.title}</b>
                          <Money data={product.priceRange.minVariantPrice} />
                        </CardFooter>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </Await>
      </Suspense>
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
