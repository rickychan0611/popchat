import React from "react";

type Props = {};

const FAQPrivacyCenter = (props: Props) => {
  return (
    <div className="pt-[290px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">FAQ - Privacy Center</h1>

          <section className="mb-8">
            <h3 className="mb-4">Why do we need your personal information?</h3>
            <p className="mb-4">
              Safety and integrity are our number one priority, and this information is important for us to provide you with the connections and services available in our apps. The information we collect helps enhance the App's functionality and verify our Users to ensure the connections you make are authentic and safe.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">Why do we need your location?</h3>
            <p className="mb-4">
              While you use our App, your location is essential for us to provide you with secure and effective services and offer you a more personalized experience when making new connections.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">Be mindful of what you share with others</h3>
            <p className="mb-4">
              While using our App, you can share your profile interests, text messages, photos, screenshots, videos, music, and other communications in the App with other users. However, please be mindful of what you decide to share as we may not be able to remove it or make it unavailable to anyone you have shared it with.
            </p>
            <p className="mb-4">
              For your safety, do not share any personal information such as your home or work address, government identification, or detailed information about your routine with people you don't know.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">How to block or report a profile</h3>
            <p className="mb-4">
              We encourage everyone to follow our Community Guidelines and engage with one another respectfully. However, if you come across inappropriate content or behavior that violates our policies and guidelines, you can:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Report in-app</li>
              <li>Tap the report button &gt; choose the topic that best describes the abuse &gt; click submit</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">My account has been compromised</h3>
            <p className="mb-4">
              If you believe someone has signed in to your account or notice any suspicious activity such as messages you didn't send or content you haven't uploaded, here are some things you can do to protect your account.
            </p>
            <h4 className="font-bold mb-2">Facebook and Google login</h4>
            <p className="mb-4">
              If you believe someone has gained access with your Facebook or Google account, we recommend you update your Facebook and Google passwords immediately or visit 
              <a href="https://www.facebook.com/help/hacked">Facebook's Help Centre</a> or 
              <a href="https://support.google.com/accounts/answer/6294825?hl=en">Google's Account Help</a> for direct support.
            </p>
            <h4 className="font-bold mb-2">Contact Us</h4>
            <p className="mb-4">
              Contact us and describe your issue as detailed as possible so we can provide you with the support you need.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">Protect your Account</h3>
            <p className="mb-4">
              Never share your username and password with third parties. Pick a strong password and be cautious when connecting from shared or public devices. A strong password typically ranges between 8 to 16 characters in length. Randomness is critical in password strength. Remember, never include personal identifiable information in your password.
            </p>
            <p className="mb-4">
              Our Apps will never send you an email requesting your username and password information — if you receive an email asking for account information, report it as soon as possible.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">How does the platform process my interactions with other users?</h3>
            <p className="mb-4">
              Safety and trust are our number one priority, and we work hard to improve our technology and enforcement efforts to prevent and/or remove harmful content and behavior whenever we become aware of it.
            </p>
            <p className="mb-4">
              While we rely on automated technologies and human review to prevent abusive behavior on the platform, we won't be reviewing your private interactions with other users unless in very limited cases and when we have a very strong reason to do so.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">How do I contact the DPO?</h3>
            <p className="mb-4">
              To submit a request to the Data Protection Officer, you can contact us via email: <a href="mailto:support@popchat.live">support@popchat.live</a>
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">How can I delete my profile?</h3>
            <p className="mb-4">
              If you would like to delete your profile, you can do it within the App itself. You can click on Settings &gt; select the option "Delete Account."
            </p>
            <p className="mb-4">
              You also have the right to request for your data to be erased by submitting an email to the following address: <a href="mailto:support@popchat.live">support@popchat.live</a>
            </p>
          </section>

          <section className="mb-8">
            <h3 className="mb-4">How to stop receiving notifications</h3>
            <p className="mb-4">
              You can unsubscribe from a notification by following the instructions contained within the notification or by tapping:
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQPrivacyCenter;
