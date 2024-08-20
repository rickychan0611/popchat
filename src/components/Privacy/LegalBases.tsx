import React from "react";

type Props = {};

const LegalBases = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">Legal Bases</h1>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Introduction</h3>
            <p className="mb-4">
              Under Data Protection laws, companies must have a legal basis to process data. However, you always have the right to request access to, rectification of, and erasure of your data. Please visit our <a href="#" className="text-blue-600 underline">FAQs</a> on how to exercise your rights, delete your data, or use the settings within the App.
            </p>
            <p className="mb-4">
              In order to enjoy using our Apps, you are required to enter into an enforceable contract with us. By doing so, you grant us permission to process data necessary to perform our contracts with you. We process data to provide our contractual services to you, which include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide, personalize, and improve our Apps and Services.</li>
              <li>To promote safety, integrity, and security.</li>
              <li>To communicate with you regarding App and Service-related issues.</li>
              <li>To transfer, transmit, store, or process your data outside the EEA.</li>
              <li>To provide you with a great, consistent, and seamless experience.</li>
            </ul>
            <p className="mt-4">
              For more details, please visit our <a href="#" className="text-blue-600 underline">Privacy Policy</a> and <a href="#" className="text-blue-600 underline">FAQs</a>.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Other Legal Bases</h3>
            <p className="mb-4">
              In certain instances, we rely on other legal bases for processing your data:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Legitimate Interests:</strong> We process data for our legitimate interests or the legitimate interests of a third party where these are not outweighed by your interests or fundamental rights and freedoms.</li>
              <li><strong>Your Consent:</strong> We rely on your consent for certain data processing activities such as using device settings for location, profile information, and camera access.</li>
              <li><strong>Compliance with a Legal Obligation:</strong> We process data when required by law.</li>
              <li><strong>Protection of Vital Interests:</strong> We process data to protect your life or physical integrity or that of others, particularly in situations involving harmful conduct or safety concerns.</li>
              <li><strong>Public Interest:</strong> We may process data when necessary for a task carried out in the public interest as laid down by law.</li>
            </ul>
            <p className="mt-4">
              You have the right to withdraw your consent at any time and to object to or seek restriction of such processing. For more details, please visit our <a href="#" className="text-blue-600 underline">FAQs</a>.
            </p>
          </section>

          {/* Add additional sections from the document following the same structure */}
        </div>
      </div>
    </div>
  );
};

export default LegalBases;
