"use client"
import products from '@/components/mockup'
import navbar from '@/components/nav/page'
import { StaticImageData } from 'next/image';
import React, { useState } from 'react'
import { Product } from '@/components/type';
import Image from 'next/image';
import hero from '@/components/hero/page';
import Link from 'next/link';
import Navbar from '@/components/nav/page';
import AddToCart from '@/components/ui/AddToCart';
import { Button } from '@/components/ui/Button';
import PortableText from 'react-portable-text';
import { ShoppingCart } from 'lucide-react';
import Productimg1 from "@/public/product-page-01-related-product-01 (1).jpg";
import { CartItem, addToCart } from '@/app/store/Slice/cartSlice';
import { useDispatch } from "react-redux"





const getProductsDetail = (id: number) => {
  return products.filter((product) => product.id == id);

};


export default function Page({ params }: { params: { id: number } }) {

  const sizes = [" xs ", " sm ", " md ", " lg ", " xl "]
  const result = getProductsDetail(params.id);

  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  return (
    <div>

      <div className="flex flex-wrap justify-center">
        {result.map((product, index) => (
          <div key={index}>



            <div className="flex flex-col lg:flex-row justify-center items-center py-10">

              <div className="flex gap-x-4 md:gap-x-8">

                <div className="space-y-4">

                  <div className="w-16 md:w-24">
                    <Image width={1000} height={1000} alt={product.alttext} src={product.image} />
                  </div>

                </div>

                <div className="w-[17rem] md:w-[33rem] flex flex-wrap-0">

                  <Image width={1000} height={1000} alt={product.alttext} src={product.image} />

                </div>

              </div>

              <div className="p-6 space-y-8">
                <div className=''>
                  <h1 className="text-3xl text-gray-700">{product.name}</h1>
                  <p className="text-pink-600 text-xl font-medium">{product.brandname}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-gray-700">Select Size</p>
                  <div className="flex gap-2 text-pink-600">
                    {
                      sizes.map((sizes: string, index: number) => (
                        <div key={index} className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">{sizes}</div>
                      ))
                    }
                  </div>
                </div>
                <div className="flex space-x-7">
                  <p className="font-semibold text-xl text-gray-800">Quantity:</p>

                  <div className='flex items-center gap-x-2' >
                    <button className='w-10 h-7 border rounded-full justify-center hover:shadow-xl' onClick={() => {
                      setNum(num <= 1 ? 1 : num - 1)
                    }}> - </button>
                    <span className='text-sm font-mono font-semibold'>{num}</span>
                    <button className='w-10 h-7 border rounded-full justify-center hover:shadow-xl ' onClick={() => {
                      setNum(num + 1)
                    }}> + </button>

                  </div>

                </div>
                <div className="flex gap-x-8 items-center">
                  <Button
                   onClick={() => {
                    dispatch(
                      addToCart({
                        quantity: num,
                       // You might want to replace this with a proper ID
                        product: {
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          prodtitle: product.prodtitle,
                          image: product.image,
                          alttext: product.alttext,
                          brandname: product.brandname,
                          desc: product.desc,
                          category: product.category,
                        },
                      })
                    );
                  }}
                    className="flex items-center text-white bg-gray-900 border border-gray-500 px-4 py-2"
                  >
                    <ShoppingCart /> &nbsp; &nbsp; Add to Cart
                  </Button>
                  <p className="text-2xl font-semibold">${product.price}</p>
                </div>
              </div>

            </div>
            <div className='lg:mx-32 lg:my-24'>
              <div className="relative py-14 px-5 border-b border-gray-400">
                <h2 id='overview' className="top-0 px-5 absolute text-6xl md:text-[9rem] text-gray-200 text-center mx-auto -z-50 ">Overview</h2>
                <p style={{ fontFamily: 'Sora' }} className="text-gray-700 font-bold text-2xl">Product Information</p>
              </div>
              <div className="text-gray-600">
                <div className="flex px-2 py-4">
                  <div className="w-60">
                    <h3 className="font-bold text-md">PRODUCT DETAILS</h3>
                  </div>
                  <p>
                    {product.desc}
                  </p>
                </div>
                <div className="flex px-2 py-8">
                  <div className="w-60">
                    <h3 className="font-bold text-md">PRODUCT CARE</h3>
                  </div>
                  <ul className="pl-3 list-disc font-semibold text-gray-900">
                    <li>Hand wash using cold water.</li>
                    <li>Do not using bleach.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="h-16" />
          </div>



        ))
        }
      </div >
    </div >




  );
}
