"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Product } from '../type';
import { CartItem, addToCart, removeFromCart, subtractCart } from '@/app/store/Slice/cartSlice';
import { Button } from '../ui/Button';

function CartPage() {
  const cartArray = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartArray.reduce((total: number, item: { product: { price: number; }; quantity: number; }) => total + item.product.price * item.quantity, 0);
  };


  return (
    <div>
      <div>
      <section className='mx-auto max-w-screen-xl px-5 med:px-10 zero:px-4 '>
          <div className="mx-auto">
            <div className="py-6">
              {cartArray.length > 0 && ( 
                <h1 style={{ fontFamily: "Sora" }} className="text-2xl font-semibold text-[#212121]">
                  Shopping Cart
                </h1>
              )}
            </div>

            {cartArray.length > 0 ? (
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="flex flex-col basis-3/4 justify-center sm:justify-between gap-5 w-full">
                  {cartArray.map((item: CartItem, index: number) => (
                    <div
                      className="flex flex-col w-full justify-center sm:justify-start items-center sm:flex-row gap-5"
                      key={index}
                    >
                      <div className="w-40 basis-1/4">
                        <Image
                          className="rounded-lg"
                          alt={item.product.alttext}
                          src={(item.product.image)}
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="basis-3/4">
                        <div className="space-y-1 md:space-y-3 w-full">
                          <div className="flex w-full">
                            <h2 className="md:text-2xl font-normal text-gray-700 w-full">
                              {item.product.name}
                            </h2>
                            <div
                              onClick={() => {
                                dispatch(removeFromCart(item.product.id)); // Use item.product.id
                              }}
                              className="cursor-pointer"
                            >
                              <Trash2 size={28} />
                            </div>
                          </div>
                          <p className="text-gray-400 font-medium">{item.product.category}</p>
                          <p className="font-bold">Delivery Estimation</p>
                          <p className="text-yellow-500 font-bold">5 Working Days</p>
                          <div className="flex justify-between">
                            <div className="font-semibold md:text-lg">
                              ${item.product.price * item.quantity}
                            </div>
                            <div className="flex gap-2">
                              <Button
                                variant={"ghost"}
                                className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800"
                                onClick={() =>
                                  dispatch(
                                    subtractCart({ productId: item.product.id })
                                  )
                                }
                              >
                                -
                              </Button>
                              <h3>{item.quantity}</h3>
                              <Button
                                variant={"ghost"}
                                onClick={() => {
                                  dispatch(
                                    addToCart({
                                      quantity: 1,
                                      product: item.product, 
                                    })
                                  );
                                }}
                                className="select-none cursor-pointer flex justify-center items-center w-9 h-9 rounded-full border border-gray-800"
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="basis-1/4 space-y-6 p-2 zero:px-6 mt-12 w-auto h-auto lg:mt-0 rounded-md bg-slate-100">
                    <h6 style={{fontFamily:"Sora"}} className="font-semibold text-xl">Order Summary</h6>
                    <div className="flex justify-between">
                      <p className="text-lg font-medium">Quantity:</p>
                      <p className="text-lg font-normal">
                        {cartArray.reduce((total: any, item: { quantity: any; }) => total + item.quantity, 0)} Product
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-lg font-medium">Subtotal:</p>
                      <p>${calculateTotalAmount()}</p>
                    </div>
                    <Button
                      className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full"
                      
                    >
                      Proceed To CheckOut
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center py-24">
                <p>

                  <svg
                   
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height={150}
                    width={150}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z" />
                  </svg>
                </p>
                <p style={{fontFamily:"Sora"}}className="text-[#212121] font-bold lg:text-4xl md:text-ld sm:text-sm  tracking-widest leading-relaxed scroll-m-20">
                  Your shopping bag is empty
                </p>
              </div>
            )}
          </div>
          

        </section>
      </div>

    </div>

  );
}



export default CartPage;

