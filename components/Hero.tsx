import Link from 'next/link';
import React, { useEffect, useState } from 'react';


type LayoutProps = {
   
 } 
 
 const Hero: React.FC<LayoutProps> = ({ }) => {
 
    return (
   
    <div className='hero md:px-12 md:py-12 px-6 py-6 max-w-[80%] lg:max-w-[67%] text-center mx-auto md:my-9'>
        <h1 className='text-themeblue md:text-7xl text-2xl font-extrabold my-6'>Let's Empower your Next Generation 
        Digital <span className='text-gold'>Product</span>
         and <span className='text-gold'>Workforce</span> Together </h1>
        <button className='bg-themeblue text-white md:px-8 md:py-6 md:my-12 my-4 px-3 py-4 hover:bg-themeblue/95  md:text-lg text-sm'>
        Schedule a consultation 
      </button>
    </div>
 
    );
 }
 
 
 export default Hero;