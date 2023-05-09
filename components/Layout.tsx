import Head from "next/head";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children?: any;
  noHeader?: boolean;
  noFooter?: boolean;
  style?: any;
  bgColor?: string;
  overflow?: boolean;
};

const Layout: React.FC<LayoutProps> = ({
  bgColor,
  children,
  noHeader,
  noFooter,
  overflow = false,
  style,
}) => {
  const additionalProps: any = {};

  return (
    <div
      className={` ${noHeader ? "no-header" : ""} ${
        overflow ? "overflow" : "no-overflow"
      }`}
      {...additionalProps}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Raleway:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-montserrat">
        {noHeader || <Header />}
        {children}
        {noFooter || <Footer />}
      </div>
    </div>
  );
};

export default Layout;
