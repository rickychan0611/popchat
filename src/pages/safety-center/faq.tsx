import FAQ from "@/components/Safety/FAQ";
import { getLayout } from "@/layouts/SafetyLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const FQAIndex = (props: Props) => {
  const router = useRouter();
  return (
    <>
      <div className="z-20 bg-white shadow-lg shadow-[#00000010] fixed top-[80px] flex flex-row justify-between items-center w-screen ">
        <div className="w-full max-w-[1350px] mx-auto pt-6 pb-4 relative">
          <div className="flex flex-row justify-between items-center gap-12">
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/safety-center/tips")}
            >
              Safety Tips
              <div className="w-10 h-1  mt-4"></div>
            </div>
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/safety-center/guidelines")}
            >
              Community Interaction Guidelines
              <div className="w-10 h-1 mt-4"></div>
            </div>
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/safety-center/submit-report")}
            >
              Submit a Report
              <div className="w-10 h-1 mt-4 "></div>
            </div>
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/safety-center/law-enforcement")}
            >
              Law Enforcement
              <div className="w-10 h-1 mt-4 "></div>
            </div>
            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => router.push("/safety-center/faq")}
            >
              FAQs
              <div className="w-10 h-1 mt-4 bg-blue-600 "></div>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
};

FQAIndex.getLayout = getLayout;
export default FQAIndex;
