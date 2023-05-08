import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import styled from 'styled-components';



const Wrapper = styled.div`
  
`;



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
       <Wrapper className={` ${noHeader ? 'no-header' : ''} ${overflow?'overflow':'no-overflow'}`} {...additionalProps}>
           {noHeader || <Header/>}
           {children}
           {noFooter || <Footer />}
       </Wrapper>
   );
}


export default Layout;



