import Image from "next/image";
import { getLayout } from "@/layouts/DefaultLayout";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Router } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { H5_URL } from "@/constants/constant";
const Home = () => {

  const router = useRouter();
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  const QRcodeButtons = () => {
    return (
      <div className="flex justify-center items-center w-full h-full absolute bg-[rgba(0,0,0,0.7)] rounded-[30px]">
        <div className="flex flex-row gap-6">
          <Image src="/qrcode.png" width={120} height={120} alt="qrcode" className='object-contain' />
        </div>
        <div className="flex flex-col gap-2 ml-4">
          <Image src="/andriod.png" width={200} height={55} alt="android" className='object-contain cursor-pointer'
            onClick={() => {
              router.push("https://onlyforyou.live/api/android/download")
            }
            } />
          <Image src="/apple.png" width={200} height={55} alt="ios" className='object-contain cursor-pointer'
            onClick={() => router.push('/addIcon')} />
        </div>
      </div>
    )
  }

  return (
    <div className={`flex min-h-screen flex-col items-center justify-between bg-black`} >
      <div className="flex relative w-full h-full pt-24 flex-col pb-4 sm:pb-28"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >
        <div className="w-full max-w-6xl mx-auto pt-0 sm:pt-10">
          <div className="w-full max-w-[750px] mx-auto">
            <ResponsiveImage src="/why-aime.png" />
          </div>
          <div className="w-full flex justify-center mt-6">
            <div className="flex flex-1 justify-center items-center rounded-[30px] mt-0 sm:mt-20 
               p-1 sm:p-2 m-4 bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]"
            >
              <ResponsiveImage src="/main-1.jpg" className="rounded-[25px]" />
            </div>
          </div>
          <div className="text-white text-center text-[20px] mt-[30px] mx-4">
            Focus your talents on subscribers who truly value your work, without the pressure of large audiences.
          </div>
        </div>
      </div>

      <div className="sm:hidden block">
        <div className='flex flex-row gap-4 mt-4 mb-2'>
          <Image src="/andriod.png" width={150} height={60} alt="logo" className='object-contain' />
          <Image src="/apple.png" width={150} height={60} alt="logo" className='object-contain'
            onClick={() => router.push('/addIcon')} />
        </div>
        <p className='font-serif text-2xl text-white mb-4 text-center'>Download now</p>
      </div>

      {/* section 2 */}
      <div className="flex relative w-full h-full flex-row justify-center sm:p-10 z-10 bg-white"
        style={{
          backgroundImage: "url('/bg-2.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col sm:flex-row relative w-full max-w-[1400px] p-4 ">

          {/* left heart logo column */}
          <div className="flex flex-col justify-center items-center w-full sm:w-1/2 sm:pr-10">
            <div className="mt-10 sm:mt-20 mb-40">
              <Image src="/1on1.png" width={200} height={200} alt="1on1 logo" />
              <p className="text-black text-[54px] font-serif italic">
                Private Room--<br />
                for 1-on-1 Live Streaming</p>
              <p className="text-black text-[24px] mt-10 mb-20 font-serif">
                Focus your talents on subscribers who truly value your work, without the pressure of large audiences.
              </p>
            </div>
          </div>

          {/* right video */}
          <div className="flex flex-1 justify-center items-center relative mt-[-150px] mb-10 sm:mt-0 sm:mb-10">

            {/* video */}
            <div className="rounded-[40px] w-[88%] sm:w-[395px] h-[820px] absolute top-0 sm:top-[100px]">
              <video controls={false} autoPlay muted loop playsInline
                className="w-full h-full object-cover rounded-[50px]"
              >
                <source src="/1on1.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* frame */}
            <div className="rounded-[30px] w-[100%] sm:w-[408px] h-[820px] sm:absolute top-[95px] ml-2 sm:ml-0 mt-[-5px]">
              <div className=" w-[97%] sm:w-[408px] h-[832px] relative">
                <Image src="/frame.png" fill sizes="100%" alt="frame" className="z-40" />
              </div>

              <div className="absolute w-full bottom-2  sm:ml-[-120px]">
                <div className="w-full sm:w-[520px] h-[320px] relative scale-90 z-40 ml-[-16px] sm:ml-0">
                  <Image src="/video-graphics.png" fill sizes="100%" alt="frame" className="z-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* section 3 */}
      <div className="flex relative w-full h-full flex-col justify-center items-center mt-20 "
        style={{
          backgroundImage: "url('/bg-3.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >

        {/* Private show */}
        <div className="flex w-full max-w-7xl flex-col xl:flex-row mt-10 sm:mt-40 mb-20 sm:mb-0 px-4 gap-4">

          <div className="flex flex-1 justify-center items-center">
            <div className="rounded-[30px] w-[600px] h-[800px]">
              <video controls={false} autoPlay muted loop playsInline
                className="w-full h-full object-cover rounded-[40px]"
              >
                <source src="/privateShow.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center mt-10 sm:mt-0 text-white pl-16">
            <div className="flex flex-row">
              <div className="w-[10px] h-[380px] relative">
                <Image src="/line-v.png" fill sizes="100%" alt="private show" className="object-fit" />
              </div>
              <div className="flex flex-col ml-16">
                <p className="text-white text-[54px] font-serif italic">
                  Private Room--<br />
                  for 1-on-1 Live Streaming</p>
                <p className="text-white text-[20px] mt-10 mb-20 ">
                  Imagine, create and perform your way. Host intimate shows, set your own pricing and audience limits.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Media Unlock */}
        <div className="flex w-full max-w-[1300px] flex-col sm:flex-row mt-4 sm:mt-40 p-4 gap-16">
          <div className="flex flex-row flex-1 justify-center items-center">
            <div className="w-[6px] h-[260px] relative">
              <Image src="/line-v.png" fill sizes="100%" alt="private show" className="object-fit" />
            </div>
            <div className="flex flex-col ml-8">
              <p className="text-white text-[54px] font-serif italic">
                Exclusive Media Unlock</p>
              <p className="text-white text-[20px] mt-10 ">
                Directly monetize content that matches your
                fans' preferences
              </p>
            </div>
          </div>

          <div className="flex flex-1 flex-col">

            <div className="w-full h-[560px] sm:h-[750px] relative cursor-pointer"
              onClick={() => {
                setOpen1(!open1)
                setOpen2(false)
                setOpen3(false)
              }}>
              <Image src="/unlock1.png" fill sizes="100%" alt="unlock-image" className="object-cover rounded-[30px]" />

              {!open1 ?
                <div className="flex justify-center items-center w-full h-full absolute rounded-[30px]">
                  <Image src="/unlock-now.png" width={266} height={112} alt="unlock-image" className="object-contain" />
                </div>
                :
                <QRcodeButtons />
              }

            </div>
          </div>
        </div>

        {/* Exclusive Media Unlock */}
        <div className="flex w-full max-w-[1200px] flex-col sm:flex-row mt-4 sm:mt-40 p-4 gap-16">

          <div className="flex flex-1 flex-col">
            <div className="w-full h-[570px] sm:h-[741px] relative cursor-pointer"
              onClick={() => {
                setOpen2(!open2)
                setOpen1(false)
                setOpen3(false)
              }}>
              <Image src="/custom.png" fill sizes="100%" alt="unlock-image" className="object-cover rounded-[30px]" />
              {open2 && <QRcodeButtons />}
            </div>

          </div>

          <div className="flex flex-row flex-1 justify-center items-center">
            <div className="w-[6px] h-[260px] relative">
              <Image src="/line-v.png" fill sizes="100%" alt="private show" className="object-fit" />
            </div>
            <div className="flex flex-col ml-8">
              <p className="text-white text-[54px] font-serif italic">
                Customized Media</p>
              <p className="text-white text-[20px] mt-10 ">
                Signed visuals tailored by Hosts deserve good value
              </p>
            </div>
          </div>

        </div>

        {/* Chat with Fans Using an AI Persona */}
        <div className="mx-4 cursor-pointer"
          onClick={() => {
            setOpen3(!open3)
            setOpen1(false)
            setOpen2(false)
          }}>
          <div className="text-white flex relative w-full max-w-6xl h-full my-40 p-[2px] bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] rounded-[25px]"
          >
            <div
              className="w-full rounded-[22px]"
              style={{
                backgroundImage: "url('/bg-4.png')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
              }}>

              <div className="flex py-10 px-4 sm:px-20 flex-col-reverse sm:flex-row justify-between items-center">
                <div className="flex flex-col justify-center w-full sm:w-1/2">
                  <p className="font-serif text-[52px] italic leading-[60px] mb-6">Chat with Fans Using an AI Persona</p>
                  <p className="mb-2 text-[20px] font-serif">You can’t chat with 100 fans at once, but "it" can! Plus, users can chat with AI persona at a low cost</p>
                </div>

                <Image src="/ai-icon.png" width={232} height={232} alt="ai-icon" />
              </div>
            </div>

            {open3 && <div className="flex justify-center sm:justify-end items-center sm:pr-20 w-[calc(100%-4px)] h-[calc(100%-4px)] absolute bg-[rgba(0,0,0,0.7)] rounded-[30px]">
              <div className="flex flex-row gap-6">
                <Image src="/qrcode.png" width={120} height={120} alt="qrcode" className='object-contain' />
              </div>
              <div className="flex flex-col gap-2 ml-4">
                <Image src="/andriod.png" width={200} height={55} alt="android" className='object-contain cursor-pointer'
                  onClick={() => {
                    router.push("https://onlyforyou.live/api/android/download")
                  }
                  } />
                <Image src="/apple.png" width={200} height={55} alt="ios" className='object-contain cursor-pointer'
                  onClick={() => router.push('/addIcon')} />
              </div>
            </div>}

          </div>
        </div>
      </div>

      {/* section 4 - start to chat */}
      <div className="flex relative w-full h-full flex-col items-center pb-20 px-4"
        style={{
          backgroundImage: "url('/bg-5.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-row gap-2 w-full max-w-[1000px] justify-center items-center mt-20 px-4">
          <Image src="/line-l.png" width={120} height={6} alt="line" className="object-contain hidden sm:block" />
          <p className="flex-1 font-serif text-[55px] italic leading-[50px] text-[#171717] font-bold scale-y-110 text-center">
            Fair and Fast Payouts
          </p>
          <Image src="/line-r.png" width={120} height={6} alt="line" className="object-contain hidden sm:block" />
        </div>
        <div className="text-[20px] my-16 text-center px-4">
          Earn 80% of your revenue with the option for immediate withdrawals on transactions exceeding 100 coins.
        </div>
        <Image src="/payment.png" width={523} height={720} alt="ai-icon" className=" cursor-pointer" />
        <div className="text-[20px] my-16 text-center px-4">
          Step into the future of live streaming with AI Me, the premier AI-enhanced live streaming platform.
        </div>

        <div className="flex flex-row gap-2 w-full max-w-[1000px] justify-center items-center mt-10 px-4">
          <Image src="/line-l.png" width={120} height={6} alt="line" className="object-contain hidden sm:block" />
          <p className="flex-1 font-serif text-[55px] italic leading-[50px] text-[#171717] font-bold scale-y-110 text-center">
            Business Model:
          </p>
          <Image src="/line-r.png" width={120} height={6} alt="line" className="object-contain hidden sm:block" />
        </div>
        <div className="flex justify-start flex-col gap-2 mt-10 text-[40px]">
          <div>6.1 1-on-1 Paid</div>
          <div>6.2 Private Shows</div>
          <div>6.3 Exclusive Video/Photo Unlock</div>
          <div>6.4 Custom Media</div>
          <div>6.5 Tips</div>
          <div>6.6 AI persona chat income</div>
        </div>
        <div className="text-[20px] my-16 text-center px-4">
          For more details, please contact: aime@aimeai.live
        </div>
      </div>

    </div >
  );
}

Home.getLayout = getLayout
export default Home