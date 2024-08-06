// PricingPage.jsx

import { getLayout } from "@/layouts/DefaultLayout";
import Image from "next/image";
import React from "react";

const PricingPage = () => {
  const Coin = () => (
    <Image
      src="/coin.png"
      alt="coin"
      width={20}
      height={20}
      className="object-contain"
    />
  );

  return (
    <div
      className="min-h-screen pb-12 pt-[150px]"
      style={{
        backgroundImage: "url('/bg-1.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">
            Host Pricing Options
          </h2>
          <p className="mt-4 text-lg text-white">
            Explore various ways hosts can earn tokens.
          </p>
        </div>

        {/* Pricing Cards Section */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1-on-1 Chat Pricing Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-3xl font-serif text-center text-blue-700">
                1-on-1 Chat
              </h3>
              <p className="mt-2  text-gray-800">Host-Set Pricing</p>
              <div className="mt-2  text-gray-800">
                <p>Recommended Package Rates:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    <div className="flex flex-row gap-1">
                      {" "}
                      10 minutes: <Coin />
                      25
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-1">
                      {" "}
                      15 minutes: <Coin />
                      35
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-1">
                      {" "}
                      20 minutes: <Coin />
                      45
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-1">
                      {" "}
                      30 minutes: <Coin />
                      70
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-row gap-1">
                      {" "}
                      60 minutes: <Coin />
                      120
                    </div>
                  </li>
                </ul>
                <p className="mt-2">
                  Extensions available for sessions over 60 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Private Shows Pricing Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-3xl font-serif text-center text-blue-700">
                Private Shows
              </h3>
              <p className="mt-2 text-gray-800">Host-Set Pricing </p>
              <p className=" text-gray-800">Ticketed Entry</p>
              <p className=" text-gray-800">Guest Limited</p>
              <div className="mt-4 text-gray-800">
                <div>For example: A 30 minutes show:</div>
                <div className="flex flex-row gap-1">
                  Ticket Price <Coin />
                  30 each
                </div>
                Limit: 200 people
              </div>
            </div>
          </div>

          {/* Exclusive Video/Photo Unlock Pricing Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-3xl font-serif text-center text-blue-700">
                Exclusive Video/Photo Unlock
              </h3>
              <p className="mt-2  text-gray-800">Host-Set Pricing</p>
              <div className="mt-2  text-gray-800">
                <div className="flex flex-row gap-1">
                  Average Pricing: <Coin />
                  15 per item
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {/* Custom Media Pricing Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-3xl font-serif text-center text-blue-700">
                Custom Media
              </h3>
              <p className="mt-2  text-gray-800">Agreed Pricing</p>
              <div className="mt-2  text-gray-800">
                <p>Recommended Range:</p>
                <div className="flex flex-row gap-1">
                  <Coin />5 - <Coin />
                  100 per item
                </div>
              </div>
            </div>
          </div>

          {/* Tips Pricing Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-3xl font-serif text-center text-blue-700">
                Tips
              </h3>
              <p className="mt-2  text-gray-800">User-Decided Customizable</p>
              <div className="mt-2  text-gray-80 flex flex-row gap-1">
                Range: <Coin />
                0.1 - <Coin />
                20
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

PricingPage.getLayout = getLayout;
export default PricingPage;
