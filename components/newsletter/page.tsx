"use client"
import { useState } from "react";
import { Slide, ToastContainer, Zoom, toast, Theme, ToastTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "../ui/Button";

const Newslatter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false); // New state variable to track subscription status

  const handleSubscribe = () => {
    const isEmailValid = email.trim() !== '' && email.length <= 50 && /\S+@\S+\.\S+/.test(email);
    if (isEmailValid) {
      toast.success('Email Subscribed');
      setEmail(''); // Clear the email input after successful subscription
      setSubscribed(true); // Update the subscription status to true
    } else if (email.trim() === '') {
      toast.error('Please enter your email first.');
      setEmail('');
    } else if (email.length > 50) {
      toast.error('Too many characters. Email should not exceed 50 characters.');
      setEmail('');
    } else {
      toast.error('Invalid email format. Please enter a valid email address.');
      setEmail('');
    }
  };
  return (
    <>
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

      <div className="flex flex-wrap justify-center mt-20  w-auto scale-105">
        <div className="relative text-center space-y-4 min-h-[40vh] md:h-[70vh] lg:min-h-[50rem] flex flex-col justify-center items-center text-[#212121]">
          <h6 className="absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50 ">Newsletter</h6>
          <h6 style={{ fontFamily: 'Sora' }} className="text-3xl md:text-4xl font-bold">Subscribe Our Newsletter</h6>
          <p className="max-w-[16rem] text-lg font-medium">Get the latest information and promo offers directly</p>
          <div className=" flex gap-4 flex-wrap items-center justify-center ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="border border-gray-600 py-1 px-2 md:px-4 flex flex-grow w-48 lg:w-80 sm:w-60 md:w-60"
              placeholder="Enter Your Email Address" />
            <Button
              onClick={handleSubscribe}
              disabled={subscribed} // Disable the button if already subscribed
              className="text-white border  border-gray-500 px-4 py-2">   {subscribed ? 'Subscribed' : 'Subscribe'} </Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Newslatter;