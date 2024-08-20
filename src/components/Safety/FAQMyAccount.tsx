import React from "react";

type Props = {};

const FAQMyAccount = (props: Props) => {
  return (
    <div className="pt-[290px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">FAQ - My Account</h1>

          <section className="mb-8">
            <h3 className="mb-4">My Account</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">
                  My account was blocked for inappropriate behavior but I did not do anything forbidden. How can I unblock my account?
                </span>{" "}
                Please contact us by email and our safety team will revert as quickly as possible regarding the status of your account. We recommend all our users visit our Online Social Awareness page, read our Community Guidelines, and visit our Make a Report page to easily get in touch with us.
              </li>
              <li>
                <span className="font-bold">Is PopChat sharing my precise location with other PopChat users?</span> No, PopChat does not share the precise location of users; it only shares the country in which the user is based.
              </li>
              <li>
                <span className="font-bold">How do I delete my account?</span> Login to your account &gt; Open settings &gt; Delete Account.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQMyAccount;
