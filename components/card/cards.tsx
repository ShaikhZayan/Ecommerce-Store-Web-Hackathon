"use client"
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';


const Cardcode = (props: {
  id: number;
  title: string;
  price: string;
  category?: string;
  alt: string;
  image: string | StaticImageData;
  style?: React.CSSProperties; // Add the style prop here
}) => {
  return (
    <>


      <div style={props.style}> {/* Apply the style to the wrapping div */}

        <div className="max-w-sm min-w-[24rem] space-y-3 scale-90 md:hover:scale-95 lg:hover:scale-95 select-none duration-300">
          <div className="relative w-full">
            <div className="absolute inset-0 z-10" />
            <Image width={1000} height={1000} src={props.image} alt={props.alt} />
          </div>
          <div className="space-y-1 text-gray-600 font-semibold text-lg select-none">
            <Link href={`/products/${props.id}`}>
              <h6>{props.title}</h6>
              <p>${props.price}</p>
            </Link>
          </div>

        </div>

      </div>



    </>


  );
};

export default Cardcode;
