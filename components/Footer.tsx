import React, { useEffect } from 'react';





type LayoutProps = {
   children?:any,
   noHeader?: boolean;
   noFooter?: boolean;
   style?: any;
   bgColor?:string;
   overflow?:boolean;
}


const Footer: React.FC<LayoutProps> = ({bgColor,children, noHeader, noFooter,  overflow = false, style }) => {

   return (
     <div className='footer bg-bluetheme'>
      <div className='max-w-7xl px-6 mx-auto'>
         <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-4'></div>
            <div className='col-span-3'></div>
            <div className='col-span-4'></div>
         </div>
      </div>
     </div>
   );
}


export default Footer;



