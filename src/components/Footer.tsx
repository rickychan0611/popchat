import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black flex flex-col p-4 sm:flex-row sm:pb-2 sm:justify-center'>
      <div className='w-full max-w-[1200px] flex flex-1 flex-col sm:flex-row mb-10'>
        <div className='flex flex-1 flex-col justify-between py-6 gap-8 items-center'>
          <Image src="/aime-logo.png" width={330} height={140} alt="logo" className='object-contain' />
          <div className='flex flex-row gap-8 items-center'>
            <Image src="/x.png" width={32} height={32} alt="x" className='object-contain cursor-pointer' />
            <Image src="/ig.png" width={32} height={32} alt="ig" className='object-contain cursor-pointer' />
            <Image src="/reddit.png" width={32} height={32} alt="reddit" className='object-contain cursor-pointer' />
            <Image src="/youtube.png" width={32} height={32} alt="youtube" className='object-contain cursor-pointer' />
          </div>
          <div className='flex flex-row gap-4'>
            <p className='text-[#3ECFEF] cursor-pointer'>Contact</p>
            <p className='text-[#3ECFEF] cursor-pointer'>About</p>
            <p className='text-[#3ECFEF] cursor-pointer'>Privacy Policy</p>
            <p className='text-[#3ECFEF] cursor-pointer'>Terms</p>
          </div>
        </div>
        <div className='flex flex-1 justify-center sm:justify-end'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <Image src="/qrcode.png" width={150} height={150} alt="logo" className='object-contain' />
            <div className='flex flex-row gap-4 mt-4'>
              <Image src="/andriod.png" width={150} height={60} alt="logo" className='object-contain' />
              <Image src="/apple.png" width={150} height={60} alt="logo" className='object-contain' />
            </div>
            <p className='font-serif text-2xl'>Download now</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer