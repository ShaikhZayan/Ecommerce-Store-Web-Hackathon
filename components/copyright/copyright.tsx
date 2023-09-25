import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div className="">
    <section className="border-t-2 mt-6 md:mt-16 mx-auto pl-4 pr-4 md:pl-32 md:pr-32">
      <div className="flex flex-col md:flex-row mt-4 md:gap-x-5 justify-around  ">
        <div style={{fontFamily:"Sora"}} className="text-gray-500 font-bold md:mt-0 mt-2 mb-2  tracking-wide md:max-w-[13rem]">
          <span>Copyright © 2022 Dine Market</span>
        </div>
        <div>
          <p style={{fontFamily:"Sora"}} className="text-gray-500 font-bold  md:mt-0   mb-2 mt-2 tracking-wide md:max-w-[11rem]">
            Design by.{" "}
            <Link target="_blank" href={"https://www.github.com/shaikhzayan"}>
            <span className="font-extrabold tracking-wider text-black">
            shaikhzayan 
            </span>
            </Link>
          </p>
        </div>
        <div>
          <p style={{fontFamily:"Sora"}} className="text-gray-500 font-bold mt-2 mb-2  md:mt-0 tracking-wide md:max-w-[13rem]">
            Code by.{" "}
            <Link target="_blank" href={"https://www.github.com/shaikhzayan"}>
              <span className="font-extrabold tracking-wider text-black">
               shaikhzayan on github
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Copyright;