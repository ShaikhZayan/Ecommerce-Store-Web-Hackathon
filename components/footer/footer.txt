"use client"
import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { Slide, ToastContainer, Zoom, toast, Theme, ToastTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ZoomIn } from 'lucide-react';

const Footer = () => {

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
        <div>
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
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                CATEGORIES
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                SUBSCRIBE
                            </h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label
                                        htmlFor="footer-field"
                                        className="leading-7 text-sm text-gray-600"
                                    >
                                        Your Email Here
                                    </label>
                                    <input
                                        type="text"
                                        id="footer-field"
                                        name="footer-field"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                {/* <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                    
                                </button> */}
                                <Button
                                    className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded"
                                    onClick={handleSubscribe}
                                    disabled={subscribed} // Disable the button if already subscribed

                                >
                                    {subscribed ? 'Subscribed' : 'Subscribe'}
                                </Button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                                Bitters chicharrones fanny pack
                                <br className="lg:block hidden" />
                                waistcoat green juice
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                            © 2020 Tailblocks —
                            <a
                                href="https://twitter.com/knyttneve"
                                rel="noopener noreferrer"
                                className="text-gray-600 ml-1"
                                target="_blank"
                            >
                                @knyttneve
                            </a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="none"
                                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer

