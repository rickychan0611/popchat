import ResponsiveImage from "@/components/ResponsiveImage";
import Image from "next/image";
import React from "react";

type Props = {};

function index({}: Props) {
  return (
    <div className="bg-[#F9F6FC] min-h-screen">
      <div className="max-w-[1400px] mx-auto relative">
        {/* app bar */}
        <div className="fixed top-6 flex flex-row justify-between items-center w-full max-w-[1400px] mx-auto px-16 z-10">
          <div className="flex flex-row gap-5">
            <Image
              src={"/logo.png"}
              width={77}
              height={56}
              alt="logo"
              className="object-contain"
            />
            <Image
              src={"/popChat.png"}
              width={138}
              height={16}
              alt="logo"
              className="object-contain"
            />
          </div>
          <div className="flex flex-row gap-5">
            <Image
              src={"/x.png"}
              width={32}
              height={32}
              alt="x"
              className="cursor-pointer"
            />
            <Image
              src={"/tiktok.png"}
              width={32}
              height={32}
              alt="tiktok"
              className="cursor-pointer"
            />
            <Image
              src={"/Twich.png"}
              width={32}
              height={32}
              alt="Twich"
              className="cursor-pointer"
            />
            <div className="cursor-pointer  ml-4 flex flex-row justify-center items-center border border-purple-100 shadow-lg shadow-purple-100 rounded-full px-6">
              Community
            </div>
          </div>
        </div>

        <div className="w-full relative bg-red-200">
          {/* background image */}
          <div className="absolute top-0 w-[980px] h-[92vh]">
            <div className="relative mt-6 w-full h-full">
              <Image
                fill
                sizes="100%"
                src={"/main-bg.png"}
                alt="bg"
                className="object-fit"
              />
            </div>
          </div>

          {/* center text */}
          <div className="absolute w-[62%] max-w-[880px] text-white  text-center 1200 mt-6">
            <div className="flex flex-col justify-center items-center h-[92vh] px-10">
              <div className="font-[Poppins] font-[900] text-[62px]">
                1-on-1 Video Chat
              </div>
              <div className="font-[Poppins] font-[500] text-[30px] mt-6 mb-4 px-[100px]">
                Instant AI Translation: Speak Your Language, Hear Theirs
                Translated
              </div>
              <div className="relative w-[180px] cursor-pointer">
                <ResponsiveImage src={"/1on1.png"} />
              </div>
              <div className="flex flex-row gap-4 mt-10">
                <div className="relative w-[180px] h-full cursor-pointer flex-1">
                  <ResponsiveImage src={"/download.png"} />
                </div>
                <div className="relative w-[180px] h-full cursor-pointer flex-1">
                  <ResponsiveImage src={"/google_play.png"} />
                </div>
                <div className="relative w-[180px] h-full cursor-pointer flex-1">
                  <ResponsiveImage src={"/apple.png"} />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-[180px] right-0 1200 w-full text-right">
            <div className="flex flex-col justify-end items-end relative">
              <div className="relative w-full h-full ">
                <div className="absolute top-0 right-32 1200">
                  <div className="mr-2 mt-1 w-[340px] h-[700px] flex flex-col justify-center overflow-hidden">
                    <video
                      controls={false}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-[1000px] object-cover rounded-[50px] "
                      src="/1on1.mov"
                    />
                  </div>
                </div>
                <div className="absolute top-0 right-32 1200 ">
                  <Image
                    src="/frame.png"
                    width={350}
                    height={1}
                    alt="frame"
                    className="object-fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[300px] right-0">
          <Image
            src="/chatbox1.png"
            width={260}
            height={1}
            alt="frame"
            className="object-fit"
          />
        </div>
        <div className="absolute top-[520px] right-[420px]">
          <Image
            src="/chatbox.png"
            width={280}
            height={1}
            alt="frame"
            className="object-fit"
          />
        </div>
        <div className="absolute top-[650px] right-[150px]">
          <Image
            src="/hearts.png"
            width={290}
            height={1}
            alt="frame"
            className="object-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default index;
