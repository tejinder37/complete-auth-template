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
      <main className="flex min-h-screen  bg-zinc-100 bg-no-repeat bg-center bg-cover  md:pt-12 md:pb-12 md:px-12">
        <div className="card rounded-[70px] w-full bg-zinc-300 max-lg:bg-zinc-100 flex flex-wrap justify-center items-center overflow-hidden">
          <div className="lg:w-[45%] w-full max-lg:max-w-[400px] max-lg:min-w-[300px] lg:h-full h-fit">
            <div className="h-full py-5 lg:rounded-[70px] rounded-xl min-w-full bg-white flex flex-col justify-center items-center">
              {children}
            </div>
          </div>
          <div className="lg:w-[55%] w-full max-lg:hidden">
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
