import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { PiFolderSimpleLock } from "react-icons/pi";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold flex justify-center items-center", font.className)}><PiFolderSimpleLock className='text-[1.8rem] text-blue-600' /> <span>Auth</span></h1>
      <p className="text-muted-foreground text-lg">{label}</p>
    </div>
  );
};
