import React from "react";

type Props = {};

const LegalBases = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">Legal Bases</h1>

          <h2>Introduction</h2>
          <p>
            Under Data Protection laws companies must have a legal basis to
            process data. However, you always have the right to request access
            to, rectification of, and erasure of your data. Please visit our
            FAQs on how to exercise your rights, delete your data or use the
            settings within the App.
          </p>
          <p>
            In order to enjoy using our Apps, you are required to enter into an
            enforceable contract (sometimes referred to as our Terms of Use or
            Terms of Service) with us. In doing so, you grant us permission to
            process data as is necessary to perform our contracts with you.
            (“the Terms”). Please see section 3 in our Terms for a description
            of the contractual services for which this data processing is
            necessary. To summarize: We process data to provide our contractual
            services to you, which include:
          </p>
          <ul>
            <li>To provide, personalize, and improve our Apps and Services.</li>
            <li>To promote safety, integrity, and security.</li>
            <li>
              To communicate with you, for example, on App and Services related
              issues.
            </li>
            <li>
              To transfer, transmit, store, or process your data outside the
              EEA.
            </li>
            <li>
              To provide you with a great, consistent, and seamless experience.
            </li>
          </ul>
          <p>For more details, please visit our Privacy Policy and FAQs.</p>

          <h3>
            In certain instances, we rely upon other legal bases when processing
            your data, for example:
          </h3>
          <ul>
            <li>
              <h3>
                Our legitimate interests or the legitimate interests of a third
                party, where those are not outweighed by your interests or
                fundamental rights and freedoms:
              </h3>
              <ul>
                <li>Provide, personalize, and improve our Apps and Services</li>
                <li>
                  Promote safety, integrity and security, and The legitimate
                </li>
                <li>
                  Provide non-marketing communications for App, Services or
                  customer services related issues, such as responding to
                  content or policy breaches.
                </li>
              </ul>
            </li>
          </ul>

          <h3>The legitimate interests we rely on for this processing are:</h3>
          <ul>
            <li>
              To create, provide, support and maintain innovative products and
              features that enable people to express themselves, communicate,
              discover, connect and engage with other users of our Apps and
              Services.
            </li>
            <li>
              To secure our Apps and Services, to verify accounts and activity,
              combat harmful conduct, detect and prevent other bad experiences,
              keep our Apps and Services free of harmful or inappropriate
              content, and investigate suspicious activity or violations of our
              Terms or policies; and to prevent exploitation or other harms to
              which individuals may be particularly vulnerable.
            </li>
          </ul>
          <ul>
            <li>
              <h3>Your consent:</h3>
            </li>
            <ul>
              <li>
                For collecting information, you allow and enable us to receive
                through the device-based settings some information (such as
                access to your GPS location, profile information, camera or
                photos), so we can provide the Apps and Services described when
                you enable the settings.
              </li>
              <li>
                For sharing and processing data that personally identifies you
                (information such as your name, alias, interest, profile,
                picture, date of birth or email address, that by itself can be
                used to contact you or identifies who you are) such as when you
                direct us to share your contact information, for example with
                other users of the App and Services or payment providers and
                where you have personalized your content.
              </li>
              <li>
                For using facial recognition technology for security purposes.
              </li>
              <li>
                For using data that other partners provide us (for example your
                Facebook or Google log in data and profile data) so we can
                personalize your experience on our Apps, Services and websites,
                and across your devices.
              </li>
            </ul>
          </ul>
          <h3>
            When we process data which you provide to us and which is based on
            your consent, you have the right to withdraw your consent at any
            time. To exercise your rights, visit the FAQs.
          </h3>

          <ul>
            <li>
              For providing measurement, analytics, and other business services
              where we are processing data as a controller.
            </li>
          </ul>
          <h3>The legitimate interests we rely on for this processing are:</h3>
          <ul>
            <li>
              To provide accurate and reliable reporting to our partners, to
              ensure accurate pricing and statistics and help us understand how
              to improve our Apps and Services.
            </li>
            <li>For providing marketing communications to you.</li>
          </ul>

          <h3>The legitimate interests we rely on for this processing are:</h3>
          <ul>
            <li>
              To promote our Apps and Services and issue our direct marketing
              (when consent is provided by you).
            </li>
            <li>
              <h3>
                Share information with others including law enforcement and to
                respond to legal requests. See our Privacy Policy and FAQs for
                more detail.
              </h3>
            </li>
          </ul>

          <h3>The legitimate interests we rely on for this processing are:</h3>
          <ul>
            <li>
              To prevent and address fraud, unauthorized use of our Apps and
              Services, violations of our Terms and policies, or other harmful
              or illegal activity; to protect ourselves (including our rights,
              property or products), our users or others, including as part of
              investigations or regulatory inquiries; or to prevent death or
              imminent bodily harm.
            </li>
          </ul>
          <h3>
            You have the right to object to, and seek restriction of, such
            processing; to exercise your rights.
          </h3>

          <ul>
            <li>Compliance with a legal obligation:</li>
            <ul>
              <li>
                For processing data when the law requires it, including, for
                example, if there is a valid legal request for certain data.
              </li>
            </ul>
          </ul>

          <ul>
            <li>
              Protection of your vital interests or those of another person:
            </li>
            <ul>
              <li>
                The vital interests we rely on for this processing include
                protection of your life or physical integrity or that of others,
                and we rely on it to combat harmful conduct and promote safety
                and security, for example, when we are investigating reports of
                harmful conduct or when someone needs help.
              </li>
            </ul>
          </ul>

          <ul>
            <li>Tasks carried out in the public interest:</li>
            <ul>
              <li>
                For undertaking research where this is necessary in the public
                interest as laid down by law to which we are subject.
              </li>
            </ul>
          </ul>
          <h3 className="mb-20">
            When we process your data as necessary for a task carried out in the
            public interest, you have the right to object to, and seek
            restriction on our processing.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default LegalBases;
