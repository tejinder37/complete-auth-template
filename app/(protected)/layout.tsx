import React from "react";
import { Navbar } from "./_components/navbar";
import Image from "next/image";
import cardImage from "@/public/images/bg1.jpg"
interface ProtectedLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (

    <>
      <div className="wrapper">
        <Navbar />
        <section className="min-h-[calc(100dvh_-_72px)] lg:gap-5 flex flex-wrap max-lg:justify-center justify-between items-stretch bg-slate-100 lg:px-5">
          <div className=" lg:max-w-[500px] w-full lg:py-5 max-lg:order-2">
            <div className="h-full bg-white lg:rounded-3xl shadow justify-center items-center flex overflow-hidden">
              {children}
            </div>
          </div>
          <div className="lg:max-w-[calc(100%_-_520px)]  w-full lg:py-5 max-lg:order-1">
            <div className="h-full bg-white lg:rounded-3xl shadow justify-center items-center overflow-hidden flex relative min-h-[200px] w-full ">
              <Image src={cardImage} alt="Auth" className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </>

  );
};

export default ProtectedLayout;
