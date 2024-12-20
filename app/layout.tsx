import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import  Navbar  from "@/components/navbar";

const font = Inter({
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={font.className} >
          {/* <Navbar /> */}
          <Toaster />
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
