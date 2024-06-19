import { Globe } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const AppBar = (props: Props) => {
  return (
    <div className='fixed flex flex-1 w-full flex-row justify-between items-center p-2 z-50 text-white'>
      <div className='flex flex-row items-center px-4 gap-4'>
        <Image src={"/logo.png"} width={48} height={48} alt="logo" />
        <p className='font-noto_serif font-bold'>1ON1 CHAT</p>
      </div>
      <div className='flex flex-1 flex-row justify-center items-center gap-20'>
        <p>WHY AI ME</p>
        <p>PRICING</p>
        <p>DOWNLOAD APP</p>
      </div>
      <div className='flex flex-row items-center gap-8 pr-4'>
        <div className='flex flex-row items-center gap-2'>
          <Globe />
          <p>EN</p>
        </div>
        <p>LOG IN</p>
        <p>Sign up</p>
      </div>
    </div>
  )
}

export default AppBar