import { getLayout } from '@/layouts/DefaultLayout';
import React from 'react';

const ProposalsHosts = () => {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto py-20 px-4 text-lg">
      <h1 className='my-8'>The 6 Principles for Hosts</h1>
      <ul>
        <br /><li>1. Always treat your audience with genuine respect and prioritize their needs over merely profiting from them.
        </li>
        <br /><li>2. Opts for a natural look without heavy makeup.</li>
        <br /><li>3. Maintain patience throughout the service without showing any signs of impatience.</li>
        <br /><li>4. Ensure the service lasts for the full agreed duration, without ending it prematurely.</li>
        <br /><li>5. During casual interactions in the live room, avoid being too explicit.</li>
        <br /><li>6. Avoid pressuring users into continuous payments, but it's okay to suggest they return for your next
          session.
        </li>
      </ul>
    </div>
  );
}

ProposalsHosts.getLayout = getLayout
export default ProposalsHosts;
