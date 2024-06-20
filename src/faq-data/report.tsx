import React from 'react';

const report = [
  {
    question: "Someone sent me spam via Public Chat, what should I do?",
    answer: (
      <p>
        Please do not open any suspicious links! Take a screenshot of the spamming user and send it to our Support Team. We will take necessary actions.
      </p>
    )
  },
  {
    question: "Someone is harassing me, what should I do?",
    answer: (
      <p>
        Please take screenshots of the harassment and contact our Support Team. We will take necessary actions.
      </p>
    )
  },
  {
    question: "Reporting a Violation",
    answer: (
      <div>
        <h4>1. How to Report:</h4>
        <ul>
          <li>Users can report violations through our online form available on the website.</li>
          <li>For simple violations (e.g., inappropriate content on a personal profile), no evidence is required as our team can verify these internally.</li>
          <li>For other violations, reports should include specific details and relevant evidence (screenshots, links, descriptions).</li>
        </ul>
        <h4>2. Acknowledgement:</h4>
        <ul>
          <li>Upon submission, users will receive a confirmation message acknowledging receipt of the report.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Investigation Process",
    answer: (
      <div>
        <h4>1. Initial Assessment:</h4>
        <ul>
          <li>Our team will conduct a preliminary review within 24 hours to classify the urgency and nature of the report.</li>
          <li>Priority is given to reports involving illegal content, threats, and non-consensual material.</li>
        </ul>
        <h4>2. Thorough Investigation:</h4>
        <ul>
          <li>A dedicated team will investigate the reported content against our Terms of Use and relevant laws.</li>
          <li>This may include cross-referencing with other reports, content analysis, and host/user history reviews.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Decision and Action",
    answer: (
      <div>
        <h4>1. Outcome:</h4>
        <ul>
          <li>If a violation is confirmed, actions may include content removal, warnings, temporary suspensions, or permanent bans.</li>
          <li>Users will be notified of the decision and any actions taken within 7 business days.</li>
        </ul>
        <h4>2. Special Cases:</h4>
        <ul>
          <li>Reports involving illegal content will be resolved promptly, with law enforcement involvement if necessary.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Appeals Process",
    answer: (
      <div>
        <h4>1. Filing an Appeal:</h4>
        <ul>
          <li>Users and content owners can appeal decisions through the link provided in the decision notification email.</li>
          <li>Appeals must be filed within 30 days and should include detailed reasons and any new evidence.</li>
        </ul>
        <h4>2. Reviewing Appeals:</h4>
        <ul>
          <li>Appeals are reviewed by a senior team not involved in the initial decision.</li>
          <li>A comprehensive re-evaluation of the case is conducted.</li>
        </ul>
        <h4>3. Final Decision:</h4>
        <ul>
          <li>The outcome of the appeal will be communicated within 14 days.</li>
          <li>If successful, corrective actions will be taken. If not, an explanation will be provided.</li>
        </ul>
      </div>
    )
  },
  {
    question: "Escalation and External Recourse",
    answer: (
      <div>
        <h4>1. Out-of-Court Resolution:</h4>
        <ul>
          <li>If dissatisfied with the appeal outcome, users can seek resolution through out-of-court dispute resolution bodies certified under relevant Canadian laws.</li>
        </ul>
        <h4>2. Legal Recourse:</h4>
        <ul>
          <li>Users retain the right to pursue legal action if necessary.</li>
        </ul>
      </div>
    )
  }
];

export default report;
