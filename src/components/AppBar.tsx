import { Globe, Router } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const AppBar = (props: Props) => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  return (
    <div className='fixed flex flex-1 w-full flex-row justify-between items-center p-2 z-50 text-white bg-[rgba(56,77,104,0.8)] '>
      <div className='z-50  flex flex-1 w-full flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-4'>
          <Image src={"/logo.png"} width={48} height={48} alt="logo" />
          <p className='font-noto_serif font-bold cursor-pointer text-2xl'
            onClick={() => router.push('/')}>AI ME</p>
        </div>
        <div className='sm:flex flex-1 flex-row justify-center items-center gap-20 hidden'>
          {/* <p className='tracking-wide text-sm cursor-pointer'>Why AI ME</p> */}
          <p className='tracking-wide text-sm cursor-pointer'
            onClick={() => router.push('/pricing')}>Pricing</p>
          <div className='relative'>
            <p className='tracking-wide text-sm cursor-pointer'
              onClick={() => { setOpen(!open) }}>Download App</p>

            {open && <div className='absolute top-7 right-[-100px] shadow rounded-lg flex flex-1 bg-black w-[300px] p-4'
              style={{
                backgroundImage: "url('/bg-1.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
              }}>
              <div className='flex flex-1 justify-center'>
                <div className='flex flex-col justify-center items-center gap-4'>
                  <Image src="/qrcode.png" width={150} height={150} alt="logo" className='object-contain' />
                  <div className='flex flex-col  gap-4 '>
                    <Image src="/andriod.png" width={170} height={60} alt="logo" className='object-contain cursor-pointer'
                      onClick={() => alert("Coming soon to the Google Play Store. Stay tuned!")} />
                    <Image src="/apple.png" width={170} height={60} alt="logo" className='object-contain cursor-pointer'
                      onClick={() => router.push('/addIcon')} />
                  </div>
                </div>
              </div>
            </div>}

          </div>
        </div>
        <div className='flex flex-row items-center gap-8 pr-4'>
          {/* <div className='flex flex-row items-center gap-2'>
            <Globe />
            <p>EN</p>
          </div> */}
          <p onClick={() => router.push('https://aime.hellokit.uk/login')} className="cursor-pointer">
            LOG IN</p>
          <p className='px-4 py-1 rounded cursor-pointer'
            onClick={() => router.push('https://aime.hellokit.uk/login')}
            style={{
              backgroundImage: "linear-gradient(to right, #FF1CF7, #00F0FF)",
            }}>Sign up</p>
        </div>
      </div>
    </div>
  )
}

export default AppBar