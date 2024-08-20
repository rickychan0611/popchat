import React from "react";
import FAQGeneral from "./FAQGeneral";
import FAQMyAccount from "./FAQMyAccount";
import FAQPrivacyCenter from "./FAQPrivacyCenter";
import FAQSafety from "./FAQSafety";
import FAQSocialAwareness from "./FAQSocialAwareness";

type Props = {};

const FAQ = (props: Props) => {
  const [selected, setSelected] = React.useState("FAQGeneral");
  return (
    <>
      <div className="bg-white fixed top-[120px] flex flex-row justify-between items-center w-screen z-10">
        <div className="w-full max-w-[1010px] mx-auto pb-6 pt-20 relative ">
          <div className="flex flex-row gap-12 text-2xl font-bold">
          <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => setSelected("FAQGeneral")}
            >
              <div>General</div>
              <div
                className={`w-10 h-1 mt-4 ${
                  selected === "FAQGeneral" ? "bg-blue-600" : ""
                }`}
              />
            </div>

            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => setSelected("FAQMyAccount")}
            >
              <div>My Account</div>
              <div
                className={`w-10 h-1 mt-4 ${
                  selected === "FAQMyAccount" ? "bg-blue-600" : ""
                }`}
              />
            </div>

            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => setSelected("FAQSafety")}
            >
              <div>Safety</div>
              <div
                className={`w-10 h-1 mt-4 ${
                  selected === "FAQSafety" ? "bg-blue-600" : ""
                }`}
              />
            </div>

            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => setSelected("FAQSocialAwareness")}
            >
              <div>Social Awareness</div>
              <div
                className={`w-10 h-1 mt-4 ${
                  selected === "FAQSocialAwareness" ? "bg-blue-600" : ""
                }`}
              />
            </div>

            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => setSelected("FAQPrivacyCenter")}
            >
              <div>Privacy Center</div>
              <div
                className={`w-10 h-1 mt-4 ${
                  selected === "FAQPrivacyCenter" ? "bg-blue-600" : ""
                }`}
              />
            </div>

            
          </div>
        </div>
      </div>

      {selected === "FAQGeneral" && <FAQGeneral />}
      {selected === "FAQMyAccount" && <FAQMyAccount />}
      {selected === "FAQSafety" && <FAQSafety />}
      {selected === "FAQSocialAwareness" && <FAQSocialAwareness />}
      {selected === "FAQPrivacyCenter" && <FAQPrivacyCenter />}
      
    </>
  );
};

export default FAQ;
