import React from 'react'
import Image, { StaticImageData } from 'next/image'
import img from '@/public/420x260.png'
import Link from 'next/link'
import img2 from '@/public/product-page-01-related-product-01 (1).jpg'

export default function Allcard(props: { id: number, title: string, price: number, category?: string, alt: string, image: string | StaticImageData }) {
    return (
        <div>
            <Link href={`/products/${props.id}`}>
                <div className='mx-auto w-[11rem] md:w-[16rem] space-y-2 hover:scale-95 duration-300'>
                    <div className='relative w-full'>
                        <div className='absolute inset-0 z-10' />
                        <Image width={1000} height={1000} src={props.image} alt={props.alt} />
                    </div>
                    <div className='space-y-1 text-gray-600 font-semibold text-lg select-none'>

                        <h6 className='text-xl'>{props.title}</h6>
                        <p className='text-md text-gray-400'>{props.category}</p>
                        <p style={{fontFamily:"Sora"}}>${props.price}</p>

                    </div>
                </div>
            </Link>
        </div>
    )
}

