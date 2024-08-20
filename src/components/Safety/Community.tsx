import React from "react";

type Props = {};

const Community = (props: Props) => {
  return (
    <div className="pt-[240px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">
            Community Interaction Guidelines
          </h1>

          <section className="mb-8">
            <h3 className="mb-4">Introduction</h3>
            <p className="mb-4">
              At PopChat, our mission is to inspire millions of users worldwide
              to establish meaningful connections in a safe and secure
              environment free from the fear of judgment or safety concerns. We
              are committed to fostering a space that safeguards privacy and
              encourages open, genuine, and constructive communication.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">
              Guidelines for Community Engagement
            </h3>
            <p className="mb-4">
              These guidelines outline acceptable and unacceptable behaviors on
              our platform, promoting a trustworthy and safe environment where
              every individual can freely express themselves.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Protection of Minors</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Underage Restrictions:</span> Minors
                are strictly prohibited on our platforms. We utilize advanced
                detection technologies and manual reviews to enforce our age
                verification processes, ensuring no underage user accesses our
                services.
              </li>
              <li>
                <span className="font-bold">Safety Measures:</span> Our
                commitment to safety is unwavering, especially concerning minors
                and vulnerable groups. We actively prevent and remove content
                that could be harmful or dangerous.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Content Restrictions</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">
                  Violent and Discriminatory Content:
                </span>{" "}
                Any content inciting violence or promoting hatred based on race,
                nationality, religion, sexual orientation, gender identity, or
                disability is prohibited.
              </li>
              <li>
                <span className="font-bold">
                  Prohibited Groups and Behaviors:
                </span>{" "}
                Affiliations with hate groups, terrorist organizations, or any
                group that promotes violent behaviors are not allowed.
              </li>
              <li>
                <span className="font-bold">Adult Content:</span> We do not
                tolerate nudity, sexual activities, or sexually explicit
                language. This includes:
                <ul className="list-disc list-inside ml-6">
                  <li>Shirtless or suggestive images.</li>
                  <li>Any form of nudity or sexual acts.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Bullying and Harassment:</span> We
                enforce a zero-tolerance policy towards bullying and harassment.
                Any content aimed at intimidating or degrading others is not
                permissible.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Child Safety</h3>
            <p className="mb-4">
              Our platform enforces strict measures against content that
              exploits children or promotes inappropriate interactions with
              minors.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Mental Well-being</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Suicide and Self-Harm:</span>{" "}
                Content that glorifies or instructs self-harm or suicide is
                strictly forbidden. We encourage users to seek help and support
                each other in respectful and safe manners.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Prohibited Activities</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Illegal Behaviors:</span> Content
                promoting criminal activities, human exploitation, or the
                solicitation of sexual services is banned.
              </li>
              <li>
                <span className="font-bold">Regulated Goods:</span> Trading or
                promoting non-medical drugs, weapons, or endangered species is
                prohibited.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Privacy Protection</h3>
            <p className="mb-4">
              We safeguard personal and sensitive information. Sharing or
              soliciting such information without consent is against our rules.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Platform Integrity</h3>
            <p className="mb-4">
              We strive for authenticity and honesty in all interactions within
              our community. Misrepresentation, spamming, and deceptive
              practices undermine trust and are not allowed.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Community Reporting</h3>
            <p className="mb-4">
              To maintain community standards, we encourage reporting of any
              violations. Our dedicated links in the Safety Centre guide you on
              how to report inappropriate behavior or content effectively.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">
              Content and Communication Standards
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-bold">Account Authenticity:</span>{" "}
                Impersonating others or misusing identities is prohibited.
              </li>
              <li>
                <span className="font-bold">Appropriate Conduct:</span> We
                expect all members to conduct themselves respectfully and
                authentically, contributing positively to community
                interactions.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">Conclusion</h3>
            <p className="mb-4">
              At PopChat, every action and policy is directed towards creating a
              respectful, secure, and engaging community. Your cooperation helps
              us maintain these standards, ensuring a safe space for everyone.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Community;
