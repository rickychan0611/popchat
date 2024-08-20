import React from "react";

type Props = {};

const FAQGeneral = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">FAQ - General</h1>

          <section className="mb-8">
            <h3 className="mb-4">General Questions</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">
                  Can I join PopChat if I am under 18 years old?
                </span>{" "}
                No, this platform is strictly for people over 18. If you come
                across a user who might be below 18, immediately contact us or
                report them in the app. Please visit our community guidelines
                for more information on our age policy.
              </li>
              <li>
                <span className="font-bold">Is PopChat free to use?</span> It is
                free to download and start matching. However, there are extra
                services that are not free that you can access by buying PopChat
                coins.
              </li>
              <li>
                <span className="font-bold">
                  I haven't used PopChat before – why did I receive an email
                  from you?
                </span>{" "}
                Most likely someone has tried to sign up for a PopChat account
                using your email address by mistake. To unsubscribe from our
                emailing service:
                <ol className="list-decimal list-inside ml-6">
                  <li>Open any email sent by PopChat.</li>
                  <li>
                    Move to the bottom of the email and click the Unsubscribe
                    button.
                  </li>
                </ol>
                Please be advised that by clicking the Unsubscribe button you
                will no longer receive any email services provided by PopChat.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQGeneral;
