import Link from "next/link";
import React, { useEffect } from "react";

type LayoutProps = {
  children?: any;
  noHeader?: boolean;
  noFooter?: boolean;
  style?: any;
  bgColor?: string;
  overflow?: boolean;
};

const Footer: React.FC<LayoutProps> = ({
  bgColor,
  children,
  noHeader,
  noFooter,
  overflow = false,
  style,
}) => {
  return (
    <div className="footer bg-themeblue">
      <div className=" py-24">
        <div className="max-w-7xl px-6 mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <img src="/static/assets/boodh.svg" />
              <p className="text-neutral-300 my-4 font-extralight">
                Leading platform for your product and workforce together.
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 text-white">
              <h4 className="font-bold text-xl mb-2 md:mb-8">Quick links</h4>
              <ul>
                <li className="text-neutral-300 hover:text-gold my-3">
                  <Link href={"/services"}>Services</Link>
                </li>
                <li className="text-neutral-300 hover:text-gold my-3">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="text-neutral-300 hover:text-gold my-3">
                  <Link href={"/contact"}>Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-4"></div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-xs text-blue-200 pb-4">
      Copyright © Boodh 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
