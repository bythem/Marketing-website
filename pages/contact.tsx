import Head from "next/head";
import Image from "next/image";
import Layout from "@/components/Layout";
import { useState } from "react";

type form= {
  email:string;
  name:string;
  info:string;
}

export default function Contact() {
  const[formData,setFormData] = useState<form>({
    email:"",
    name:"",
    info:""
  });
  const[error,setError]= useState("");
  const submitForm =async ()=>{
    
    if(formData.email !=="" && formData.name !=="" && formData.info  !=="")
    {
      if(!validateEmail(formData.email)){
        setError("Enter valid email");
      }else{
        try {
          await fetch("/api/contact", {
            "method": "POST",
            "headers": { "content-type": "application/json" },
            "body": JSON.stringify(formData)
          })
    
                //if sucess do whatever you like, i.e toast notification
          
        } catch (error) {
            // toast error message. whatever you wish 
        }
      }
      
    }
    else{
      setError("All fields are required");
    }
   
  }

  const validateEmail = (email:string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
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
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="relative my-8">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="relative my-8">
              <label
                htmlFor="info"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Additional information
              </label>
              <textarea
                onChange={(e) => {
                  setFormData({ ...formData, info: e.target.value });
                }}
                id="info"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
            </div>
            <div className="mb-6">
              <button
                onClick={submitForm}
                className="items-center gap-4 flex flex-row cursor-pointer font-bold tracking-wider bg-themeblue text-white px-4 hover:bg-themeblue/95 p-2"
              >
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
