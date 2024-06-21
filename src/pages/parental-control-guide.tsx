import { getLayout } from '@/layouts/DefaultLayout';
import React from 'react';

const ParentalControlGuide = () => {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto py-20 px-4">
      <h1 className='my-8 text-center'>AI Me Parental Control Guide</h1>

      <div className="space-y-8">
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">1. Who can legally access the website?</h3>
          <ul className="list-disc pl-6">
            <li>It is strictly prohibited for individuals who are under 18 years old (or the age of majority defined by their jurisdiction, if higher) to access content on AI Me.</li>
            <li>Users must be fully capable and legally competent to agree to and fulfill the terms, conditions, obligations, rules, and representations stated within our website.</li>
            <li>Users must access the website from a jurisdiction which does not forbid the receipt or viewing of sexually explicit content.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">2. How can a parent/legal guardian restrict access to AI Me?</h3>
          <p>Use “SafeSearch’’</p>
          <ul className="list-disc pl-6">
            <li><a href="https://www.google.com/safetycenter/tools/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Google SafeSearch</a></li>
            <li><a href="https://www.bing.com/account" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Bing SafeSearch</a></li>
          </ul>
          <br />
          <p>For Apple accounts and devices:</p>
          <ul className="list-disc pl-6">
            <li><a href="https://support.apple.com/en-us/HT201304" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Apple’s parental controls</a></li>
          </ul>
          <br />
          <p>For Android devices and Google Account:</p>
          <ul className="list-disc pl-6">
            <li><a href="https://families.google.com/familylink/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Google Family Link</a></li>
          </ul>
          <br />
          <p>For Windows computers and mobile phones:</p>
          <ul className="list-disc pl-6">
            <li><a href="https://account.microsoft.com/family/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Microsoft Family Safety</a></li>
          </ul>
          <br />
          <p>More parental monitoring software:</p>
          <ul className="list-disc pl-6">
            <li><a href="https://www.opendns.com/setupguide/#familyshield" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">OpenDNS FamilyShield</a></li>
            <li><a href="https://kidlogger.net/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">KidLogger</a></li>
            <li><a href="https://screentimelabs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Screen Time</a></li>
          </ul>
        </div>

        <p className="text-sm text-gray-600">Disclaimer: This guide and all accompanying methods and services are intended for informational purposes only. We assume no responsibility for any consequences that may arise from following the methods suggested within this guide.</p>
      </div>
    </div>
  );
}

ParentalControlGuide.getLayout = getLayout
export default ParentalControlGuide;
