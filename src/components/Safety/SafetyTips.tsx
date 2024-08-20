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

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Meeting people and making new friends is exciting, but we
                encourage you to be cautious when interacting with someone you
                don't know.
              </h2>
              <p className="mb-4">
                While you can't control what others do, there are a number of
                tips and tools designed to empower you to take control of your
                online experience.
              </p>

              <h3 className=" font-bold mb-2">Tips</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Always be yourself:</span> Don't
                  pretend to be someone you are not. Authenticity is vital for
                  establishing meaningful connections.
                </li>
                <li>
                  <span className="font-bold">
                    Connections should stay on PopChat:
                  </span>{" "}
                  Trust and safety are our number one priority. We recommend
                  that all your interactions with new connections remain in the
                  app while getting to know someone. Users with bad intentions
                  often attempt to move the conversation off-platform right
                  away.
                </li>
                <li>
                  <span className="font-bold">
                    Control your profile and personal information:
                  </span>{" "}
                  Never share your personal information, such as your home or
                  work address, government identification, or detailed
                  information about your routine with people you don't know. If
                  you choose to share these items with other PopChat users, we
                  may not be able to remove them or make them unavailable to
                  anyone you have shared them with.
                </li>
                <li>
                  <span className="font-bold">
                    Do not send money or share financial information:
                  </span>{" "}
                  Never send money, even if a person is claiming to be in an
                  emergency. Transactions such as wire transfers are impossible
                  to reverse. If another user asks you for money, report it to
                  us immediately.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="font-bold mb-2">How to Report</h3>
              <p className="mb-4">
                We encourage everyone to follow our Community Guidelines and
                engage with one another respectfully. However, if you come
                across inappropriate content or behavior that violates our
                policies and guidelines, you can:
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Tap the report button</li>
                <li>Choose the topic that best describes the abuse</li>
                <li>Follow the instructions</li>
                <li>Click submit</li>
              </ol>
            </section>

            <section className="mb-8">
              <h3 className=" font-bold mb-2">How to Block</h3>
              <p className="mb-4">
                You can permanently block a user at any time. This will prevent
                them from being able to contact you in any way.
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>Open the user's profile</li>
                <li>Tap the three dots on the right corner</li>
                <li>Tap "Block" and click confirm</li>
              </ol>
              <p className="mt-4">
                When you block another user, they won't be notified that you
                blocked them. They won't be able to view your profile or
                interact with you through direct messages.
              </p>
            </section>

            <section className="mb-8">
              <h3 className=" font-bold mb-2">Protect your Account</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Pick a strong password</span> and
                  be cautious when connecting from shared or public devices. A
                  strong password typically ranges between 8 to 16 characters in
                  length. Randomness is critical in password strength. Remember,
                  never include personal identifiable information in your
                  password.
                </li>
                <li>
                  <span className="font-bold">
                    PopChat will never send you an email requesting your
                    username and password information
                  </span>{" "}
                  — if you receive an email asking for account information,
                  report it as soon as possible.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className=" font-bold mb-2">Women's Safety Online</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  In addition to our Safety Tips, we advise that women take
                  extra precautions when using any online social app. While you
                  should feel empowered by PopChat as a social tool, you should
                  be cautious of how much information you share and proactively
                  avoid those who make you feel uncomfortable by blocking or
                  unfriending.
                </li>
                <li>
                  We have a zero-tolerance policy towards bullying and
                  harassment of any kind and any acts of intimidation or
                  behavior that disproportionately impact women.
                </li>
                <li>
                  In addition to our policies and detection technology, our
                  tools are designed to help women, and any user, control their
                  experience on our platform.
                </li>
                <li>
                  Examples of NGOs who are specialized in supporting women's
                  online safety:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Global</li>
                    <li>Europe1</li>
                    <li>Europe2</li>
                    <li>Europe3</li>
                    <li>South Asia</li>
                    <li>Latin America1</li>
                    <li>Latin America2</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className=" font-bold mb-2">
                Fear of video recording or sharing imagery without consent
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  If someone is making you uncomfortable or pressuring you into
                  providing intimate imagery, you can block them straightaway.
                  We do not accept this type of harassment on our platform. You
                  have the right to say no.
                </li>
                <li>
                  If you think someone has recorded you, shared, or states their
                  intention to share your intimate images without your consent,
                  report it to us immediately. Sharing of non-consensual
                  intimate imagery is unlawful in many places around the world.
                </li>
                <li>
                  What should I do if a user is threatening to share an image of
                  myself I already sent?
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>
                      Report it to our Trust and Safety Team here immediately
                    </li>
                    <li>Block the user</li>
                    <li>Report this to local law enforcement</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className=" font-bold mb-2">Mental Exhaustion</h3>
              <p>
                Being online a lot is fun, but it doesn't come without
                challenges. This section of our Safety Centre is designed to
                assist you in working through some of the critical challenges.
                We have gathered information and advice from industry experts to
                help equip you with a powerful toolset that will enable you to
                grow as a person.
              </p>
            </section>

            <section className="mb-8">
              <h3 className=" font-bold mb-2">
                How to start making meaningful connections
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Always be yourself.</span> At
                  PopChat, we strive to provide an inclusive environment where
                  everyone can enjoy a safe and respectful environment.
                  Authenticity and honesty are fundamental when establishing
                  meaningful connections.
                </li>
                <li>
                  Complete your profile and show off your personality! Focus on
                  what you love most and your passions. Positivity is key.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className=" font-bold mb-2">Disclaimer</h3>
              <p>
                These tips are not intended to be a comprehensive guide to the
                intended use of PopChat. For more details, please visit our
                detailed Community Guidelines.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafetyTips;
