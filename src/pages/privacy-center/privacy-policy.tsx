import PrivacyPolicy from "@/components/Privacy/PrivacyPolicy";
import TermsOfService from "@/components/Privacy/TermsOfService";
import SafetyTips from "@/components/Safety/SafetyTips";
import { getLayout } from "@/layouts/PrivacyLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const PolicyIndex = (props: Props) => {
  const router = useRouter();

  return (
    <>
      <div className="z-20 bg-white shadow-lg shadow-[#00000010] fixed pt-[80px] flex flex-row justify-between items-center w-screen ">
        <div className="w-full max-w-[1350px] mx-auto pt-6 pb-4 px-6">
          <div className="flex flex-row justify-between items-center gap-12">
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/privacy-center/terms")}
            >
              Terms of Serivce
              <div className="w-10 h-1 mt-4 "></div>
            </div>
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/privacy-center/privacy-policy")}
            >
              Privacy Policy
              <div className="w-10 h-1 mt-4 bg-blue-600 "></div>
            </div>
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/privacy-center/content-consent")}
            >
              Content Consent Agreement
              <div className="w-10 h-1 mt-4"></div>
            </div>
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/privacy-center/legal-bases")}
            >
              Legal Bases
              <div className="w-10 h-1 mt-4"></div>
            </div>
           
          </div>
        </div>
      </div>

      <PrivacyPolicy />
    </>
  );
};

PolicyIndex.getLayout = getLayout;
export default PolicyIndex;
