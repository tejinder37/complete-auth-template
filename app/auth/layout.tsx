import React from "react";
import Image from "next/image";
import card1 from "@/public/images/card1.png"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="flex min-h-screen  bg-zinc-100 bg-no-repeat bg-center bg-cover  pt-12 pb-12 px-12">
        <div className="card rounded-[70px] w-full bg-zinc-300 flex flex-wrap justify-center items-center overflow-hidden">
          <div className="lg:w-[45%] w-full lg:h-full h-fit">
            <div className="h-full py-5 rounded-[70px] min-w-full bg-white flex flex-col justify-center items-center">
              {children}
            </div>
          </div>
          <div className="lg:w-[55%] w-full">
            <div className="image w-full h-[600px]">
              <Image src={card1} alt="Card1" priority className="h-full w-full object-contain" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
