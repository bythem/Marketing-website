import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';




type LayoutProps = {
   children?:any,
   noHeader?: boolean;
   noFooter?: boolean;
   style?: any;
   bgColor?:string;
   overflow?:boolean;
}


const Layout: React.FC<LayoutProps> = ({bgColor,children, noHeader, noFooter,  overflow = false, style }) => {
   const additionalProps: any = {};


   return (
       <div className={` ${noHeader ? 'no-header' : ''} ${overflow?'overflow':'no-overflow'}`} {...additionalProps}>
           {noHeader || <Header/>}
           {children}
           {noFooter || <Footer />}
       </div>
   );
}


export default Layout;



