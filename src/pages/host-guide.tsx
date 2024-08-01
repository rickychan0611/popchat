import { getLayout } from '@/layouts/DefaultLayout';
import Image from 'next/image';
import React from 'react';

const HostGuide = () => {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto py-20 px-4">
      <h1 className='my-8 text-center'>Host Guide</h1>
      <p className="text-gray-600">Updated: May 21, 2024</p>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How do I register to become a host?</h3>
          <p className="text-gray-700">
            After registering and completing identity verification, you can become a host. Hosts must be at least 18 years old and comply with local laws.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Does it cost anything?</h3>
          <p className="text-gray-700">
            Registration is free for both hosts and viewers.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What does it mean to be a live video host on the platform?</h3>
          <p className="text-gray-700">
            Being a live video host means chatting with users in live video chats and earning money. You can check out our live chats to see how other hosts operate.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Program Previews</h3>
          <p className="text-gray-700">
            You can post program previews to ensure users do not miss your shows.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How can I earn money on the platform?</h3>
          <p className="text-gray-700">
            As a host on our platform, there are various options to earn tokens, most of which are set by the hosts themselves. Below are some references:
          </p>

          <ul className="list-disc list-inside mt-4">
            <li className="mb-2">
              <strong>1. 1-on-1 Chat: Host-Set Pricing</strong><br />
              Recommended Package Rates:<br />
              10 minutes: $25, 15 minutes: $35, 20 minutes: $45, 30 minutes: $70, 45 minutes: $100, 60 minutes: $120<br />
              Extensions available for sessions over 60 minutes
            </li>
            <Image src="/host-1-chat.png" width={300} height={400} alt="1on1" className="object-contain" />
            <li className="mt-4">
              <strong>2. Private Shows: Host-Set Pricing</strong><br />
              For example: A 30-minute show: Ticket Price $30 each, Limit: 200 people
            </li>
            <Image src="/unlock.png" width={300} height={400} alt="show" className="object-contain" />
            <li className="mt-4">
              <strong>3. Exclusive Video/Photo Unlock: Host-Set Pricing</strong><br />
              Average Pricing: $15 per item
            </li>
            <Image src="/host-3-video.png" width={350} height={400} alt="show" className="object-contain" />
            <li className="mt-4">
              <strong>4. Custom Media: Agreed Pricing</strong><br />
              Recommended Range: $5 - $100 per item
            </li>
            <Image src="/host-4-media.png" width={250} height={400} alt="show" className="object-contain" />
            <li className="mt-4">
              <strong>5. Tips: User-Decided Customizable</strong><br />
              Range: $0.1 - $20
            </li>
            <Image src="/host-5-tips.png" width={300} height={400} alt="show" className="object-contain" />
            <li className="mt-4">
              <strong>6. AI Persona Chat: Host-Set Pricing</strong><br />
              Range: $1 - $20 per hour
            </li>
            <Image src="/host-6-ai.png" width={250} height={400} alt="show" className="object-contain" />
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Is there a way to improve my ranking on the platform? How can I increase my AIMeScore?</h3>
          <p className="text-gray-700">
            Please refer to "What is AIMeScore?"
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Am I allowed to use Telegram, Skype, WhatsApp, or other third-party software to interact with users?</h3>
          <p className="text-gray-700">
            No, it is explicitly forbidden to direct users away from our site to communicate elsewhere. Such activities are highly risky, and we accept no liability for any interactions that occur outside of our website. Hosts found engaging in this behavior will be banned immediately from the site without warning. This prohibition is in place to protect both your safety and that of the users.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Can I agree with members to use payment methods other than tokens?</h3>
          <p className="text-gray-700">
            No, it is absolutely prohibited to redirect users off the site and into other venues. Such arrangements are highly risky, and we bear no responsibility for any actions that occur outside of our website. Hosts who engage in such activities will be instantly banned from the site without warning. This rule is enforced to safeguard both your security and that of the users.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Chat</h3>
          <p className="text-gray-700">
            <strong>How do I ban or mute users who are not welcome?</strong><br />
            Hosts could select 'More' from the user list in the chat room, where they can access options to either 'Kick' or 'Block' users.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How do I reverse a ban or mute if I made an error?</h3>
          <p className="text-gray-700">
            To lift a ban or mute on a user, navigate to the 'Banned Users' list and press the corresponding button to perform the action.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Earnings</h3>
          <p className="text-gray-700">
            <strong>Is it possible to receive payments via PayPal or Western Union?</strong><br />
            No, payments are not processed through PayPal or Western Union, but you can utilize other payment methods that are listed on the website.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How can I modify my payment settings?</h3>
          <p className="text-gray-700">
            Navigate to Account -&gt; Withdrawal -&gt; Payment Methods.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What should I do if there is a payment missing?</h3>
          <p className="text-gray-700">
            Initially, verify the 'Payment Schedule.' Additionally, we recommend reaching out to the payment provider for any discrepancies in payments.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How are payments disbursed?</h3>
          <p className="text-gray-700">
            Ensure that your payment details are accurate to prevent any delays in receiving payments. Other than weekly withdrawals via bank transfer, you can withdraw daily using other methods, with a minimum transaction of $100.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Paxum (Instant transfer)</li>
            <li>CosmoPay (Instant transfer)</li>
            <li>Yousafe (Instant transfer)</li>
            <li>Cryptocurrency (Bitcoin, Ethereum, USDC, Tether) (Instant transfer)</li>
            <li>Euro Wire Transfer (SEPA): Within 2-10 business days</li>
            <li>ACH/Direct Deposit: Within 2-10 business days</li>
            <li>Local Bank Transfer/Directa24: Within 2-10 business days</li>
            <li>International Wire Transfer: Requires 2-10 business days</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How much money can I make as a host on the platform?</h3>
          <p className="text-gray-700">
            Your income largely depends on your skillset, talent, commitment, and hard work. Top performers on the platform can earn upwards of $20,000 per month. It is highly recommended to focus on broadcasting exclusively on our platform rather than spreading efforts across multiple sites, as this can dilute your focus, reduce your effectiveness, and result in dissatisfaction among viewers on each platform.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How much is one token worth?</h3>
          <p className="text-gray-700">
            One token equals one US dollar.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How often are payments made?</h3>
          <p className="text-gray-700">
            Payments are processed daily for online transactions. Bank and international wire transfers are processed weekly.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What should I do if I haven't received my wire transfer?</h3>
          <p className="text-gray-700">
            Wire transfers usually take anywhere from 3 days to 2 weeks to process. If you have not received your transfer within this timeframe, please verify your payment details and get in touch with your bank. If it has been over two weeks and you still have not received the funds, please notify us using our contact form so we can trace the transaction through our partners. We can only reissue a transfer if it is returned to us, so it is crucial to provide accurate payment information.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What is the minimum amount required for payments?</h3>
          <p className="text-gray-700">
            $100
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Is there protection for refunds?</h3>
          <p className="text-gray-700">
            You are completely protected in cases of refunds as these are typically unforeseen and unfortunate incidents. However, we retain the right to deduct tokens from your earnings under two circumstances:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Fraudulent activity: This includes situations where malicious users tip hosts excessively, or when a host is discovered to be cooperating with fraudulent users. Hosts are advised to report any suspicious activity in their rooms.</li>
            <li>User complaints regarding unsatisfactory performances: In these instances, we only return tokens to the user after thorough investigation.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">My Profile</h3>
          <p className="text-gray-700">
            <strong>Am I allowed to promote other companies or brands on this platform?</strong><br />
            Promoting other companies is strictly forbidden. Keep in mind that we are a trademarked company and promoting third parties without explicit legal (written) permission is not allowed.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Can I sell my own content on the platform?</h3>
          <p className="text-gray-700">
            Yes, you can create and sell photo and video albums priced between 1 and 100 tokens. There are no restrictions on the number of photos per album or the number of paid albums you can create. Income from album sales is immediately added to the model's account, just like any other tokens earned on the website.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Can I include links to my social media in my profile?</h3>
          <p className="text-gray-700">
            You are welcome to include your social media links in your profile. However, we recommend against sharing personal details such as your real name, phone number, or email address. Moreover, advertising other adult streaming services, sites offering alternative payment methods, fundraising sites that include links, text, logos, images, videos, or content sales websites is prohibited.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How can I make my platform profile stand out?</h3>
          <p className="text-gray-700">
            Enhance your personal page by creating an attractive preview photo. A high-quality photo draws more visitors. Models with elaborate profiles and numerous photos generally earn more than other hosts on our platform.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Why is it important to have a well-maintained photo and video gallery?</h3>
          <p className="text-gray-700">
            Maintaining a visually appealing gallery is essential for generating income.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Registration</h3>
          <p className="text-gray-700">
            <strong>I've completed my registration and submitted my documents. When will you approve my account?</strong><br />
            All documents are subject to an online review during the verification process. Should there be a need for a manual review, we will assess your documents within 24 hours.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Why were my documents rejected?</h3>
          <p className="text-gray-700">
            Please consult the instructions for acceptable documents.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Technical Issues</h3>
          <p className="text-gray-700">
            <strong>How can I start a live stream?</strong><br />
            Before you initiate your stream, make sure you are ready with:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>A reliable high-speed internet connection.</li>
            <li>All non-essential applications shut down, including Skype, web browsers, torrent clients, etc. This is vital because poor connectivity can lead to a decrease in viewers and negatively affect your AIMeScore.</li>
            <li>A browser that supports cookies and JavaScript (it is recommended to use the latest versions of Chrome, Firefox, or Safari).</li>
            <li>Either a webcam with an integrated microphone or a separate webcam and microphone setup.</li>
          </ul>
          <p className="text-gray-700">
            We also facilitate broadcasting via mobile devices, allowing you to stream and connect with your followers from anywhere. Ensure that you are using the most current versions of either Firefox or Chrome.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Camera Recommendations</h3>
          <p className="text-gray-700">
            You don’t need a professional camera to start streaming on our platform; a simple smartphone will suffice! However, keep in mind that higher quality video can draw in more viewers. Below are some live streaming cameras that we recommend for use on our platform:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Logitech StreamCam</li>
            <li>Logitech BRIO</li>
            <li>Logitech Rally</li>
            <li>Razer Kiyo Pro</li>
            <li>C922 Pro HD Stream Webcam</li>
            <li>C930s Pro HD Webcam</li>
            <li>Bcc 950</li>
            <li>BRIO 500</li>
            <li>Logitech 4K Pro Webcam</li>
            <li>Lovense Webcam</li>
          </ul>
          <p className="text-gray-700">
            If you are on a budget, consider these more affordable cameras:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Logitech 920c</li>
            <li>Logitech 930c</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">How to Clear Your Browser's Cookies and Cache?</h3>
          <p className="text-gray-700">
            To remove cookies and cache from your browser, please use the following guidelines: [Link to guidelines]
          </p>
          <p className="text-gray-700">
            We strongly advise clearing your browser’s cache and cookies before each live stream to help avoid any potential disruptions.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">What should I do if my webcam isn't functioning correctly?</h3>
          <p className="text-gray-700">
            Several issues might be causing the problem:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Lagging: Use a wired connection rather than Wi-Fi, which may not be stable enough for streaming. You might have too many unnecessary applications or browser tabs open, which could be overloading your processor. Shut down any applications and tabs that are not needed for your work. Flash accumulates many temporary files that can slow your browser. It's advisable to regularly clear your browser’s cache and cookies every week.</li>
            <li>Image is slow or blurry: This issue might be due to improper camera settings. Avoid making extensive adjustments to your camera settings.</li>
            <li>Pixelation and incorrect aspect ratio: This occurs if the resolution set in the splitter differs from the resolution you’ve chosen for your stream on the site. Always maintain consistent resolution settings.</li>
            <li>Blank camera screen: If your audience cannot see the webcam feed, halt the stream, pause for 2 minutes, refresh the page (hit F5 or FN + F5), and then resume streaming.</li>
            <li>Black camera screen: This might happen if no camera device is selected as the source on the website, or the wrong camera is chosen in the splitter. Confirm the correct video source is selected before you begin streaming and avoid selecting the camera that the splitter has chosen on the "Start Streaming" page.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">For a comprehensive understanding of the rules for hosts, please make sure to review the Host Rules, the 12 Strict Prohibitions and 6 Service Initiatives, along with the Terms of Use.</h3>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
          <p className="text-gray-700">
            This document serves as a complete guide to understanding how to become a host, as well as how to maximize your earnings and maintain a safe and professional profile on our platform. If you have any further questions or concerns, please do not hesitate to reach out to our support team for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}

HostGuide.getLayout = getLayout
export default HostGuide;
