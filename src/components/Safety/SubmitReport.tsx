import React from "react";

type Props = {};

const SubmitReport = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">Submit a Report</h1>

          <section className="mb-8">
            <h3 className="mb-4">In App Reporting</h3>
            <p className="mb-4">
              We've made reporting in the app easy and fast. Just click on the
              shield symbol when matching or on the profile card of the history
              tab. You can directly report content through your messages by
              clicking on the three dots or directly on the user's profile. A
              list of reasons why you're making the report will appear for you
              to select.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Tap the report button (shield image)</li>
              <li>Choose the topic that best describes the abuse</li>
              <li>Follow the instructions</li>
              <li>Click submit</li>
            </ol>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Examples of Reporting</h3>
            <p className="mb-4">
              The best way to report potential abusive content on our apps is by
              using the Report feature near the content itself. Our teams work
              hard to review incoming reports and remove anything that violates
              our Community Standards.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Image Specifications</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Image Format: JPEG</li>
              <li>Dimensions: 720 x 1600</li>
              <li>Dimensions: 422 x 939</li>
              <li>XResolution: 220</li>
              <li>YResolution: 220</li>
              <li>Dimensions: 432 x 961</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SubmitReport;
