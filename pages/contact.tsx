import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Contact() {
  const[formData,setFormData] = useState({});
  const submitForm =()=>{

  }
  return (
    <Layout>
      <Head>
        <title>Contact us | Boodh | Digital product and workforce </title>
        <meta
          name="description"
          content="Contact Boodh,a leading platform for your product and workforce together."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="max-w-7xl mx-auto px-2 py-12 md:py-32">
          <div className="title">
            <h1 className="text-3xl md:text-5xl font-medium text-themeblue mb-2">
              Interested ?
            </h1>
            <h1 className="text-3xl md:text-5xl font-medium text-themeblue">
              Let's talk
            </h1>
            <p className="text-base mt-4 max-w-xl text-themeblue">
              Just fill this form and we will contact you promptly to discuss
              your project. Hate forms? Drop us a message at{" "}
              <a
                rel="noreferrer"
                href="mailto:admin@boodh.org?subject=Getting in touch"
                className=" text-gold"
                target="_blank"
                aria-label="Email"
              >
                admin@boodh.org
              </a>
            </p>
          </div>

          <div className="my-12 max-w-sm px-4 rounded-xl">
            <div className="relative my-8">
              <input
                type="text"
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                className="peer block min-h-[auto] w-full rounded border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Email"
              />
              <label className="text-themeblue pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
                Email
              </label>
            </div>
            <div className="relative my-8">
              <input
                type="text"
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
                className="peer block min-h-[auto] w-full rounded border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Name"
              />
              <label className="text-themeblue pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
                Name
              </label>
            </div>
            <div className="relative my-8">
              <textarea
                onChange={(e) => {
                  setFormData({ ...formData, info: e.target.value });
                }}
                className="peer block min-h-[auto] w-full rounded border-b bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                placeholder="Name"
              />
              <label className="text-themeblue pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">
                Additional information
              </label>
            </div>
            <div className="mb-6">
              <button onClick={submitForm} className="items-center gap-4 flex flex-row cursor-pointer font-bold tracking-wider bg-themeblue text-white px-4 hover:bg-themeblue/95 p-2">
                Submit
                <span className="">
                  <img src="/static/assets/rightarrow.svg" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
