import Image from "next/image";
import { Inter } from "next/font/google";
import { Noto_Serif } from "next/font/google";
import { getLayout } from "@/layouts/DefaultLayout";

const Home = () => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between  bg-black`} >
      <div className="flex relative w-full h-full pt-24 flex-col"
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
          <div className="flex w-[1000px] h-[555px] justify-center items-center p-2 rounded-[30px] mt-10"
           style={{
            backgroundImage: "linear-gradient(to right, #FF1CF7, #00F0FF)",
          }}>
            <div className="flex w-[100%] h-[100%] relative">
              <Image src="/main-1.jpg" fill className="object-cover rounded-[25px]" alt="AI face swapping for 1 on 1 live streaming" />
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">

      </div>
    </main>
  );
}

Home.getLayout = getLayout
export default Home