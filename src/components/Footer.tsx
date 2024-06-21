import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {

  const router = useRouter()

  function sendEmail() {
    const recipient = 'digipalca@gmail.com';
    window.location.href = `mailto:${recipient}`;
  }

  return (
    <div className='bg-black flex flex-col p-4 sm:flex-row sm:pb-2 sm:justify-center'>
      <div className='w-full flex flex-1 flex-col lg:flex-row mb-10 px-10 pt-8'>

        <div className='flex flex-col gap-4 items-center'>
          <Image src="/aime-logo.png" width={330} height={140} alt="logo" className='object-contain' />
          <div className='flex flex-row gap-8 items-center'>
            <Image src="/x.png" width={32} height={32} alt="x" className='object-contain cursor-pointer'
              onClick={() => window.open('https://twitter.com/AIMEvideochat', '_blank')} />
            <Image src="/ig.png" width={32} height={32} alt="ig" className='object-contain cursor-pointer'
              onClick={() => window.open('https://www.instagram.com/aimevideo.chat?utm_source=qr&igsh=MWtoOXV4OHNsZ3plMw==', '_blank')} />
            <Image src="/reddit.png" width={32} height={32} alt="reddit" className='object-contain cursor-pointer'
              onClick={() => window.open('https://www.reddit.com/user/aimechat/ ', '_blank')} />
            <Image src="/youtube.png" width={32} height={32} alt="youtube" className='object-contain cursor-pointer'
              onClick={() => window.open('https://www.youtube.com/channel/UC7zrYrZEpQAquFnEiSp93IA', '_blank')} />
          </div>
          {/* <div className='flex flex-row gap-8 items-center'>
            <Image src="/discord.png" width={32} height={32} alt="discord" className='object-contain cursor-pointer'
              onClick={() => window.open('https://discord.gg/5Y7A347N', '_blank')} />
            <Image src="/truthsocial.png" width={32} height={32} alt="truthsocial" className='object-contain cursor-pointer'
              onClick={() => window.open('https://discord.gg/5Y7A347N', '_blank')} />
            <Image src="/linkedin.png" width={32} height={32} alt="linkedin" className='object-contain cursor-pointer'
              onClick={() => window.open('https://www.linkedin.com/in/max-williams-764620313/ ', '_blank')} />
            <Image src="/tiktok.png" width={32} height={32} alt="tiktok" className='object-contain cursor-pointer'
              onClick={() => window.open('https://www.tiktok.com/@aime.chat', '_blank')} />

          </div> */}

        </div>

        <div className='flex flex-1 justify-center text-center lg:text-left'>
          <div className='flex flex-col gap-4 mt-6'>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/pricing')}>Pricing</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => sendEmail()}>Contact</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/about')}>About</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/faq')}>FAQ</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/terms')}>Terms</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/privacy-policy')}>Privacy Policy</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => sendEmail()}>Affiliate</div>
          </div>
        </div>
        <div className='flex flex-1 justify-center mb-6 text-center lg:text-left'>
          <div className='flex flex-col gap-4 mt-6'>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/proposalsHosts')}>6 Proposals for Hosts</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/host-guide')}>Host Guide</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/host-rules')}>Host Basic Rules</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/prohibited-rules')}>12 Prohibited Rules</div>
            <div className='text-[#3ECFEF] cursor-pointer'
              onClick={() => router.push('/parental-control-guide')}>Parental Control Guide</div>
          </div>
        </div>

        <div className='flex flex-1 justify-center lg:justify-end'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <Image src="/qrcode.png" width={150} height={150} alt="logo" className='object-contain' />
            <div className='flex flex-col xl:flex-row gap-4 mt-4'>
              <Image src="/andriod.png" width={150} height={60} alt="logo" className='object-contain cursor-pointer'
                onClick={() => {
                  router.push("https://onlyforyou.live/api/android/download")
                }
                } />
              <Image src="/apple.png" width={150} height={60} alt="logo" className='object-contain cursor-pointer'
                onClick={() => router.push('/addIcon')} />
            </div>
            <div className='font-serif text-2xl text-white'>Download now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer