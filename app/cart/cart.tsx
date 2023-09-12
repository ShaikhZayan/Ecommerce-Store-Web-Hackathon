import React from 'react'

const Cart = () => {
  return (
<div className='mt-8 mb-16 px-4 md:px-8 lg:px-16 xl:px-20'>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
    {/* Cart Items */}
    <div className='md:col-span-2'>
      {/* Example cart item */}
      <div className='flex items-center space-x-4 p-4 border-b border-gray-300'>
        <img src='item-image-url' alt='Item' className='w-20 h-20 object-cover rounded-lg' />
        <div>
          <h3 className='text-lg font-semibold'>Product Name</h3>
          <p className='text-gray-500'>Quantity: 2</p>
          <p className='text-gray-500'>$24.99 each</p>
        </div>
        <button className='text-red-500 ml-auto'>Remove</button>
      </div>
      {/* Repeat this structure for each cart item */}
    </div>
    {/* Order Summary */}
    <div className='bg-red-300 p-4 md:p-8 rounded-xl'>
      <h2 className='mb-4 text-lg font-semibold uppercase'>Order Summary</h2>
      {/* Divider */}
      <div className='border-t border-gray-400 my-2'></div>
      {/* Pricing */}
      <div className='text-sm font-medium tracking-tight'>
        <div className='flex justify-between items-center mb-2'>
          <p>Subtotal</p>
          <p>$49.98</p>
        </div>
        <div className='flex justify-between items-center'>
          <p>Total</p>
          <p className='text-red-500'>$49.98</p>
        </div>
      </div>
      {/* Checkout Button */}
      <button className='block w-full bg-red-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600'>
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>





    


  )
}

export default Cart
{/* <div className='content-center flex-wrap justify-center grid grid-cols-2 md:grid-cols-3 py-10 lg:grid-cols-4 lg:px-44 lg:gap-2 gap-3'>
        <h1 style={{fontFamily:"Sora"}} className='text-2xl'>Shopping Cart</h1>
      </div> */}
