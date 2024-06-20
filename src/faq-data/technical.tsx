import React from 'react';

const technical = [
  {
    question: "What kind of device should I use to watch streams?",
    answer: (
      <p>
        We recommend that you use your mobile phone to watch streams, although you can also use a PC and other devices.
      </p>
    )
  },
  {
    question: "I can't log in. What is the issue?",
    answer: (
      <p>
        Please re-check your password. You can restore your password <a href="https://example.com/forgot-password">here</a> using the “Forgot password” option on the log-in window.
      </p>
    )
  },
  {
    question: "How can I enable cookies?",
    answer: (
      <p>
        Please read this article: <a href="http://www.google.com/cookies.html">http://www.google.com/cookies.html</a>
      </p>
    )
  },
  {
    question: "I have no sound. How can I fix it?",
    answer: (
      <p>
        Please check the sound button or the system volume button. For Windows, it is located on the bottom right in the system tray. For Mac users, you can find it at System Preferences -&gt; Sound -&gt; Output Volume. If the issue persists and it's not on the model's side, please report your sound problem to us.
      </p>
    )
  },
  {
    question: "Identity Verification",
    answer: (
      <p>
        If you do not complete identity verification, you will not be able to withdraw funds. It is recommended that hosts complete identity verification early.
      </p>
    )
  }
];

export default technical;
