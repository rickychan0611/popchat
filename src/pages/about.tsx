import { getLayout } from "@/layouts/DefaultLayout";
import React from "react";

const About = () => {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto py-20 px-4">
      <h1 className="my-8 text-center">About</h1>

      <h3>Overview:</h3>
      <p>
        AI Me is an online platform dedicated to providing one-on-one private
        live streaming experiences. We offer a unique streaming service model
        that creates a space for users to freely express themselves and engage
        in meaningful interactions. Our platform features include one-on-one
        live, private show, exclusive content unlock etc.
      </p>
      <br />

      <h3>Features:</h3>
      <ul>
        <li>
          <b>One-on-One Live: </b> Users can pay for one-on-one live streaming
          sessions with hosts, offering a highly personalized and intimate
          interaction. Whether it's sharing personal thoughts, exploring
          interests, or learning new skills, our hosts provide exclusive
          companionship and guidance.
        </li>
        <li>
          <b>Private Show: </b> We also offer live performances where multiple
          viewers can buy tickets to watch exclusive shows by hosts. These
          performances range from music and dance to various interactive
          programs, ensuring every viewer enjoys a collective experience of joy.
        </li>
        <li>
          <b>Fan Interaction: </b> AI Me values the direct and stable connection
          between hosts and their fans. The platform encourages hosts to build
          and maintain their fanbase through private rooms and exclusive
          content, fostering deeper connections.
        </li>
        <li>
          <b>Exclusive Content: </b> Hosts can create and distribute their
          exclusive content to their fans, ensuring that fans receive unique or
          customized material.
        </li>
      </ul>
      <br />

      <h3>Our Commitment: </h3>
      <p>
        AI Me is committed to providing a safe, mature, and respectful
        environment for all users. Our platform strictly adheres to legal
        regulations, ensuring that all participants are 18 +. We respect and
        protect user privacy, striving to create a stress-free and respectful
        space for interactions.
      </p>
      <br />

      <h3>Future Outlook: </h3>
      <p>
        As an emerging live streaming platform, AI Me is dedicated to continuous
        innovation and improvement, aiming to become a leading provider of
        one-on-one live streaming services in the industry. We look forward to
        continually striving to make AI Me the preferred platform for connecting
        hosts and viewers.
      </p>
      <br />
    </div>
  );
};

About.getLayout = getLayout;
export default About;
