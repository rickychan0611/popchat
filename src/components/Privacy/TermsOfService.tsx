import React from "react";

type Props = {};

const TermsOfService = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Non-binding summary of ToS</h3>
            <p className="mb-4">
              This is an overview of some of the important rights and obligations as set out in the Articles below. It serves as a quick reference which means that the summary is not meant to be complete and that only the numbered Articles of these Terms of Service below are legally binding. Therefore, please read these Terms of Service thoroughly for a full understanding of your rights and obligations.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Your Rights</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>We provide you a license to install the App on your Device for your own personal use;</li>
              <li>You may use the App if you're 18 years or older and meet the conditions mentioned in Article 2.1;</li>
              <li>You may terminate your use of the Service and the App at any time by deleting your account;</li>
              <li>You may purchase Premium Services or paid Content. Your rights related to Premium Services or Paid Content are set out in Article 7.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Your Obligations</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>While using the App, you must comply with the Community Guidelines;</li>
              <li>You may not use the App for illegal purposes or for the purpose of harming the App or its users in any way;</li>
              <li>You may not mislead other users of the App;</li>
              <li>You are responsible for the Content that you share. Other users are responsible for the Content they share;</li>
              <li>You are responsible for reading our Privacy Policy and understanding its terms.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Introduction</h3>
            <p className="mb-4">
              Please read carefully the following provisions of these Terms and Conditions of Use (“Terms”) to ensure that you understand its contents before you use our software programs and related documentation (the “App”) and any of the services enabled by the App (the “Services”).
            </p>
            <p className="mb-4">
              Should you require any further information or technical support, please send an email to <a href="mailto:support@popchat.live" className="text-blue-600 underline">support@popchat.live</a>.
            </p>
          </section>

          {/* Add more sections here based on the content from the document */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
