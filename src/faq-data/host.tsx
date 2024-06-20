import AIMeScore from '@/components/FAQ/AIMEScore';
import React from 'react';

const host = [
  {
    question: 'How do I register to become a host?',
    answer: <AIMeScore />
  },
  {
    question: "How can I unlink my host account from the studio?",
    answer: (
      <p>
        If your host account is already linked to a studio and you wish to delete your account or operate independently, you need to request the studio to unlink or delete your host account. The support team cannot unlink your account from the studio. The studio can perform this action through their account following this guide. If the studio does not agree to delete your account, you may be able to create a new independent account using a new email address. Once you successfully apply for a new account, your credentials will be rejected on the studio account. Please note that some studios may have a 6-month protection period. In this case, the studio will inform you and provide details about this special agreement. Note: If a studio is permanently banned, hosts can leave the studio. Refer <a href="link_here">here</a> to learn how to unlink your account from a blocked studio.
      </p>
    )
  },
  {
    question: "What is AIMeScore and how can it be improved?",
    answer: (
      <p>
        Your AIMeScore score increases your chances of being recommended. The AIMeScore is based on various factors including your earnings, the completeness of your profile and broadcast settings, etc.
        <ol>
          <li>Total earnings</li>
          <li>Number of likes</li>
          <li>Number of private message interactions</li>
          <li>Being online for 8 hours per day; no extra points for exceeding this</li>
          <li>Number of 1v1 sessions</li>
          <li>Penalties for violating platform rules decrease your score</li>
          <li>Match with user interests; the top three tags weigh 50%, 30%, and 20% respectively</li>
          <li>New user's first live stream</li>
          <li>Completeness of profile and settings</li>
          <li>Quality of the broadcast (a good internet connection and higher video resolution are very important)</li>
          <li>Microphone on during the broadcast</li>
          <li>Uploading background photos or videos</li>
          <li>Complete profile</li>
        </ol>
        Your earnings account for about 60-70% of the weight. Other factors account for 30-40%. The number of viewers does not affect the weight. If you adhere to all the above guidelines and persevere, your AIMeScore will improve over time. Taking leave will not incur any penalties, so you can enjoy vacations anytime. Remember, fans tend to follow hosts who broadcast regularly and on a consistent schedule.
      </p>
    )
  },
  {
    question: "What to do in case of rejected documents?",
    answer: (
      <p>
        The reason why your documents have been rejected will be shown in the message and your email. When filling in your personal information, please note that it must match your uploaded documents.
        <br /><br />
        The most common reasons why documents get rejected:
        <ul>
          <li>Bad-quality photo (document is not clear enough to be read)</li>
          <li>Documents are expired</li>
          <li>No birth date on ID</li>
          <li>No face on ID</li>
          <li>Digitally modified photos</li>
          <li>Only parts of the documents are visible</li>
          <li>Personal information is not correct</li>
          <li>You did not complete the verification process. Please make sure to go through all the steps.</li>
          <li>You already have another account on our platform.</li>
        </ul>
        Please log in to your account, read the reason why your documents were rejected, and re-upload them. Make sure that they will comply with the site rules this time to avoid any additional delays. We will review your account again within 24 hours after submission.
      </p>
    )
  }
];

export default host;
