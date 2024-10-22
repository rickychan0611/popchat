import { useEffect, useState } from "react";
import moment from "moment";
import ContactModal from "../components/ContactModal";
import ContactModalDetails from "../components/ContactModalDetails";
import Image from "next/image";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true)
  const [openAddHomeModal, setOpenAddHomeModal] = useState(false);
  const [openContact, setOpenContact] = useState(false)
  const [openContactDetails, setOpenContactDetails] = useState(false)
  const Android_Download = process.env.NEXT_PUBLIC_Android_Download + "";
  const H5_URL = process.env.NEXT_PUBLIC_H5_URL + "";

  return (
    <div className="w-screen font-[poppins] relative">
      <div className="absolute top-[-60px] w-screen   text-black overflow-hidden"
        style={{ zIndex: -1 }}>
        <div className="max-w-[500px] h-[980px] mx-auto bg-white " >
          <img src="/landing/h5-bg.png" className="object-cover h-[980px] w-[500px] object-left-top" />
        </div>
      </div>

      <div className="aboslute top-0 left-0 text-black z-50">
        <div className="flex flex-col justify-center items-center mx-auto text-center" >
          <div className="mt-[50px] font-[700] text-[20px]  whitespace-nowrap ">
            1-on-1 Video Chat
          </div>
          <div className="bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] h-[4px] w-[54px] mt-1" />
          <div className="mt-2 text-[16px] whitespace-nowrap">
            Where Gorgeous Hosts Gather
          </div>
          <div className="text-[16px] whitespace-nowrap">
            Instant AI Translation
          </div>
          <div className="mt-1 text-[13px] font-[200] px-4 whitespace-nowrap">
            Speak Your Language. Hear Theirs in Yours
          </div>

          <div className="px-8 mt-4 relative">

            <div className="absolute top-0 ml-1 max-w-[160px] h-[calc(100%-5px)] overflow-hidden"
              style={{ zIndex: -1 }}>
              <video
                controls={false}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-[20px]"
                src="/popchat.mp4"
              />
            </div>

            <img
              src="/frame.png"
              alt="frame"
              className="mt-[-4px] w-[170px]  object-contain"
            />

            <div className="absolute bottom-4 left-[-36px]">
              <img
                src="/video-graphics.png"
                alt="frame"
                className="w-[250px]"
              />
            </div>

            <div className="absolute top-44 right-[-50px] flex justify-center items-center rounded-full px-5 py-2 shadow bg-white font-[700]">
              Hi guys~ 👋
            </div>
          </div>

          <div className="mt-3 text-[14px] w-[200px] py-2 rounded-full shadow-lg shadow-[#484BDB50] bg-white mb-6"
            onClick={() => { router.push(H5_URL) }}>
            Start Video Chat
          </div>

          <div className="gap-2 flex flex-col bg-[#09042F] text-white w-full p-4 max-w-[500px]">
            <a href="/privacy-center/terms" className="text-white no-underline cursor-pointer">
              <div
              >Terms of Service</div></a>
            <a href="/privacy-center/privacy-policy" className="text-white no-underline cursor-pointer">
              <div
              >Privacy Center</div></a>
            <a href="/safety-center/tips" className="text-white no-underline cursor-pointer">
              <div
              >Safety Center</div></a>
            <a href="/safety-center/community" className="text-white no-underline cursor-pointer">
              <div
              >Community Guidelines</div></a>

            <hr className="border-stone-800 mt-4 mb-2" />
            <div className="text-[12px] opacity-60"> @ Copyright PopChat {moment().format("YYYY")}</div>
            <div className="text-[12px] opacity-60 mt-[-5px]">
              609 West Hastings, Vancouver, BC, Canada V6B 4W4</div>
          </div>
        </div>
      </div>


      {/* <AddToHomeModal open={openAddHomeModal} setOpen={setOpenAddHomeModal} /> */}
      {/* <ContactModal open={openContact} setOpen={setOpenContact} type={0} /> */}
      {/* <ContactModalDetails open={openContactDetails} setOpen={setOpenContactDetails} type={0} /> */}

    </div>
  );
};

export default Landing;
