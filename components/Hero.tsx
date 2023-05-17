import Link from 'next/link';
import React, { useEffect, useState } from 'react';


type LayoutProps = {
   
 } 
 
 const Hero: React.FC<LayoutProps> = ({ }) => {
 
    return (
      <div className="hero md:px-12 md:py-12 px-6 py-6 max-w-[80%] lg:max-w-[67%] text-center mx-auto md:my-9">
        <h1 className="text-themeblue md:text-7xl text-2xl font-extrabold my-6">
          Let&apos;s Empower your Next Generation Digital{" "}
          <span className="text-gold">Product </span>
          and <span className="text-gold">Workforce </span> Together{" "}
        </h1>
        <div className="max-w-xs mx-auto">
          <Link
            href={"/contact"}
            className="text-center items-center gap-4 flex flex-row
             bg-themeblue text-white md:px-8 md:my-12 my-4 px-3 py-4 hover:bg-themeblue/95  md:text-lg text-sm"
          >
            Schedule a consultation
            <span className="">
              <img src="/static/assets/rightarrow.svg" />
            </span>
          </Link>
          
        </div>
      </div>
    );
 }
 
 
 export default Hero;