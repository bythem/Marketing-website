import Link from "next/link";
import React, { useEffect, useState } from "react";


type LayoutProps = {};

export const services = [
  {
    title: "Cloud Computing",
    shortDescription:
      "Our cloud computing services offer a range of benefits, including: Scale on Demand: Easily scale your business needs up or down to meet",
    description: `
                  Our cloud computing services offer a range of benefits, including:
            Scale on Demand: Easily scale your business needs up or down to meet your dynamic operational needs
            Cost Effective Solution: Manage your end to end business operations with our cost effective cloud-based solutions.
            Be Flexible: Access your data and applications from any device, anywhere in the world.
            Data Security: Keep your data safe and secure with advanced security features and backup options.



            Ready to take your business to the next level with cloud computing? Contact us today to learn more and schedule a consultation.

                  `,
    image: "/static/assets/services/cloud-computing.png",
  },
  {
    title: " AI & Machine Learning ",
    shortDescription:
      "Transform Your Data into Insights and Actionable Intelligence...",
    description: "",
    image: "/static/assets/services/ai-machine.png",
  },
  {
    title: " Application Development ",
    shortDescription:
      "We specialize in developing custom mobile apps for iOS and Android devices that are custom made to your business  needs and goals...",
    description: "",
    image: "/static/assets/services/app-dev.png",
  },
  {
    title: "Skills Based Training ",
    shortDescription:
      "Our Skills-based training programs include: Product management: Learn how to define, develop, and launch successful products...",
    description: "",
    image: "/static/assets/services/skill-train.png",
  }
];

const CaseStudies: React.FC<LayoutProps> = ({}) => {
  
  return (
    <div className="max-w-7xl mx-auto md:px-12 md:py-12 px-6 py-6">
      <div className="text-gold uppercase py-4  text-sm font-bold">Our Services</div>
      <h2 className="mb-12 text-themeblue lg:text-4xl tracking-wide text-2xl font-bold lg:max-w-xl text-left  tracking-tighter">
        Our agency experts will provide you with a full stack of services
      </h2>
      <div className="flex flex-wrap gap-y-6 md:gap-4 ">
         {
         services.map((item,i) =>{
            return (
              <div key={i} className="h-100 flex flex-col justify-between max-w-sm my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <div>
                  <img alt="" className="h-40 mb-6 my-auto" src={item.image}></img>
                  <h3 className="text-2xl text-themeblue font-extrabold my-4">{item.title}</h3>
                  <p className="text-base font-light text-themeblue">{item.shortDescription}</p>
                 
                </div>
                <a href="" className="mt-4 block text-gold hover:text-themeblue font-bold">Learn More</a>
              </div>
            );
         })
      }
      </div>
    </div>
  );
};

export default CaseStudies;
