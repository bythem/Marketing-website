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
                {/* <li className="text-neutral-300 hover:text-gold my-3">
                  <Link href={"/about"}>About</Link>
                </li> */}
                
              </ul>
            </div>
            <div className="col-span-12 md:col-span-4">
            <h4 className="font-bold text-xl text-white mb-2 md:mb-8">Contact us</h4>
              <ul>
                <li className="text-neutral-300 hover:text-gold my-3">
                  1 Mid America Plaza, 3rd Floor, Oakbrook Terrace, IL - 60181
                </li>
                {/* <li className="text-neutral-300 hover:text-gold my-3">
                  <Link href={"/about"}>About</Link>
                </li> */}
                <li className="text-neutral-300 hover:text-gold my-3">
                  Email: <Link href={"mailto:pan.rah@boodh.org"}>pan.rah@boodh.org</Link>
                </li>
                <li className="text-neutral-300 hover:text-gold my-3">
                  Phone: <Link href={"tel:+13129727733"}>+13129727733</Link>
                </li>
              </ul>
            </div>
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
