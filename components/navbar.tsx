import Link from 'next/link'
import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { FcPackage, FcSettings } from 'react-icons/fc'
import { PiFolderSimpleLock, } from 'react-icons/pi'

const navbar = () => {
    return (
        <>
            <nav className='flex justify-between items-center bg-transparent fixed top-0 left-0 w-full z-[999] px-5 py-4'>
                <div className="logo">
                    <Link href="/" className='text-[1.3rem] text-black font-semibold flex justify-start items-center gap-2'><PiFolderSimpleLock className='text-[1.8rem] text-blue-600' /> <span>Auth</span></Link>
                </div>
                <form action="#" className="search max-w-[400px] w-full">
                    <div className="relative flex items-center w-full">
                        <input type='text' placeholder='Enter name'
                            className="pr-4 pl-12 py-3 text-sm text-black focus:outline-none bg-zinc-200 border-none rounded-3xl w-full outline-[#333]" />

                        <div className="absolute left-4">
                            <BiSearchAlt className='text-[1.4rem]' />
                        </div>
                    </div>
                </form>
                <div className="setting flex justify-center items-center gap-3">
                    <div className="flex flex-wrap items-center justify-center bg-white py-1 px-1 rounded-3xl">
                        <img src='https://readymadeui.com/profile_2.webp' className="w-10 h-10 rounded-full" />
                        <div className="px-3 text-left ">
                            <p className="text-sm font-bold">John Doe</p>
                            <p className="text-xs text-gray-500">johndoe23@gmail.com</p>
                        </div>
                    </div>

                    <FcSettings className='text-[2rem]' />
                </div>
            </nav>
        </>
    )
}

export default navbar
