import { Android_Download, H5_URL } from "@/constants/constant";
import { Globe, Router } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const PrivacyAppBar = (props: Props) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  return (
    <div className="z-30 bg-white fixed flex flex-row justify-between items-center w-screen ">
      <div className="w-full max-w-[1400px] mx-auto p-6 relative">
      <div className="font-bold text-2xl absolute top-6 left-12 z-50">Safety Center</div>
      <div className="gap-4 absolute w-full top-0 font-bold text-2xl p-4 flex justify-center items-center cursor-pointer"
          onClick={() => router.push('/')}>
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
      </div>
    </div>
  );
};

export default PrivacyAppBar;
