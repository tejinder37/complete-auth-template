import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Image from "next/image";
import card1 from "@/public/images/card4.png"
import { FcLockPortrait } from "react-icons/fc";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Home = async () => {
  return (
    // style={{ backgroundImage: ` url(${bg.src})` }}
    <main className="flex bg-zinc-100 bg-no-repeat bg-center bg-cover  lg:pt-12 lg:pb-12 lg:px-12">
      <div  className="card lg:rounded-[70px] min-h-screen lg:min-h-[calc(100dvh_-_96px)] w-full bg-zinc-300 flex flex-wrap justify-center items-center overflow-hidden">
        <div className="lg:w-[45%] w-fit lg:h-full h-fit">
          <div className="h-full md:p-28 p-12 rounded-[70px] min-w-full bg-white flex flex-col justify-center items-center">
            <div className="space-y-6 text-center">
              <h1
                className={cn(
                  `text-6xl font-semibold drop-shadow-md flex justify-center items-center`,
                  font.className
                )}
              >
                <FcLockPortrait  /> <span>Auth</span>
              </h1>
              <p className="text-lg">A simple authentication service</p>
              <div>
                <LoginButton>
                  <Button variant="secondary" size="lg">
                    Sign in
                  </Button>
                </LoginButton>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[55%] w-full max-lg:hidden">
          <div className="image w-full max:mdmax-h-[300px] h-full lg:h-[600px]">
            <Image src={card1} alt="Card1" className="h-full w-full object-contain" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;