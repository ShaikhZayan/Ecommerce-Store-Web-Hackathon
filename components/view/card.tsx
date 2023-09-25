"use client"
import React, { useRef } from "react";
import Cardcode from "../card/cards";
import products from "../mockup";
import img from "@/public/420x260.png";
import { StaticImageData } from "next/image";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import { X } from "lucide-react";



export default function Card() {
  const tabBoxRef = useRef<HTMLDivElement>(null);
  let initialX: number;
  let isDragging = false;

  // Desktop functions
  function mouseMoves(e: any) {
    if (!isDragging) return;
    if (tabBoxRef.current) {
      tabBoxRef.current.scrollLeft -= e.movementX;
    }
  }

  function mouseDown(e: any) {
    isDragging = true;
    initialX = e.clientX;
    e.preventDefault(); // Prevent the default drag behavior
  }

  function mouseUp() {
    isDragging = false;
  }

  // Mobile functions
  function mouseMovesForMobile(e: any) {
    if (!isDragging) return;
    if (tabBoxRef.current) {
      var currentX = e.touches[0].clientX;
      var movementX = currentX - initialX;
      tabBoxRef.current.scrollLeft -= movementX / 5;
    }
  }

  function mouseDownForMobile(e: any) {
    isDragging = true;
    initialX = e.touches[0].clientX;
    e.preventDefault(); // Prevent the default drag behavior
  }

  function mouseUpForMobile() {
    isDragging = false;
  }

  const productChecks = products.slice(0, 6);

  return (
    <div>
      <div className="space-y-4 justify-between px-6 md:px-36">
        <div className="text-center space-y-3">
          <p className="text-blue-800 font-bold text-sm">PROMOTIONS</p>
          <h3 className="text-3xl text-[#212121] font-bold">Our Promotions Events</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
       <div
          ref={tabBoxRef}
          onMouseMove={mouseMoves}
          onMouseDown={mouseDown}
          onMouseUp={mouseUp}
          className="select-none gap-1 flex overflow-x-hidden py-4 overflow-y-hidden"
          onTouchMove={mouseMovesForMobile}
          onTouchStart={mouseDownForMobile}
          onTouchEnd={mouseUpForMobile}
        >

          {productChecks.map((product) => (
            <Cardcode
              key={product.id}
              title={product.name}
              price={product.price}
              category={product.category}
              alt={product.alttext}
              id={product.id}
              image={product.image}
            />
          ))}
        </div>
      </div>
    
    </div>
    </div>
  );
}
