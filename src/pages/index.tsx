import Image from "next/image";
import { getLayout } from "@/layouts/DefaultLayout";

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between bg-black`} >
      <div className="flex relative w-full h-full pt-24 flex-col pb-28"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex w-auto h-[300px] relative items-center justify-between">
          <Image src="/briefIntroduction.png" fill className="object-contain" alt="AI face swapping for 1 on 1 live streaming" />
        </div>
        <div className="w-full flex justify-center">
          <div className="flex w-[1000px] h-[555px] justify-center items-center p-2 rounded-[30px] mt-20"
            style={{
              backgroundImage: "linear-gradient(to right, #FF1CF7, #00F0FF)",
            }}>
            <div className="flex w-[100%] h-[100%] relative">
              <Image src="/main-1.jpg" fill className="object-cover rounded-[25px]" alt="AI face swapping for 1 on 1 live streaming" />
            </div>
          </div>
        </div>
      </div>


      {/* section 2 */}
      <div className="flex relative w-full h-full flex-row justify-center p-20"
        style={{
          backgroundImage: "url('/bg-2.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center bottom',
          backgroundSize: 'cover',
        }}
      >
        <div className="flex flex-col sm:flex-row relative w-full max-w-5xl p-4 ">

          {/* left heart logo column */}
          <div className="flex flex-col justify-center items-center w-full sm:w-1/2">
            <div className="mt-20 mb-10">
              <Image src="/1on1.png" width={200} height={200} alt="1on1 logo" />
              <p className="text-black text-[50px] font-serif">
                <span className="italic">1-on-1 Live</span>: Private Room</p>
              <p className="text-black text-[24px] mt-10">
                1-on-1 Live Streaming: Engage in direct face-to-face interaction with the host
              </p>
            </div>
          </div>

          {/* right video column */}
          <div className="w-full sm:w-[340px] sm:absolute right-0 bottom-[-200px] justify-center flex">
            <div className="relative ">
              <Image src="/frame.png" width={400} height={830} alt="frame" />
              <div className="absolute bottom-8 right-4 ml-[-120px]">
                <Image src="/video-graphics.png" width={600} height={430} alt="graphics" />
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* section 3 */}
      <div className="flex relative w-full h-full flex-col justify-center items-center mt-20"
        style={{
          backgroundImage: "url('/bg-3.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: 'cover',
        }}
      >

        {/* Private show */}
        <div className="flex w-full max-w-5xl flex-col lg:flex-row mt-10 sm:mt-40 px-4 gap-4">

          <div className="flex flex-1 justify-center items-center">
            <div className="bg-blue-600 rounded-[30px] w-[400px] h-[730px]">
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center mt-10 sm:mt-0">
            <div className="flex flex-col">
              <div className="w-[320px] h-[245px] relative">
                <Image src="/privateShow.png" fill sizes="100%" alt="private show" className="object-contain" />
              </div>

              <div className="flex flex-col lg:flex-row gap-4 mt-10">
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
        <div className="flex w-full max-w-5xl flex-col sm:flex-row mt-4 sm:mt-40 p-4 gap-4">
          <div className="flex flex-1 justify-center items-center">
            <div className="w-full h-[550px] sm:h-[750px] relative">
              <Image src="/unlock-right.png" fill sizes="100%" alt="unlock-image" className="object-contain" />
            </div>
          </div>
          <div className="flex flex-1 justify-center items-center mt-5 sm:mt-0">
            <div className="w-full h-[550px] sm:h-[750px] relative">
              <Image src="/unlock-left.png" fill sizes="100%" alt="unlock-image" className="object-contain" />
            </div>
          </div>
        </div>

        {/* Chat with Fans Using an AI Persona */}
        <div className="flex relative w-full max-w-5xlh-full flex-col-reverse sm:flex-row justify-center items-center mt-40 p-4 py-20 gap-4"
          style={{
            backgroundImage: "url('/bg-4.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <p className="font-serif text-[48px] italic leading-[50px] mb-6">Chat with Fans Using an AI Persona</p>
            <p className="mb-2 text-[20px]">You can’t chat with 100 fans at once, but "it" can!</p>
            <p className=" text-[20px]">Plus, users can chat with AI persona at a low cost</p>
          </div>

          <Image src="/ai-icon.png" width={232} height={232} alt="ai-icon" />
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
        <p className="font-serif text-[55px] italic leading-[50px]  text-[#7e318d] font-bold my-20">
          Chat with ME
        </p>
        <Image src="/chat1.png" width={523} height={720} alt="ai-icon" className="mb-20"/>
        <Image src="/chat2.png" width={523} height={720} alt="ai-icon" className="mb-20" />
        <Image src="/chat3.png" width={523} height={720} alt="ai-icon" className="mb-0" />

      </div>

    </main>
  );
}

Home.getLayout = getLayout
export default Home