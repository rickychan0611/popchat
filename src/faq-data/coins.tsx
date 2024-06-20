import React from 'react';

const coins = [
  {
    question: "General Refund Rules",
    answer: (
      <div>
        <ol>
          <li>Transactions are non-refundable unless the host violates the rules.</li>
          <li>Refunds are only available if the complaint is made within 48 hours of the disputed event.</li>
          <li>Refund amounts cannot exceed the amount disputed.</li>
          <li>Refunds are only provided for services offered by our site and must comply with our rules.</li>
          <li>We cannot provide refunds for agreements or performances conducted outside our site.</li>
        </ol>
      </div>
    )
  },
  {
    question: "Refunds for 1on1 Chat",
    answer: (
      <div>
        <ol>
          <li>No refunds will be provided if the 1on1 chat exceeds 1 minute. If dissatisfied, please leave the chat immediately and provide a low rating with an explanation.</li>
          <li>Ensure you have an agreement with the host for specific services before starting the 1on1 chat. Otherwise, the host has the right to refuse additional requests.</li>
          <li>No refunds will be issued for technical issues on the user’s end.</li>
          <li>Refunds for tips can only be provided if there was a clear agreement between the host and the user.</li>
          <li>No refunds for paid content (e.g., host photos and videos) if the issue is not confirmed or occurred on the user’s end.</li>
        </ol>
      </div>
    )
  },
  {
    question: "How to Buy Coins",
    answer: (
      <div>
        <ol>
          <li>
            <strong>Payment Methods:</strong>
            <ul>
              <li>Available payment methods may vary by country/region and include:</li>
              <ul>
                <li>Credit/Debit/Prepaid Cards</li>
                <li>PayPal</li>
                <li>paysafecard</li>
                <li>Alipay/WeChat</li>
                <li>Gift Cards</li>
                <li>Bitcoin, Ethereum, and other cryptocurrencies</li>
              </ul>
              <li>We recommend using cryptocurrencies for payments, as we periodically offer discounts to users paying this way.</li>
            </ul>
          </li>
          <li><strong>Cost of Coins:</strong> 1 coin = 1 USD</li>
          <li><strong>Purchasing with Debit/Prepaid/Virtual Cards:</strong> Yes, you can purchase coins with these cards.</li>
          <li>
            <strong>Purchasing Without Credit/Debit Cards:</strong>
            <ul>
              <li>Yes, you can purchase coins even without a credit or debit card. We offer several local and international payment methods, such as:</li>
              <ul>
                <li>PayPal</li>
                <li>PaySafeCard</li>
                <li>Gift Cards</li>
                <li>Bitcoin and other cryptocurrencies</li>
              </ul>
              <li>Available payment methods may vary by country/region.</li>
            </ul>
          </li>
          <li><strong>Purchasing with Bank Wire Transfer:</strong> Yes, you can purchase coins using a bank wire transfer.</li>
        </ol>
      </div>
    )
  }
];

export default coins;
