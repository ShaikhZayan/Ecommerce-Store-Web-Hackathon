"use client"
import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { Slide, ToastContainer, Zoom, toast, Theme, ToastTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Github, Instagram, Twitter, ZoomIn } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "@/public/Logo.png";

const Footer = () => {

 
    
    return (
        <div className='mx-auto max-w-screen-xl px-3 med:px-10 zero:px-4'>
          
          <div className='flex flex-wrap justify-center'>
            <ToastContainer
                
                position="top-right"
                autoClose={5000}
                transition={Zoom}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light" />
        
            <footer className="mx-auto mt-12 flex flex-col  md:flex-row pb-8 gap-x-12 med:mt-24 ">
      <div className="max-w-xs mr-20">
        <Link href={"/"}>
        <Image
            className="mb-1 py-2"
            src={logo}
            alt="Dine Market"
            width={150}
            height={150}
          />
        </Link>
        <p className="py-6 font-semibold  zero:mt-5 text-gray-400 font-five leading-relaxed tracking-wider">
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </p>
        <div className="flex gap-x-4 ">
          <div className="bg-gray-300 py-2 px-2 rounded-xl">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/therafiali/"}
            >
             <Twitter />
            </Link>
          </div>
          <div className="bg-gray-300 py-2 px-2 rounded-xl">
            <Link
              target="_blank"
              href={"https://www.instagram.com/zayan.1326"}
            >
            <Instagram />
            </Link>
          </div>
          <div className="bg-gray-300 py-2 px-2 rounded-xl">
            <Link
              target="_blank"
              href={"https://www.github.com/shaikhzayan"}
            >
            <Github />
            </Link>
          </div>
        </div>
      </div>
      <div className="mr-10 ">
        {/* first c */}
        <h4 style={{fontFamily:"Sora"}} className="text-gray-600 mt-6 md:mt-0 font-bold tracking-wider pb-4 text-lg">
          Company
        </h4>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">About</p>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          Term of Use
        </p>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          Privacy Policy
        </p>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          How it Works
        </p>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          Contact Us
        </p>
      </div>
      <div className="mr-10">
        {/* second c */}
        <h4 style={{fontFamily:"Sora"}} className="text-gray-600 mt-6 md:mt-0 font-bold tracking-wider pb-4 text-lg">
          Support
        </h4>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          Support Carrer
        </p>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          24h Service
        </p>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          Quick Chat
        </p>
      </div>
      <div className="mr-10">
        <h4 className="text-gray-600  mt-6 md:mt-0 font-bold tracking-wider pb-4 text-lg">
          Contact
        </h4>
        <Link href={""}><p className="text-gray-400 font-semibold tracking-wider py-2 ">Discord</p></Link>
        <p className="text-gray-400 font-semibold tracking-wider py-2 ">
          Support 24h
        </p>
      </div>
    </footer>

    </div> 
        </div>
    )
}

export default Footer

