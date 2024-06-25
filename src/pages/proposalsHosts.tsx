import { getLayout } from '@/layouts/DefaultLayout';
import React from 'react';

const ProposalsHosts = () => {
  return (
    <div className="bg-white w-full max-w-6xl mx-auto py-20 px-4 text-lg ">
      <h1 className='mb-8 mt-20 text-center'>The 6 Principles for Hosts</h1>
      <ol>
        <br /><li>Always treat your audience with genuine respect and prioritize their needs over merely profiting from them.
        </li>
        <br /><li>Opts for a natural look without heavy makeup.</li>
        <br /><li>Maintain patience throughout the service without showing any signs of impatience.</li>
        <br /><li>Ensure the service lasts for the full agreed duration, without ending it prematurely.</li>
        <br /><li>During casual interactions in the live room, avoid being too explicit.</li>
        <br /><li>Avoid pressuring users into continuous payments, but it's okay to suggest they return for your next
          session.
        </li>
      </ol>
    </div>
  );
}

ProposalsHosts.getLayout = getLayout
export default ProposalsHosts;
