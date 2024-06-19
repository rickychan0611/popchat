import { Globe } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const AppBar = (props: Props) => {
  return (
    <div className='fixed flex flex-1 w-full flex-row justify-between items-center p-2 z-50 text-white bg-[rgba(56,77,104,0.8)] overflow-hidden '>
      <div className='z-50  flex flex-1 w-full flex-row justify-between items-center'>
        <div className='flex flex-row items-center px-4 gap-4'>
          <Image src={"/logo.png"} width={48} height={48} alt="logo" />
          <p className='font-noto_serif font-bold'>1ON1 CHAT</p>
        </div>
        <div className='flex flex-1 flex-row justify-center items-center gap-20'>
          <p className='tracking-wide text-sm cursor-pointer'>Why AI ME</p>
          <p className='tracking-wide text-sm cursor-pointer'>Pricing</p>
          <p className='tracking-wide text-sm cursor-pointer'>Download App</p>
        </div>
        <div className='flex flex-row items-center gap-8 pr-4'>
          <div className='flex flex-row items-center gap-2'>
            <Globe />
            <p>EN</p>
          </div>
          <p>LOG IN</p>
          <p className='px-4 py-1 rounded cursor-pointer'
            style={{
              backgroundImage: "linear-gradient(to right, #FF1CF7, #00F0FF)",
            }}>Sign up</p>
        </div>
      </div>
    </div>
  )
}

export default AppBar