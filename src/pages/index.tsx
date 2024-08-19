import ResponsiveImage from "@/components/ResponsiveImage";
import { Android_Download } from "@/constants/constant";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

type Props = {};

const Home = () => {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen font-[poppins]">
      <div className="max-w-[1300px] mx-auto relative">
        {/* app bar */}
        <div className="absolute top-6 flex flex-row justify-between items-center w-full max-w-[1300px] mx-auto px-16 z-10">
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
            <a href="https://x.com/PopChatdotlive" target="_blank">
              <Image
                src={"/x.png"}
                width={32}
                height={32}
                alt="x"
                className="cursor-pointer"
              />
            </a>
            <a href="http://tiktok.com/@PopChat.live" target="_blank">
              <Image
                src={"/tiktok.png"}
                width={32}
                height={32}
                alt="tiktok"
                className="cursor-pointer"
              />
            </a>

            <a href="https://www.twitch.tv/popchatlive" target="_blank">
              <Image
                src={"/Twich.png"}
                width={32}
                height={32}
                alt="Twich"
                className="cursor-pointer"
              />
            </a>

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
          <div className="absolute w-[62%] max-w-[880px] text-white  text-center 1200 mt-6 z-50">
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
                <div
                  className="relative w-[180px] h-full cursor-pointer"
                  onClick={() => {
                    router.push(Android_Download);
                  }}
                >
                  <ResponsiveImage src={"/download.png"} />
                </div>
                <div className="relative w-[180px] h-full cursor-pointer flex-1">
                  <ResponsiveImage src={"/google_play.png"} />
                </div>
                <div className="relative w-[180px] h-full cursor-pointer flex-1"
                 onClick={() => {
                  router.push("https://aime-h5-test.web.app/");
                }}>
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
        <div className="absolute top-[850px] right-[105px]">
          <Image
            src="/shadow.png"
            width={400}
            height={100}
            alt="frame"
            className="object-fit"
          />
        </div>

        {/* 2nd section */}
        <div className="pt-[calc(100vh+50px)] right-0 w-full flex flex-col items-center relative">
          {/* background decor */}
          <div className="absolute top-[1100px] left-[100px] flex justify-start items-start w-full">
            <Image src={"/shoes.png"} width={89} height={1} alt="line" />
          </div>
          <div className="absolute top-[1180px] right-0 flex justify-start items-start">
            <Image src={"/ball2.png"} width={89} height={1} alt="line" />
          </div>
          <div className="absolute top-[1900px] flex justify-start items-start w-full">
            <Image src={"/ball1.png"} width={752} height={1} alt="line" />
          </div>

          <div className="text-center text-[58px] font-semibold mb-6">
            My Stage
          </div>
          <Image src={"/line.png"} width={132} height={1} alt="line" />
          <div className="text-[40px] mt-10">Your personal stage to shine.</div>
          <div className="text-[40px] mb-20">
            Showcase your talent to your fans.
          </div>
          <Image
            src={"/section2.png"}
            width={800}
            height={1}
            alt="line"
            className="z-10 mb-28"
          />

          {/* section 3 */}
          <div className="w-full bg-gradient-to-r from-[#BE6AFF] to-[#220FCD] z-[20] flex justify-center items-center p-8 gap-4">
            <div className="grid grid-cols-2 gap-6 w-full max-w-[1040px]">
              <div className="bg-white rounded-lg flex flex-row px-12 py-8 gap-10">
                <Image
                  src={"/1on1video.png"}
                  width={80}
                  height={1}
                  alt="line"
                  className="object-contain"
                />
                <div className={"flex flex-col"}>
                  <div className="text-[24px] font-semibold">
                    1-on-1 Video Chat
                  </div>
                  <div>Face-to-face chat with your favorite host.</div>
                </div>
              </div>

              <div className="bg-white rounded-lg flex flex-row px-12 py-8 gap-8">
                <Image
                  src={"/vs.png"}
                  width={80}
                  height={1}
                  alt="line"
                  className="object-contain"
                />
                <div className={"flex flex-col"}>
                  <div className="text-[24px] font-semibold">Easy Matching</div>
                  <div>Quickly and safely make new friends.</div>
                </div>
              </div>

              <div className="bg-white rounded-lg flex  flex-row px-12 py-8 gap-8">
                <Image
                  src={"/host.png"}
                  width={80}
                  height={1}
                  alt="line"
                  className="object-contain"
                />
                <div className={"flex flex-col"}>
                  <div className="text-[24px] font-semibold">
                    Gorgeous Hosts
                  </div>
                  <div>Interact with stunning hosts.</div>
                </div>
              </div>

              <div className="bg-white rounded-lg flex flex-row px-12 py-8 gap-8">
                <Image
                  src={"/safety.png"}
                  width={80}
                  height={1}
                  alt="line"
                  className="object-contain"
                />
                <div className={"flex flex-col"}>
                  <div className="text-[24px] font-semibold">
                    Safety Features
                  </div>
                  <div>Your safety is our priority. Visit our community.</div>
                </div>
              </div>
            </div>
          </div>

          {/* section 4 */}
          <div className="w-full p-[100px]">
            <ResponsiveImage src={"/group.jpg"} />
          </div>
        </div>
      </div>

      <div className="bg-[#09042F] w-full flex flex-col justify-center items-center pt-[50px] text-white">
        <div className="flex flex-row gap-[100px]">
          <div className=" cursor-pointer">Contact</div>
          <div className=" cursor-pointer">Terms of Use</div>
          <div className=" cursor-pointer">Privacy</div>
          <div className=" cursor-pointer">Safety Center</div>
        </div>

        <div className="text-[12px] text-center my-8">
          <div>@ Copyright PopChat 2023</div>
          <div>609 West Hastings，Vancouver, BC, Canada V6B 4W4</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
