import React from "react";

type Props = {};

const FAQSafety = (props: Props) => {
  return (
    <div className="pt-[290px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">FAQ - Safety & Privacy</h1>

          <section className="mb-8">
            <h3 className="mb-4">Safety & Privacy</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">What if other users make me uncomfortable?</span> You can block the user, and if in doubt, contact us and our safety team will revert as quickly as possible. Hateful and harmful content, nudity, and sexually explicit behaviors are not tolerated on our app during the matching phase or when talking to streamers. We recommend all of our users visit our Online Social Awareness page, read our Community Guidelines, and visit our Make a Report page to easily get in touch with us.
              </li>
              <li>
                <span className="font-bold">I was exposed to inappropriate content while using the app and would like to report the user.</span> Immediately contact us by email and our safety team will revert as quickly as possible. Hateful and harmful content, nudity, and sexually explicit behaviors are not tolerated on our app during the matching phase or when talking to streamers. We recommend all of our users visit our Online Social Awareness page, read our Community Guidelines, and visit our Make a Report page to easily get in touch with us.
              </li>
              <li>
                <span className="font-bold">How do I report a fake user or scam?</span> Immediately contact us by email and our safety team will revert as quickly as possible. We recommend all of our users visit our awareness section to read our guidelines and visit our help section to easily get in touch with us.
              </li>
              <li>
                <span className="font-bold">How do I block a user?</span> You can block users easily in the PopChat app. Please refer to our safety tools, which detail how to block another user and manage your blacklist.
              </li>
              <li>
                <span className="font-bold">Can I share my contact details with other users on PopChat?</span> We recommend that you keep conversations on the PopChat platform while you’re getting to know someone. Users with bad intentions often try to move the conversation to text messaging apps, email, or phone right away.
              </li>
              <li>
                <span className="font-bold">Can I share private information on PopChat?</span> Never share personal information such as your social security number, home or work address, or details about your daily routine with people you don’t know.
              </li>
              <li>
                <span className="font-bold">Can I share financial information on PopChat?</span> Never share information that could be used to access your financial accounts. If another user asks you for money, report it to us immediately.
              </li>
              <li>
                <span className="font-bold">Can I send money to other users on PopChat?</span> Never send money, especially over wire transfer, even if the person claims to be in an emergency. Wiring money is like sending cash — it’s nearly impossible to reverse the transaction or trace where the money went.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQSafety;
