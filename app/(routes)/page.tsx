import GetBillboard from '@/actions/GetBillboard';
import GetProducts from '@/actions/GetProducts';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container'
import React from 'react'
export const revalidate = 0
const HomePage = async () => {
  const products = await GetProducts({isFeatured:true})
  const billboard = await GetBillboard("3dd099f0-654d-4c6a-ba06-b26b9028a244")
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage;