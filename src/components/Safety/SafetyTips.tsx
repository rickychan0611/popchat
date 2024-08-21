import React from "react";

type Props = {};

const SafetyTips = (props: Props) => {
  return (
    <>
      {/* <div className="bg-white fixed top-[120px] flex flex-row justify-between items-center w-screen z-10">
        <div className="w-full max-w-[1010px] mx-auto pb-6 pt-20 relative ">
          <div className="flex flex-row gap-12 text-2xl font-bold">
            <div>Safety Tips</div>
            <div>Safety Tips</div>
          </div>
        </div>
      </div> */}

      <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
        <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
          <div className=" bg-white rounded-lg">
            <h1 className="text-3xl font-bold text-center mb-6">
              PopChat Safety Tips
            </h1>

            <p>
              Meeting people and making new friends is exciting, but we
              encourage you to be cautious when interacting with someone you
              don't know. While you can't control what others do, there are a
              number of tips and tools designed to empower you to take control
              of your online experience.
            </p>

            <h3>Tips</h3>
            <ol>
              <li>
                <strong>Always be yourself:</strong> Don't pretend to be someone
                you are not. Authenticity is vital for establishing meaningful
                connections.
              </li>
              <li>
                <strong>Connections should stay on PopChat:</strong> Trust and
                safety are our number one priority. We recommend that all your
                interactions with new connections remain in the app while
                getting to know someone. Users with bad intentions often attempt
                to move the conversation off-platform right away.
              </li>
              <li>
                <strong>Control your profile and personal information:</strong>{" "}
                Never share your personal information, such as your home or work
                address, government identification, or detailed information
                about your routine with people you don't know. If you choose to
                share these items with other PopChat users, we may not be able
                to remove them or make them unavailable to anyone you have
                shared them with.
              </li>
              <li>
                <strong>
                  Do not send money or share financial information:
                </strong>{" "}
                Never send money, even if a person is claiming to be in an
                emergency. Transactions such as wire transfers are impossible to
                reverse. If another user asks you for money, report it to us
                immediately.
              </li>
            </ol>

            <h3>How to Report</h3>
            <p>
              We encourage everyone to follow our Community Guidelines and
              engage with one another respectfully. However, if you come across
              inappropriate content or behavior that violates our policies and
              guidelines, you can:
            </p>
            <p>
              Tap the report button &gt; choose the topic that best describes
              the abuse &gt; follow the instructions &gt; click submit
            </p>

            <h3>How to Block</h3>
            <p>
              You can permanently block a user at any time. This will prevent
              them from being able to contact you in any way.
            </p>
            <p>To block a user:</p>
            <ol>
              <li>Open the user's profile</li>
              <li>Tap the three dots on the right corner</li>
              <li>Tap "Block" and click confirm</li>
            </ol>
            <h3>
              When you block another user, they won't be notified that you
              blocked them. They won't be able to view your profile or interact
              with you through direct messages.
            </h3>

            <h3>Protect Your Account</h3>
            <ol>
              <li>
                Pick a strong password and be cautious when
                connecting from shared or public devices. A strong password
                typically ranges between 8 to 16 characters in length.
                Randomness is critical in password strength. Remember, never
                include personal identifiable information in your password.
              </li>
              <h3>Send a report:</h3> 
              <li>
                PopChat will never send you an
                email requesting your username and password information—if you
                receive an email asking for account information, report it as
                soon as possible.
              </li>
            </ol>

            <h3>Women's Safety Online</h3>
            <ol>
              <li>
                In addition to our Safety Tips, we advise that women take extra
                precautions when using any online social app. While you should
                feel empowered by PopChat as a social tool, you should be
                cautious of how much information you share and proactively avoid
                those who make you feel uncomfortable by blocking or
                unfriending.
              </li>
              <li>
                We have a zero-tolerance policy towards bullying and harassment
                of any kind and any acts of intimidation or behavior that
                disproportionately impact women.
              </li>
              <li>
                In addition to our policies and detection technology, our tools
                are designed to help women, and any user, control their
                experience on our platform.
              </li>
              <li>
                Examples of NGOs who are specialized in supporting women's
                online safety:
                <ul>
                  <li>Global</li>
                  <li>Europe1</li>
                  <li>Europe2</li>
                  <li>Europe3</li>
                  <li>South Asia</li>
                  <li>Latin America1</li>
                  <li>Latin America2</li>
                </ul>
              </li>
            </ol>

            <h3>Fear of Video Recording or Sharing Imagery Without Consent</h3>
            <ol>
              <li>
                If someone is making you uncomfortable or pressuring you into
                providing intimate imagery, you can block them straightaway. We
                do not accept this type of harassment on our platform. You have
                the right to say no.
              </li>
              <li>
                If you think someone has recorded you, shared, or states their
                intention to share your intimate images without your consent,
                report it to us immediately. Sharing of non-consensual intimate
                imagery is unlawful in many places around the world.
              </li>
              <li> 
                  What should I do if a user is threatening to share an image of
                  myself I already sent?
                <ul>
                  <li>
                    Report it to our Trust and Safety Team immediately
                  </li>
                  <li>Block the user</li>
                  <li>Report this to local law enforcement</li>
                </ul>
              </li>
            </ol>

            <h3>We Would Love to Hear From You!</h3>
            <p>
              Our Safety team enjoys interacting with all of you, and any
              feedback, suggestion, or concern is welcome. We are a friendly
              team, and you can contact us directly via the email{" "}
              <a href="mailto:support@popchat.live">support@popchat.live</a>
            </p>

            <h3>Mental Exhaustion</h3>
            <p>
              Being online a lot is fun, but it doesn't come without challenges.
              This section of our Safety Centre is designed to assist you in
              working through some of the critical challenges. We have gathered
              information and advice from industry experts to help equip you
              with a powerful toolset that will enable you to grow as a person.
            </p>

            <h3>How to Start Making Meaningful Connections</h3>
            <ol>
              <li>
                <strong>Always be yourself:</strong> At PopChat, we strive to
                provide an inclusive environment where everyone can enjoy a safe
                and respectful environment. Authenticity and honesty are
                fundamental when establishing meaningful connections.
              </li>
              <li>
                <strong>
                  Complete your profile and show off your personality!
                </strong>{" "}
                Focus on what you love most and your passions. Positivity is
                key.
              </li>
            </ol>

            <h3>Disclaimer</h3>
            <p className="mb-20">
              These tips are not intended to be a comprehensive guide to the
              intended use of PopChat. For more details, please visit our
              detailed Community Guidelines.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafetyTips;
