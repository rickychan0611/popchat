import Image from "next/image";
import { getLayout } from "@/layouts/DefaultLayout";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Router } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Android_Download, H5_URL } from "@/constants/constant";
import NavMenu from "@/components/NavMenu";
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
              router.push(Android_Download)
            }
            } />
          <Image src="/apple.png" width={200} height={55} alt="ios" className='object-contain cursor-pointer'
            onClick={() => router.push('/addIcon')} />
        </div>
      </div>
    )
  }


  return (
    <div className={`flex min-h-screen flex-col items-center justify-between bg-black `} >
      <div className="flex relative w-full h-full pt-24 flex-col pb-4 sm:pb-28"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >

        <NavMenu />

        <div className="w-[90%] max-w-[1200px] mx-auto pt-0 sm:pt-10 text-center text-white">
          <ResponsiveImage src="/briefIntroduction.png" className="rounded-[25px]" />
          <div className="w-full flex justify-center mt-6">
            <div className="flex flex-1 justify-center items-center rounded-[30px] mt-0 lg:mt-28 
               p-1 sm:p-2 m-4 bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF]"
            >
              <ResponsiveImage src="/main-1.jpg" className="rounded-[25px]" />
            </div>
          </div>
          <div className="font-serif text-3xl sm:text-[45px] italic mt-2 sm:mt-8 sm:leading-[70px]">AI Face-Swapping</div>
          <div className="text-lg sm:text-[18px] font-serif mb-4 mt-2 sm:mt-7">Realistic and Vibrant, Transcend Yourself</div>
        </div>
      </div>

      <div className="sm:hidden block">
        <div className='flex flex-row gap-4 mt-4 mb-2'>
          <Image src="/andriod.png" width={150} height={60} alt="logo" className='object-contain cursor-pointer'
            onClick={() => router.push(Android_Download)} />
          <Image src="/apple.png" width={150} height={60} alt="logo" className='object-contain cursor-pointer'
            onClick={() => router.push('/addIcon')} />
        </div>
        <p className='font-serif text-2xl text-white mb-4 text-center'>Download now</p>
      </div>

      {/* section 2 */}
      <div className="flex relative w-full h-full flex-row justify-center z-10 bg-white"
        style={{
          backgroundImage: "url('/bg-blue.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}>
        <div className="flex flex-col lg:flex-row relative w-full max-w-[1400px] lg:p-10"
        >
          {/* left heart logo column */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 lg:pr-10 px-6 ">
            <div className="mt-10 lg:mt-20 mb-20">
              <Image src="/1on1.png" width={200} height={200} alt="1on1 logo" />
              <p className="text-black text-[54px] font-serif italic">
                1-on-1 Live: Private Room</p>
              <p className="text-black text-[24px] mt-10 mb-20 font-serif">
                1-on-1 Live Streaming: Engage in direct face-to-face interaction with the host
              </p>
            </div>
          </div>

          {/* right video */}
          <div className="flex flex-1 justify-center items-center relative mt-[-80px] mb-10 lg:mt-0 lg:mb-10">

            {/* video */}
            <div className="rounded-[40px] w-[88%] max-w-[375px] lg:w-[390px] h-[815px] absolute top-0 lg:top-[100px]">
              <video controls={false} autoPlay muted loop playsInline
                className="w-full h-full object-cover rounded-[50px]"
              >
                <source src="/1on1.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* frame */}
            <div className="rounded-[30px] w-[100%] max-w-[408px] lg:w-[408px] h-[820px] lg:absolute top-[95px] ml-2 lg:ml-0 mt-[-5px]">
              <div className=" w-[97%] max-w-[408px] lg:w-[408px] h-[832px] relative">
                <Image src="/frame.png" fill sizes="100%" alt="frame" className="z-40" />
              </div>

              <div className="absolute w-[98%] max-w-[320px] bottom-2 lg:ml-[-120px]">
                <div className="w-full lg:w-[520px] h-[220px] lg:h-[320px] relative scale-90 z-40 ml-[-16px] lg:ml-0">
                  <Image src="/video-graphics.png" fill sizes="100%" alt="frame" className="z-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* section 3 */}
      <div className="flex relative w-full h-full flex-col justify-center items-center mt-10 lg:mt-[150px]"
        style={{
          backgroundImage: "url('/bg-3.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >

        {/* Private show */}
        <div className="flex w-full max-w-7xl flex-col lg:flex-row mt-10 sm:mt-40 mb-20 sm:mb-0 px-4 gap-4">

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

          <div className="flex flex-1 items-center justify-center mt-10 sm:mt-0 text-white">
            <div className="flex flex-col">
              <div className="w-[320px] h-[245px] relative">
                <Image src="/privateShow.png" fill sizes="100%" alt="private show" className="object-contain" />
              </div>

              <div className="text-[16px] flex flex-col lg:flex-row gap-4 mt-16">
                <div className="px-6 py-2 rounded-full border border-white cursor-pointer flex justify-center items-start">
                  Ticketed Entry
                </div>
                <div className="px-6 py-2 rounded-full border border-white cursor-pointer flex justify-center items-start">
                  Guest Limit
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Media Unlock */}
        <div className="flex w-full max-w-[1200px] flex-col sm:flex-row mt-4 sm:mt-40 p-4 gap-16">
          <div className="flex flex-1 flex-col">
            <Image src="/line.png" width={132} height={6} alt="unlock-image" className="object-contain" />
            <div className=" font-serif text-white italic text-[54px] my-8 ">Exclusive Meida Unlock</div>
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
            <div className=" font-serif text-white italic text-[54px] my-8 ">Customized Media</div>
            <div className=" font-serif text-white text-[20px] mb-8">Signed Visuals Tailored by Hosts</div>
            <Image src="/line.png" width={132} height={6} alt="unlock-image" className="object-contain" />
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

              <div className="flex py-16 px-4 sm:px-20 flex-col-reverse sm:flex-row justify-between items-center">
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
                    router.push(Android_Download)
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
        <div className="flex flex-row gap-2 w-full max-w-[1000px] justify-center items-center mt-[156px] mb-[164px] px-4">
          <Image src="/line-l.png" width={120} height={6} alt="line" className="object-contain hidden sm:block" />
          <p className="flex-1 font-serif text-[55px] italic leading-[50px] text-[#171717] font-bold scale-y-110 text-center">
            Start to Chat
          </p>
          <Image src="/line-r.png" width={120} height={6} alt="line" className="object-contain hidden sm:block" />
        </div>

        <Image src="/chat1.png" width={523} height={720} alt="ai-icon" className="mb-[240px] cursor-pointer"
          onClick={() => router.push(H5_URL)} />
        <Image src="/chat2.png" width={523} height={720} alt="ai-icon" className="mb-[240px] cursor-pointer"
          onClick={() => router.push(H5_URL)} />
        <Image src="/chat3.png" width={523} height={720} alt="ai-icon" className="mb-[230px] cursor-pointer"
          onClick={() => router.push(H5_URL)} />

      </div>

    </div >
  );
}

Home.getLayout = getLayout
export default Home