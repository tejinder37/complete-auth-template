"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { LoginForm } from "./login-form";

import Image from "next/image";
import card1 from "@/public/images/card4.png"
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode == "modal") {
    return (
      <>
        <Dialog>
          <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[1100px] min-w-[300px] w-full ">

            <div className="card lg:rounded-3xl w-full bg-zinc-300 flex flex-wrap justify-center items-center overflow-hidden">
              <div className="lg:w-[45%] w-full lg:h-full h-fit bg-white rounded-e-3xl">
                <LoginForm  />
              </div>
              <div className="lg:w-[55%] w-full max-lg:hidden">
                <div className="image w-full max:mdmax-h-[300px] h-full lg:h-[600px]">
                  <Image src={card1} alt="Card1" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>

          </DialogContent>
        </Dialog>


      </>
    );
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
