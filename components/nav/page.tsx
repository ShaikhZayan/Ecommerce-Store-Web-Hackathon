"use client"
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelector } from 'react-redux'
import logo from "@/public/Logo.png";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/Sheet";
import products from "../mockup";
import { useState } from "react";
import { RootState } from "@/app/store/store";
import { Button } from "../ui/Button";
import { CartItem } from "@/app/store/Slice/cartSlice";

// const closemenu = () => {
// const [Onclick, setchange] = useState()
// }



export default function Navbar() {
  const cartValue = useSelector((state: RootState) => state.cart);

  // Calculate the total cart quantity
  const totalQuantity = cartValue.reduce((total, item) => total + item.quantity, 0);
  return (
    <div>
      <nav className="bg-white">
        <div className="md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/">
            <div className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap lg:pl-10 md:pl-2">
                <Image src={logo} className="w-40" alt="Flowbite Logo" />
              </span>
            </div>
          </Link>
          <div className="flex md:order-2 ">
            <Button variant={"ghost"} type="button" className="bg-[#ffff] w-10 h-10 font-medium rounded-full text-sm px-2 py-2 text-center justify-center mr-3 md:mr-0 lg:mr-10 lg:m-2">
              <Link href={"/cart"}>
                <div className="hover:duration-200">
                  <span className="absolute rounded-full bg-red-500 w-4 h-4 translate-x-3 translate-y-1 -mt-2 flex items-center justify-center text-white text-xs">
                    <div className="mr-[1px] ml-[1px] mt-[1px] mb-[2px] text-[11px]">{totalQuantity}</div>
                  </span>
                  <ShoppingCart />
                </div>
              </Link>
            </Button>



            <Sheet>

              <SheetTrigger

                data-collapse-toggle="navbar-cta"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
                aria-controls="navbar-cta"
                aria-expanded="false">



                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-align-right"
                >
                  <line x1={21} x2={3} y1={6} y2={6} />
                  <line x1={21} x2={9} y1={12} y2={12} />
                  <line x1={21} x2={7} y1={18} y2={18} />
                </svg>

              </SheetTrigger>
              <SheetContent className="bg-[#ffffff] flex justify-center"> {/* Center the content */}
                <SheetHeader>
                  <SheetTitle className="flex">
                    <Image src={logo} alt={"Logo"} />
                  </SheetTitle>
                  <hr />
                  <SheetDescription>
                    <ul className="mt-52 justify-between">
                      <Link href={"/"}>
                        <li  className="text-3xl translate-x-1 py-2 text-[#212121] hover:text-[#212121]/90">
                          Home
                        </li>
                      </Link>

                      <Link href={"/category/Female"}>
                        <li  className="text-3xl py-2 translate-x-1 text-[#212121] hover:text-[#212121]/90">
                          Female
                        </li>
                      </Link>

                      <Link href={"/category/Male"}>
                        <li  className="text-3xl translate-x-1 py-2 text-[#212121] hover:text-[#212121]/90">
                          Male
                        </li>
                      </Link>

                      <Link href={"/category/Kidz"}>
                        <li  className="text-3xl py-2 translate-x-1 text-[#212121] hover:text-[#212121]/90">
                          Kidz
                        </li>
                      </Link>

                      <Link href={"/products"}>
                        <li  className="text-3xl py-2 translate-x-1 text-[#212121] hover:text-[#212121]/90">
                          All Products
                        </li>
                      </Link>

                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>


          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 lg:mr-5 sm:mr-10"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium text-lg p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <Link
                 
                  href="/"
                  className="block py-2 pl-1 pr-1  text-[#212121] hover:text-[#212121]/90"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                
                  href="/category/Male"
                  className="block py-2 pl-1 pr-1   text-[#212121] hover:text-[#212121]/90"
                >
                  Male
                </Link>
              </li>
              <li>
                <Link
                 
                  href="/category/Female"
                  className="block py-2 pl-1 pr-1 text-[#212121] hover:text-[#212121]/90"
                >
                  Female
                </Link>
              </li>
              <li>
                <Link
                 
                  href="/category/Kidz"
                  className="block py-2 pl-1 pr-1 text-[#212121] hover:text-[#212121]/90"
                >
                  Kidz
                </Link>
              </li>
              <li>
                <Link
                 
                  href="/products"
                  className="block py-2 pl-1 pr-13  text-[#212121] hover:text-[#212121]/90"
                >
                  All Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
