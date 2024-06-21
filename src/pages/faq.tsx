import billing from '@/faq-data/billing';
import coins from '@/faq-data/coins';
import { general } from '@/faq-data/general';
import host from '@/faq-data/host';
import report from '@/faq-data/report';
import technical from '@/faq-data/technical';
import { getLayout } from '@/layouts/DefaultLayout';
import React, { useState } from 'react';

const FAQPage = () => {
  const [generalFaqs, setGeneralFaqs] = useState<any>(general);
  const [hostFaqs, setHostFaqs] = useState<any>(host);
  const [billingFaqs, setBillingFaqs] = useState<any>(billing);
  const [coinsFaqs, setCoinsFaqs] = useState<any>(coins);
  const [reportFaqs, setReportFaqs] = useState<any>(report);
  const [technicalFaqs, setTechnicalFaqs] = useState<any>(technical);

  const toggTechnical = (index: number) => {
    setTechnicalFaqs(technicalFaqs.map((faq: any, i: number) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };
  const toggleReport = (index: number) => {
    setReportFaqs(reportFaqs.map((faq: any, i: number) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };
  const toggleCoins = (index: number) => {
    setCoinsFaqs(coinsFaqs.map((faq: any, i: number) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  const toggleHost = (index: number) => {
    setHostFaqs(hostFaqs.map((faq: any, i: number) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  const toggleFAQ = (index: number) => {
    setGeneralFaqs(generalFaqs.map((faq: any, i: number) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  const toggleBilling = (index: number) => {
    setBillingFaqs(billingFaqs.map((faq: any, i: number) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  };

  return (
    <div className="bg-white w-full max-w-6xl mx-auto py-20 px-4">
      <h1 className='my-8 text-center'>Frequently Asked Questions</h1>

      <h2 className='my-8 text-3xl'>General Questions</h2>
      <div className="space-y-4">
        {generalFaqs.map((faq: any, index: number) => (
          <div key={index} className="border rounded p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg className={`w-6 h-6 ${faq.open ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {faq.open && (
              <p className="mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className='my-8 text-3xl'>Host Questions</h2>
      <div className="space-y-4">
        {hostFaqs.map((faq: any, index: number) => (
          <div key={index} className="border rounded p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleHost(index)}>
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg className={`w-6 h-6 ${faq.open ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {faq.open && (
              <p className="mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className='my-8 text-3xl'>Technical Questions</h2>
      <div className="space-y-4">
        {technical.map((faq: any, index: number) => (
          <div key={index} className="border rounded p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggTechnical(index)}>
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg className={`w-6 h-6 ${faq.open ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {faq.open && (
              <p className="mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className='my-8 text-3xl'>Coins Questions</h2>
      <div className="space-y-4">
        {coins.map((faq: any, index: number) => (
          <div key={index} className="border rounded p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleCoins(index)}>
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg className={`w-6 h-6 ${faq.open ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {faq.open && (
              <p className="mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <h2 className='my-8 text-3xl mt-12'>Billing Questions</h2>
      <div className="space-y-4">
        {billingFaqs.map((faq: any, index: number) => (
          <div key={index} className="border rounded p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleBilling(index)}>
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg className={`w-6 h-6 ${faq.open ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {faq.open && (
              <p className="mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <h2 className='mb-8 text-3xl mt-12'>Report and Complaint</h2>
      <div className="space-y-4">
        {report.map((faq: any, index: number) => (
          <div key={index} className="border rounded p-4">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleReport(index)}>
              <h2 className="text-lg font-semibold">{faq.question}</h2>
              <svg className={`w-6 h-6 ${faq.open ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {faq.open && (
              <p className="mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

FAQPage.getLayout = getLayout
export default FAQPage;
