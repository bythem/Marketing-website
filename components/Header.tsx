import Link from 'next/link';
import React, { useEffect, useState } from 'react';





type LayoutProps = {
   children?:any,
   noHeader?: boolean;
   noFooter?: boolean;
   style?: any;
   bgColor?:string;
   overflow?:boolean;
}


const Header: React.FC<LayoutProps> = ({bgColor,children, noHeader, noFooter,  overflow = false, style }) => {
   const [isNavOpen,setIsNavOpen] = useState<boolean>(false);
   return (
   //   <div className='header  py-4 '>
   //    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
   //       <a href="/" className='logo flex align-items-center gap-x-2'>
   //    <img src='/static/assets/ThemLogo-dark.svg' className='max-h-12'/>
   //    <h2 className='flex self-center text-xl font-bold'>Them studios</h2>
   //    </a>
   //    </div>
   //   </div>
     
<nav className="bg-white">
  <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center flex-row p-4 ">
    <Link href="/" className="flex items-center">
        <img src="/static/assets/boodh.svg" className=" mr-3" alt="Boodh" />
    </Link>
    <button onClick={()=>setIsNavOpen(!isNavOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 " aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className={` ${isNavOpen?'block':'hidden'} md:block flex w-full md:!w-auto justify-content-center `} id="navbar-default">
      <ul className="shadow-lg md:shadow-none w-full md:ml-auto font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
        <li>
          <Link href="/" className="block py-2 pl-3 pr-4 text-gold hover:text-themeblue rounded md:p-0 font-bold " >Home</Link>
        </li>
        <li>
          <Link href="/" className="block py-2 pl-3 pr-4 text-gold hover:text-themeblue rounded md:p-0 font-bold" >About</Link>
        </li>
        <li>
          <Link href="/services" className="block py-2 pl-3 pr-4 text-gold hover:text-themeblue rounded md:p-0 font-bold" >Services</Link>
        </li>
       
      </ul>
    </div>
    <div className='hidden md:block'>
      <Link href="/contact" className='cursor-pointer font-bold tracking-wider bg-themeblue text-white px-4 hover:bg-themeblue/95 p-2'>
         Contact us
      </Link>
    </div>
  </div>
</nav>

   );
}


export default Header;



