import ResponsiveImage from "@/components/ResponsiveImage";
import { Android_Download, Streamy_Download } from "@/constants/constant";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";
import ContactModal from "@/components/ContactModal";
import H5QRCode from "@/components/H5QRCode";
import DownloadQRCode from "@/components/DownloadQRCode";

type Props = {};

const Home = () => {
  const router = useRouter();
  const [openContact, setOpenContact] = useState(false)
  const [openQR, setOpenQR] = useState(false)
  const [openDownloadQR, setOpenDownloadQR] = useState(false)

  return (
    <div className="bg-white min-h-screen w-auto font-[poppins] ">
      <ContactModal open={openContact} setOpen={setOpenContact} type={0} />

      <div className="min-w-[1200px] max-w-[1380px] mx-auto relative">
        {/* app bar */}
        <div className="min-w-[1200px] max-w-[1380px] mx-auto absolute top-6 flex flex-row justify-between items-center px-16 z-50">
          <div className="flex flex-row gap-5 cursor-pointer "
            style={{ zIndex: 1000 }}>
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

            <a href="/safety-center/guidelines" target="_blank" className="text-black no-underline">
              <div className="cursor-pointer ml-4 flex flex-row justify-center items-center border border-purple-100 shadow-lg shadow-purple-100 rounded-full py-1 px-6"
              >
                Community
              </div>
            </a>
          </div>
        </div>

        <div className="w-full relative h-[900px]">
          {/* background image */}
          <div className="absolute top-0 w-[980px] h-[900px]">
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
          <div className="absolute w-[62%] max-w-[880px] text-white  text-center 1200 mt-6 ">
            <div className="flex flex-col justify-center items-center h-[900px] px-10">
              <div className="font-[Poppins] font-[900] text-[60px]">
                1-on-1 Video Chat
              </div>
              <div className="font-[Poppins] text-[30px] mt-2  marker:px-[100px]">
                Instant AI Translation
              </div>
              <div className="font-[Poppins]  text-[20px] mt-1 mb-4 px-[100px]">
                Speak Your Language, Hear Theirs in Yours
              </div>
              <div className="relative w-[180px] cursor-pointer">
                <ResponsiveImage src={"/1on1.png"} />
              </div>
              <div className="flex flex-row gap-4 mt-10">
                <div
                  className="relative w-[180px] h-full cursor-pointer"
                  onClick={() => {
                    setOpenDownloadQR(!openDownloadQR)
                    setOpenQR(false)
                  }}
                >
                  <div className="relative">
                    {openDownloadQR &&
                      <div className=" cursor-pointer absolute top-[-190px] right-0 bg-white z-50 p-4 rounded-lg border shadow"
                        onClick={() => { setOpenDownloadQR(false) }}
                      >
                        <DownloadQRCode />
                      </div>
                    }
                    <ResponsiveImage src={"/download.png"} />
                  </div>
                </div>

                <a href="https://play.google.com/" target="_blank">
                  <div className="relative w-[180px] h-full cursor-pointer flex-1">
                    <ResponsiveImage src={"/google_play.png"} />
                  </div>
                </a>

                <div className="relative w-[180px] h-full cursor-pointer flex-1"
                  onClick={() => {
                    setOpenQR(!openQR)
                    setOpenDownloadQR(false)
                  }}>
                  {openQR &&
                    <div className=" cursor-pointer absolute top-[-190px] right-0 bg-white z-50 p-4 rounded-lg border shadow"
                      onClick={() => setOpenQR(false)}
                    >
                      <H5QRCode />
                    </div>
                  }
                  <ResponsiveImage src={"/apple.png"} />
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="absolute top-[170px] right-0 w-full text-right">
              <div className="flex flex-col justify-end items-end relative">
                <div className="relative w-full h-full ">
                  <div className="absolute top-0 right-32">
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
                  <div className="absolute top-0 right-32 ">
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
          </div>
        </div>

        {/* 2nd section */}
        <div className="mt-[100px] right-0 w-full flex flex-col items-center relative">
          {/* background decor */}
          <div className="absolute top-0 left-[100px] flex justify-start items-start w-full">
            <Image src={"/shoes.png"} width={89} height={1} alt="line" />
          </div>
          <div className="absolute top-[160px] right-0 flex justify-start items-start">
            <Image src={"/ball2.png"} width={89} height={1} alt="line" />
          </div>
          <div className="absolute top-[800px] flex justify-start items-start w-full">
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

      <div className="bg-[#09042F] w-full flex flex-col justify-center items-center pt-[40px] text-white">
        <div className="flex flex-row gap-[100px] items-center">
          <div className=" cursor-pointer"
            onClick={() => setOpenContact(true)}>Contact</div>

          <a href="/privacy-center/terms" target="_blank" className="text-white no-underline">
            <div className=" cursor-pointer" >Terms of Service</div>
          </a>

          <a href="/privacy-center/privacy-policy" target="_blank" className="text-white no-underline">
            <div className=" cursor-pointer" >Privacy</div>
          </a>

          <a href="/safety-center/tips" target="_blank" className="text-white no-underline">
            <div className=" cursor-pointer" >Safety Center</div>
          </a>

          <a href={Streamy_Download} target="_blank" className="text-white no-underline">
            <div className=" cursor-pointer bg-white text-black py-1 px-6 rounded-full flex flex-col justify-center items-center" >
              <div className="">Download</div>
              <div className="text-[14px] mt-[-4px]">Streamy Assistant</div>
            </div>
          </a>
        </div>

        <div className="text-[12px] text-center my-8">
          <div>@ Copyright PopChat {moment().format("YYYY")}</div>
          <div>609 West Hastings，Vancouver, BC, Canada V6B 4W4</div>
        </div>
      </div>
    </div >
  );
}

export default Home;
