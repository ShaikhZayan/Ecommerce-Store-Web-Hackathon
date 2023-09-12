"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import { Product } from '../type';
import { CartItem, cartActions } from '@/app/store/Slice/cartSlice';

function CartPage() {
  const cartArray = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div className="py-6">
          {/* heading */}
          <h1 className="text-2xl font-semibold text-gray-900">Shopping Cart</h1>
        </div>
        <div className="flex justify-between flex-wrap">
          {/* products data show */}
          <div className="flex flex-col gap-5">
            {cartArray &&
              cartArray.map((cartItem: CartItem, index: number) => (
                <div className="flex gap-5" key={index}>
                 <div className="w-40 basis-1/4">
                  {cartArray.map((items: CartItem, i: number) => (
                    <Image
                      key={i}
                      alt={items.product.a}
                      src={items.product.image}
                      width={1000}
                      height={1000}
                    />
                  ))}
                </div>
                  <div>
                    {/* products detail */}
                    <div className="space-y-1 md:space-y-3 w-full">
                      <div className="flex justify-between">
                        <h2 className="md:text-2xl font-light text-gray-700">
                          {cartItem.product.name} {/* Access the product property first */}
                        </h2>
                        <div className="cursor-pointer">
                          <Trash2
                            size={28}
                            onClick={() => {
                              dispatch(cartActions.removeFromCart(cartItem.id || 0)); // Provide a fallback value for id
                            }}
                          />
                        </div>
                      </div>
                      <p className="text-gray-400 font-medium">
                        {cartItem.product.category} {/* Access the product property first */}
                      </p>
                      <h3 className="text-sm md:text-base">Delivery Estimation</h3>
                      <h4 className="text-orange-400 font-semibold md:text-xl">
                        5 Working Days
                      </h4>
                      <div className="flex justify-between">
                        <div className="font-semibold md:text-lg">
                          ${cartItem.product.price} {/* Access the product property first */}
                        </div>
                        <div className="flex gap-2">
                          <button className="select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full bg-gray-200">
                            -
                          </button>
                          {/* <p>{item.qty}</p> */}
                          <button className="border select-none cursor-pointer flex justify-center items-center w-8 h-8 rounded-full border-gray-800">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div>
            {/* subtotal */}
            <div className="basis-1/4 space-y-6 px-6">
              <h6 className="font-semibold text-xl">Order Summary</h6>
              <div className="flex justify-between">
                <p className="text-lg font-light">Quantity:</p>
                <p className="text-lg font-light">
                  {cartArray.length} Product
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-light">Subtotal:</p>
                <p>
                  {/* ${cartArray.reduce((total, cartItem) => total + (cartItem.product[0].price || 0), 0)} Calculate subtotal */}
                </p>
              </div>
              <button className="text-white bg-gray-900 border border-gray-500 px-4 py-2 w-full">
                Proceed To CheckOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;