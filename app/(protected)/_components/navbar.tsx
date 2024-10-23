"use client";

import { UserButton } from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcSettings } from "react-icons/fc";
import { PiFolderSimpleLock } from "react-icons/pi";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-white flex justify-between items-center p-4 w-full shadow-sm">
      <div className="logo">
        <Link href="/" className='text-[1.3rem] text-black font-semibold flex justify-start items-center gap-2'><PiFolderSimpleLock className='text-[1.8rem] text-blue-600' /> <span>Auth</span></Link>
      </div>
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "secondary" : "ghost"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "secondary" : "ghost"}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "secondary" : "ghost"}>
          <Link href="/admin">Admin</Link>
        </Button>

      </div>
      <div className="flex gap-2">
        <Link href="/settings" className="w-full inline-flex justify-start gap-2 items-center">
          <FcSettings className="text-[2.2rem]" />
        </Link>
        <UserButton />
      </div>
    </div>
  );
};
