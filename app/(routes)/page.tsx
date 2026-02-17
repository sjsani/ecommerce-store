import GetBillboard from '@/actions/GetBillboard';
import GetProducts from '@/actions/GetProducts';
import Billboard from '@/components/Billboard';
import ProductList from '@/components/ProductList';
import Container from '@/components/ui/Container'
import React from 'react'
export const revalidate = 0
const HomePage = async () => {
  const products = await GetProducts({ isFeatured: true })
  const billboard = await GetBillboard("708bf69a-9fe2-4dda-857c-68bddebf3883")

  return (
    <div className='space-y-10 pb-10'>

      {/* Billboard stays constrained */}
      <Container>
        <Billboard data={billboard} />
      </Container>

      {/* Products use more space */}
      <Container fullWidth>
        <ProductList title="Featured Products" items={products} />
      </Container>

    </div>
  )
}


export default HomePage;