import React from "react";

type Props = {};

const SubmitReport = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">
            Submit a Report
          </h1>

          <h3>Reporting Potential Abusive Content</h3>
          <p>
            The best way to report potential abusive content on our apps is by
            using the Report feature near the content itself. Our teams work
            hard to review incoming reports and remove anything that violates
            our Community Standards. Below are some examples of how you can
            report content to us.
          </p>

          <h3>In-App Reporting</h3>
          <p>
            We've made reporting in the app easy and fast. Just click on the
            shield symbol when matching or on the profile card of the history
            tab. You can directly report content through your messages by
            clicking on the three dots or directly on the user's profile. A list
            of reasons why you're making the report will appear for you to
            select.
          </p>

          <ol>
            <li>Tap the report button (shield image)</li>
            <li>Choose the topic that best describes the abuse</li>
            <li>Follow the instructions</li>
            <li>Click submit</li>
          </ol>

          <div className="flex flex-row flex-wrap gap-4 justify-center items-center mt-10 mb-20">
            <img src="/report1.png" className="object-contain"/>
            <img src="/report2.png" className="object-contain"/>
            <img src="/report3.png" className="object-contain"/>
            <img src="/report4.png" className="object-contain"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitReport;
