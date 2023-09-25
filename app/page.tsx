import React from 'react'
import Navbar from '@/components/nav/page'
import Hero from '@/components/hero/page'
import Footer from '@/components/footer/footer'
import Jewellery from '@/components/Jewellery/jewellery'
import products from '@/components/mockup'
import Newslatter from '@/components/newsletter/page'
import ProductTypes from '@/components/ProductTypes'
import Strip from '@/components/Strip/strip'
import Allcard from '@/components/card/allcards'
import Card from '@/components/view/card'
import Copyright from '@/components/copyright/copyright';

function Home() {
  return (
    <div>
        
        <Hero/>
        <ProductTypes/>
        <Card/>
        <Jewellery/>
        <Newslatter/>
        {/* <Strip/> */}
       

    </div>
  )
}

export default Home

