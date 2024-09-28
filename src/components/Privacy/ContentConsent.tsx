import React from "react";

type Props = {};

const ContentConsent = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins] mb-20">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">
            Content Consent Agreement
          </h1>

          <p>
            By uploading content to PopChat, I hereby acknowledge and agree to
            the following terms:
          </p>

          <ul>
            <li>
              I grant PopChat the right to use, display, and publicly distribute
              the images, videos, and likenesses that I upload.
            </li>
            <li>
              I confirm that all content I upload complies with PopChat’s
              Community Guidelines and Terms of Service.
            </li>
            <li>
              I understand that PopChat will pre-screen all uploaded content
              before publication to ensure it meets legal requirements and
              platform standards. I agree to wait for the review process, which
              may take a few days during busy periods.
            </li>
            <li>
              I agree to upload all necessary identity verification materials as
              required by the platform, including but not limited to a video of
              myself holding my ID.
            </li>
            <li>
              I agree to participate in and comply with PopChat’s ongoing
              compliance training.
            </li>
            <li>
              I confirm that I have obtained and will keep records of written
              consent from all individuals depicted in the content I upload,
              including consent for the following:
              <ul>
                <li>Permission to appear in the content;</li>
                <li>
                  Permission to publicly distribute the content and upload it to
                  PopChat;
                </li>
                <li>
                  If the content is available for download by other users,
                  consent to allow the content to be downloaded.
                </li>
              </ul>
            </li>
            <li>
              I confirm that all individuals depicted in the content are over 18
              years of age, and I am responsible for verifying their identity
              and age and providing supporting documentation upon request.
            </li>
            <li>
              I understand that if my content is rejected, I will receive a
              system notification and will be responsible for resolving any
              compliance issues.
            </li>
            <li>
              I agree not to upload any content that is illegal or violates
              PopChat’s standards.
            </li>
          </ul>

          <p>
            By proceeding, I confirm that I have read, understood, and agreed to
            these terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentConsent;
