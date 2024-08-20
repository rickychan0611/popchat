import React from "react";

type Props = {};

const PrivacyPolicy = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

          <section className="mb-8">
            <h3 className="font-bold mb-2">1. Introduction</h3>
            <p className="mb-4">
              This is the Privacy Policy of Clash Arts HK Limited (“PopChat”, “us”, “we” or “our”) which is incorporated into and is subject to our Terms of Service. Please read on to learn more about our data handling practices. By visiting our website <a href="https://www.popchat.live" className="text-blue-600 underline">https://www.popchat.live</a> (“Site”) or accessing or using our PopChat mobile application (“App”) or all of the services available or related to therein (collectively referred to in this Privacy Policy as the “Service(s)”) you agree with the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not use the Service.
            </p>
            <p className="mb-4">
              When you visit the Site or App, we may collect data from you as described below. When you register and use your account with us, we will collect data from you in order to provide the Services. The types of data we collect depend on how you use our App and Services.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">2. Information We Collect</h3>
            <p className="mb-4">
              When you visit and use our Site or App, install the App on your device, or register for an account with PopChat, some personally identifiable information about you is collected for us to be able to provide you with the Services. Further details about this are set out below.
            </p>
            <h4 className="font-semibold mb-2">2.1 “Registration and Account Data”</h4>
            <p className="mb-4">
              When you install the Service on your device and/or register for an account with PopChat, personally and/or non-personally identifiable information about you may be collected.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Mandatory Information:</strong> You will be asked to provide your gender, name or an alias, and date of birth together with your mobile phone or email address.</li>
              <li><strong>Optional Information:</strong> You may also choose to provide other personally identifiable information such as your photos or videos of yourself, description of yourself, and information about your interests.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">3. Location Information</h3>
            <p className="mb-4">
              ‘Location Data’ is information such as your current location which can be derived from your GPS, Wi-Fi, IP address, which may be disclosed to either us or other users or both. We require Location Data to securely and reliably set up and maintain your account and to provide our Services to you.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">4. Purpose and Use of Personal Information</h3>
            <p className="mb-4">
              We adopt the data minimization principle when collecting and using your data and ensure that your data will only be used in accordance with the stated purposes below.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide you with the Service including connecting you with other users within the App;</li>
              <li>To help us administer and maintain your account and User Profile on the App;</li>
              <li>To facilitate networking opportunities through the Service;</li>
              <li>To handle and process any payments for transactions carried out through the Service via third-party providers;</li>
              <li>To promote safety, integrity, and security on our platform.</li>
            </ul>
          </section>

          {/* Add more sections here based on the content from the document */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
