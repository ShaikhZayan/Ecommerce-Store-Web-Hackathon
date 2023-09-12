import Cardcode from '@/components/card/cards'
import products from '@/components/mockup'
import navbar from '@/components/nav/page'
import { StaticImageData } from 'next/image';
import React from 'react'
import { Product } from '@/components/type';
import Allcard from '@/components/card/allcards';






export default function Page({ params }: { params: { items: string } }) {
  const getProductsByCategory = (category: string) => {
    return products.filter((product) => product.category === category);
  };

  const result = getProductsByCategory(params.items);

  return (
    <div>
      <div className="content-center flex-wrap justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 lg:px-28 lg:gap-2 gap-3">

        {

          result.length > 0 ? result.map((product) => (

            <Allcard
              key={product.id}
              title={product.name}
              price={product.price}
              alt={product.alttext}
              category={product.category}
              image={product.image as StaticImageData}
              id={product.id}
            />

          )) :
            <>
            <div>
            </div>
              <p style={{ fontFamily: 'Sora' }} className=' text-md translate-x-44 mt-56 scale-150'>Comming Soon, No Product Found</p>
            </>

        }
      </div>
    </div>
  );
}




