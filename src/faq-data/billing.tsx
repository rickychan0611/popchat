import React from 'react';

const billing = [
  {
    question: "What payment options are better for me?",
    answer: (
      <p>
        The following payment methods are available, which may vary depending on your country, we highly recommend you use Cryptocurrencies:
        <ul>
          <li>Credit/Debit/Prepaid Cards</li>
          <li>PayPal</li>
          <li>Paysafecard</li>
          <li>Skrill</li>
          <li>Gift Cards</li>
          <li>USDT, USDC, Bitcoin, ETH and other cryptocurrencies</li>
        </ul>
      </p>
    )
  },
  {
    question: "What to do if my transaction has been declined?",
    answer: (
      <p>
        If your transaction has been declined, don't worry, your account has not been charged. Please try another Payment Processor or Billing Method. Some issuing banks may block online transactions of unusual frequency or they can block international transactions for security reasons. Please contact your bank in order to get clarification on their card payment policy.
      </p>
    )
  },
  {
    question: "I purchased coins but they haven't shown up in my account yet, why?",
    answer: (
      <p>
        There can be a slight delay in the coins showing up. Don't panic and DO NOT buy again. The tokens will show up in your account shortly.
      </p>
    )
  },
  {
    question: "My purchase dates do not match those of the charges on my bank statement. Why is that?",
    answer: (
      <p>
        Sometimes certain banks can delay transactions until your account is totally cleared. That is why you will notice dates for some charges may be different from the dates of purchases.
      </p>
    )
  },
  {
    question: "Is my personal information safe?",
    answer: (
      <p>
        We keep our users secure and their private data safe. We use HTTPS to ensure our website and billing system are secure and meet all international online security standards and requirements.
      </p>
    )
  },
  {
    question: "What will appear on my credit card statement?",
    answer: (
      <p>
        To protect our customers' privacy, your transactions will appear under another name based on the purchasing method.
      </p>
    )
  }
];

export default billing;
