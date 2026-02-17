import GetProducts from '@/actions/GetProducts'
import GetProduct from '@/actions/GetProduct'
import Container from '@/components/ui/Container'
import React from 'react'
import ProductList from '@/components/ProductList'
import Gallery from '@/components/Gallery'
import Info from '@/components/Info'

interface ProductPageProps {
  params: {
    productId: string
  }
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  // In some Next versions, params may be a Promise — unwrap it
  const resolvedParams = await params;
  const { productId } = resolvedParams;

  console.log("📌 ProductPage params:", resolvedParams);

  if (!productId) {
    console.error("❌ No productId received! Cannot fetch product.");
    return (
      <div className="h-full w-full flex justify-center items-center text-red-500">
        Product not found
      </div>
    );
  }

  const product = await GetProduct(productId);
  console.log("📦 Fetched product:", product);

  if (!product) {
    return (
      <div className="h-full w-full flex justify-center items-center text-red-500">
        Product not found
      </div>
    );
  }

  const suggestedProducts = await GetProducts({ categoryId: product?.category?.id });
  console.log("🛍️ Suggested products:", suggestedProducts);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
