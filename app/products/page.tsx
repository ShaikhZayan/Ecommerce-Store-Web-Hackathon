import Allcard from '@/components/card/allcards'
import Cardcode from '@/components/card/cards'
import products  from '@/components/mockup'
import navbar from '@/components/nav/page'
import { StaticImageData } from 'next/image'



const Allproducts = () => {
  return (
    <>
  
         <div className="content-center flex-wrap justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 lg:px-28 lg:gap-2 gap-3">
            {
                products.map((products) => (
                    <Allcard key={products.id} title={products.name} price={products.price} category={products.category} id={products.id} alt={products.alttext} image={products.image as StaticImageData} />
                ))}
        </div>
    </>
  )
}

export default Allproducts