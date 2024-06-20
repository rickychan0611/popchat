// AIMeScore.js

import React from 'react';

const AIMeScore = () => {
  return (
     
      <div className="space-y-4">
        <p>Your AIMeScore score increases your chances of being recommended on the platform. AIMeScore is calculated based on various factors:</p>
        
        <ul className="list-disc ml-8 space-y-2">
          <li>Total earnings</li>
          <li>Number of likes</li>
          <li>Number of private message interactions</li>
          <li>Being online for 8 hours per day (no extra points for exceeding this)</li>
          <li>Number of 1v1 sessions</li>
          <li>Penalties for violating platform rules decrease your score</li>
          <li>Match with user interests (top three tags weigh 50%, 30%, and 20% respectively)</li>
          <li>New user's first live stream</li>
          <li>Completeness of profile and settings</li>
          <li>Quality of the broadcast (good internet connection and higher video resolution)</li>
          <li>Microphone on during the broadcast</li>
          <li>Uploading background photos or videos</li>
          <li>Complete profile</li>
        </ul>
        
        <p className="mt-4">Your earnings account for about 60-70% of the weight, while other factors account for 30-40%. The number of viewers does not affect the weight. If you adhere to all the above guidelines and persevere, your AIMeScore will improve over time. Taking leave will not incur any penalties, so you can enjoy vacations anytime. Remember, fans tend to follow hosts who broadcast regularly and on a consistent schedule.</p>
      </div>
  );
}

export default AIMeScore;
