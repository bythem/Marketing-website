import Head from 'next/head'
import Image from 'next/image'

import Layout from '@/components/Layout'

import  { servicesData } from '@/components/ServicesIntro'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Services | Boodh </title>
        <meta
          name="description"
          content="Let’s Empower Your Next Generation Digital Product and Workforce Together"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <div className="hero-section bg-background py-12 md:py-24">
            <div className='max-w-7xl mx-auto px-6'>
          <div className="text-themeblue uppercase py-4  text-sm font-bold tracking-wide">
            Our Services
          </div>
          <h2 className="mb-12 text-themeblue lg:text-5xl tracking-wide text-3xl font-bold lg:max-w-5xl text-left  tracking-tighter">
          From proof of concepts and to complex systems of an enterprise level &mdash; we&apos;ve got everything covered.
          </h2>
          </div>
        </div>

        <div className='service-details mt-32'>
        <div className="flex flex-wrap gap-y-6 md:gap-4 max-w-7xl px-6 mx-auto">
         {
         servicesData.map((item,i) =>{
            return (
              <div key={i} className="h-100 grid grid-cols-12 w-full gap-4 mb-24">
                <div className={`${i%2===0 ?'lg:order-first':'lg:order-last'} col-span-12 lg:col-span-6 flex align-items-center`}>
                  <img
                    alt=""
                    className="max-h-64 mb-6 m-auto"
                    src={item.image}
                  ></img>
                </div>
                <div className="col-span-12 lg:col-span-6 flex items-center ">
                 <div>
                 <h3 className="text-2xl text-themeblue font-extrabold my-4">
                    {item.title}
                  </h3>
                  <div className="text-base font-light text-themeblue content-wrapper" dangerouslySetInnerHTML={{__html:item.description}}>
                    
                  </div>
                 
                 </div>
                </div>
              </div>
            );
         })
      }
      </div>
        </div>
      </main>
    </Layout>
  );
}


