import { Android_Download } from "@/constants/constant";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ContactModal from "./ContactModal";

type Props = {};

const PopChatFooter = (props: Props) => {
  const router = useRouter();
  const [openContact, setOpenContact] = useState(false);
  const [openAffiliate, setOpenAffiliate] = useState(false);

  function sendEmail() {
    const recipient = "digipalca@gmail.com";
    window.location.href = `mailto:${recipient}`;
  }

  return (
    <>
      <div className="bg-black flex flex-col p-4 sm:flex-row sm:pb-2 sm:justify-center">
        <div className="w-full flex flex-1 flex-col lg:flex-row mb-10 px-10 pt-8">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col gap-4 justify-center items-center">
              <div className="flex flex-row gap-4 flex-1 w-full">
                <Image
                  src={"/logo.png"}
                  width={120}
                  height={56}
                  alt="logo"
                  className="object-contain"
                />
                <Image
                  src={"/popChat.png"}
                  width={170}
                  height={16}
                  alt="logo"
                  className="object-contain"
                />
              </div>
              <div className="text-white">Copyright AI Me @{moment().format("YYYY")}</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-4 items-center justify-end flex-1">
                <Image
                  src={"/footer-apple.png"}
                  width={190}
                  height={56}
                  alt="logo"
                  className="object-contain"
                />
                <Image
                  src={"/footer-android.png"}
                  width={190}
                  height={56}
                  alt="logo"
                  className="object-contain"
                />
                <Image
                  src={"/footer-download.png"}
                  width={190}
                  height={56}
                  alt="logo"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-row gap-12 items-center justify-start flex-1 text-white mt-4">
                <div className=" underline cursor-pointer">Terms of Use</div>
                <div className=" underline cursor-pointer">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopChatFooter;
