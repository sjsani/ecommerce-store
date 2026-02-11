

import GetCategory from '@/actions/GetCategory';
import GetColors from '@/actions/GetColor';
import GetProducts from '@/actions/GetProducts';
import GetSizes from '@/actions/GetSizes';
import Billboard from '@/components/Billboard';

import React from 'react'
import Filter from './components/Filter';
import NoResults from '@/components/ui/no-result';
import ProductCard from '@/components/ui/product-card';
import Container from '@/components/ui/Container';
import MobileFilters from './components/MobileFilters';

export const revalidate = 0;


interface CategoryPageProps {
  params:{categoryId: string;},
  searchParams:{
    colorId:string;
    sizeId:string;
  }

}
const CategoryPage: React.FC<CategoryPageProps> =  async({
  params, searchParams
}) => {
  const {categoryId} = params;
  const {colorId, sizeId} = await searchParams;
  const products = await GetProducts({
    categoryId: categoryId,
    colorId: colorId,
    sizeId:sizeId,
  });
  const sizes = await GetSizes()
  const colors = await GetColors()
  const category = await GetCategory(categoryId)
  return (
    <div className='bg-white'>
      <Container>
      <Billboard data={category.billboard}/>
      <div className='px-4 sm:px-6 lg:px-8 pb-24'>
        <div className='lg:grid lg:grid-cols-5 lg:gap-x-8'>
          <MobileFilters sizes={sizes} colors={colors} />
          <div className='hidden lg:block'>
          <Filter 
          valueKey="sizeId"
          name="Sizes"
          data={sizes}/>
          <Filter 
          valueKey="colorId"
          name="Colors"
          data={colors}/>
        </div>

        <div className='mt-6 lg:col-span-4 lg:mt-0'>
          {products.length ===0 && <NoResults />}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {products.map((item)=>(
              <ProductCard 
              key={item.id}
              data={item}/>
            ))}
          </div>
        </div>
        
      </div>
      </div>
      </Container>
    </div>
  )
}

export default CategoryPage