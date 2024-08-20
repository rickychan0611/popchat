import React from "react";
import LawGuidelines from "./LawGuidelines";
import PortalOverview from "./PortalOverview";

type Props = {};

const Law = (props: Props) => {
  const [selected, setSelected] = React.useState("portal");
  return (
    <>
      <div className="bg-white fixed top-[120px] flex flex-row justify-between items-center w-screen z-10">
        <div className="w-full max-w-[1010px] mx-auto pb-6 pt-20 relative ">
          <div className="flex flex-row gap-12 text-2xl font-bold">
          <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => setSelected("portal")}
            >
              <div>Portal Overview</div>
              <div
                className={`w-10 h-1 mt-4 ${
                  selected === "portal" ? "bg-blue-600" : ""
                }`}
              />
            </div>

            <div
              className=" cursor-pointer flex items-center flex-col"
              onClick={() => setSelected("guidelines")}
            >
              <div>Guidelines</div>
              <div
                className={`w-10 h-1 mt-4 ${
                  selected === "guidelines" ? "bg-blue-600" : ""
                }`}
              />
            </div>

            
          </div>
        </div>
      </div>

      {selected === "guidelines" && <LawGuidelines />}
      {selected === "portal" && <PortalOverview />}
    </>
  );
};

export default Law;
