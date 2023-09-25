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
import { Minus, MinusCircle, Plus, PlusCircle, ShoppingCart } from 'lucide-react';
import { buttonVariants } from "@/components/ui/Button"
import Productimg1 from "@/public/product-page-01-related-product-01 (1).jpg";
import { CartItem, addToCart } from '@/app/store/Slice/cartSlice';
import { useDispatch } from "react-redux"





const getProductsDetail = (id: number) => {
  return products.filter((product) => product.id == id);

};


export default function Page({ params }: { params: { id: number } }) {

  const sizes = [" XS ", " SM ", " MD ", " LG ", " XL "]
  const result = getProductsDetail(params.id);

  const dispatch = useDispatch();
  const [num, setNum] = useState(1);
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center m-10 py-7">
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

                  <div className="w-[15rem] md:w-[30rem] flex flex-wrap-0">

                    <Image width={1000} height={1000} alt={product.alttext} src={product.image} />

                  </div>

                </div>

                <div className="p-6 space-y-5">
                  <div className='h-16'>
                    <h1 style={{ fontFamily: "sans-serif" }} className="text-[33px] text-[#212121]">{product.name}</h1>
                    <p className="text-gray-400 text-xl font-medium">{product.brandname}</p>
                  </div>
                  <br />

                  <div className="h-30 space-y-2">
                    <p className="text-md uppercase font-semibold text-[#212121]">Select Size</p>

                    <div className="flex gap-2 text-text-[#212121]">
                      {
                        sizes.map((sizes: string, index: number) => (
                          <div key={index} className="hover:shadow-xl font-semibold cursor-pointer rounded-full bg-gray-100 w-12 h-12 flex justify-center items-center">{sizes}</div>
                        ))
                      }
                    </div>
                  </div>
                  <br />
                  <div className="flex space-x-7">
                    
                    <p style={{ fontFamily: "Sora" }} className="font-semibold text-md text-[#212121] mt-2">Quantity:</p>

                    <div className='flex items-center gap-x-2' >


                      <Button variant="ghost" className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800" onClick={() => {
                        setNum(num <= 1 ? 1 : num - 1)
                      }}> - </Button>

                      <span className='text-lg '>{num}</span>

                      <Button variant="ghost" className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800" onClick={() => {
                        setNum(num + 1)
                      }} > + </Button>

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
                      className="flex items-center px-4 py-2"
                    >
                      <ShoppingCart /> &nbsp; &nbsp; Add to Cart
                    </Button>
                    <p style={{fontFamily:"Sora"}} className="text-2xl mr-5 -translate-x-3">${product.price}</p>
                  </div>
                </div>

              </div>
              <div className="relative py-14 px-2 border-b border-gray-400">
                <h2 className="top-0 absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 ">Overview</h2>
                <p style={{ fontFamily: 'Sora' }} className="text-gray-700 font-bold text-2xl">Product Information</p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row mt-4 ">
                <h3 className="text-[#666] basis-1/4  text-base font-bold max-w-6xl">
                  PRODUCT DETAILS
                </h3>
                <p className="basis-2/4 text-gray-500 text-justify tracking-wider leading-relaxed scroll-m-20"><span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum, voluptatem eaque sunt repellendus harum, ut accusantium nihil repellat molestias eos voluptates nemo reiciendis aperiam, facere soluta mollitia quam laudantium.
                  </span></p>
              </div>
              <div className="flex flex-col gap-y-2 md:flex-row mt-4 ">
                <h3 className="text-[#666] basis-1/4  text-base font-bold max-w-6xl">
                  PRODUCT CARE
                </h3>
                <div className="">
                  <li className="list-disc basis-3/4 text-[#212121] font-bold text-justify tracking-wider leading-relaxed scroll-m-20">
                    Hand wash using cold water.
                  </li>
                  <li className="list-disc basis-3/4 text-[#212121] font-bold text-justify tracking-wider leading-relaxed scroll-m-20">
                    Do not using bleach.
                  </li>
                  <li className="list-disc basis-3/4 text-[#212121] font-bold text-justify tracking-wider leading-relaxed scroll-m-20">
                    Hang it to dry.
                  </li>
                </div>
              </div>
            </div>




          ))
          }


        </div >
      </div >
    </div >



  );
}
