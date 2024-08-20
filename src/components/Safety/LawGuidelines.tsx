import React from "react";

type Props = {};

const LawGuidelines = (props: Props) => {
  return (
    <div className="pt-[290px] bg-white min-h-screen font-[poppins]">
      <div className="w-screen min-w-[800px] max-w-[1000px] mx-auto relative overflow-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center mb-6">
            Law Enforcement and Regulatory Enforcement Request for Information Processing Guidelines
          </h1>

          <section className="mb-8">
            <p className="mb-4">
              The PopChat team (PopChat) appreciates the work law enforcement and regulatory agencies do to keep people safe around the world. This document describes procedures that law enforcement and/or regulatory authorities (domestic and international) should follow to request records or information from PopChat (its related entities, affiliates, and/or contractors).
            </p>
            <p className="mb-4">
              All Requests for Information ("RFI") submitted by Law Enforcement ("LE") or Regulatory Enforcement ("RE") agencies are handled and managed confidentially.
            </p>
            <p className="mb-4">
              These guidelines were updated in August 2024 and denote the information necessary to deliver and process any/all LE and RE Requests for Information RFI.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">1. Service of RFI:</h3>
            <p className="mb-4">
              All Law Enforcement and Regulator RFI should be sent to:
            </p>
            <h4 className="font-bold mb-2">1.1 E-mail for Service of RFI</h4>
            <p className="mb-4">
              All Law Enforcement/Regulator RFIs must be sent to e-mail: support@popchat.live
            </p>
            <h4 className="font-bold mb-2">1.2 Types of RFI</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-bold">Legal Records Request:</span> For requests pursuant to a formal compulsory legal process issued under country/national law, we will provide records as required by law. Response times vary depending on case complexity and types of records requested.</li>
              <li><span className="font-bold">Preservation of Records Request:</span> For requests that identify an account by User/Account Holder Username, mobile phone, or email address, we will preserve then-existing account records for 90 days pending service of formal legal process by the requesting law enforcement or regulatory agency/entity.</li>
              <li><span className="font-bold">Emergency Records Request:</span> Emergency requests must be made using the attached Emergency Request for Information (ERFI) Form and will only receive a response if the requestor demonstrates that they believe that serious bodily harm or death of a person may occur without the records requested in the ERFI.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">2. RFI Request Requirements</h3>
            <p className="mb-4">
              All RFI must include the following information and be accompanied by a lawful supporting document for efficient processing:
            </p>
            <h4 className="font-bold mb-2">2.1 Law Enforcement or Regulatory Agency Information</h4>
            <p className="mb-4">The following agent/regulator information is required for each RFI:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Requesting Agency Name</li>
              <li>Requesting Agency Address</li>
              <li>Requesting Agency Jurisdiction</li>
              <li>Requesting Agent Name</li>
              <li>Requesting Agent Mailing Address/Authorized E-mail Address</li>
              <li>Requested RFI Completion Date</li>
            </ul>
            <h4 className="font-bold mb-2">2.2 Supporting Documents</h4>
            <p className="mb-4">Each RFI must be supported with a supporting legal document(s):</p>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="font-bold">Subpoena:</span> A subpoena or witness summons is a writ issued by a government agency, most often a court, to compel testimony by a witness or production of evidence under a penalty for failure.</li>
              <li><span className="font-bold">Search Warrant:</span> A search warrant is a court order that a magistrate or judge issues to authorize law enforcement officers to conduct a search of a person, location, or vehicle for evidence of a crime and to confiscate any evidence they find. In most countries, a search warrant cannot be issued in aid of civil process.</li>
              <li><span className="font-bold">Court Order:</span> A court order is an official proclamation by a judge (or panel of judges) that defines the legal relationships between the parties to a hearing, a trial, an appeal, or other court proceedings. Such ruling requires or authorizes the carrying out of certain steps by one or more parties to a case. A court order must be signed by a judge; some jurisdictions may also require it to be notarized.</li>
              <li><span className="font-bold">National Security Letter:</span> Is an administrative subpoena issued by the United States government to gather information for national security purposes. NSLs do not require prior approval from a judge.</li>
              <li><span className="font-bold">Preservation Letter:</span> A preservation letter is a written request from a law enforcement or regulatory agency, a law firm, or individual that certain documents, electronically stored information, and/or data (“e-data”) be preserved in anticipation of future criminal proceedings or litigation. In criminal or civil matters, proceedings may take place months to years following a substantive event.</li>
            </ul>
            <p className="mt-4">Note: PopChat recognizes other forms of legal documents that may be unique and ascribed to by jurisdictions. PopChat will internally review and verify each request and work closely with each LE/RE to facilitate lawful requests timely.</p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">2.3 LE Request/Investigative Details</h3>
            <p className="mb-4">
              We review each RFI for records individually and prioritize requests based upon case circumstances and other factors which may not always be obvious from the formal request. Please provide any additional details about the matter not obvious or stated in other components of the request so that we can ensure proper handling of the RFI. For example, if the RFI is a follow-up to a previous request.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">2.4 Types of Records and/or Information Requested</h3>
            <p className="mb-4">
              To better facilitate the processing of the RFI, each LE or RE is asked to be very specific regarding the types of records or information requested. Please include date ranges, types of information or records requested, subscriber/user information, and other relevant facts to hasten the RFI. This will enable PopChat to better process RFIs as well as provide the LE/RE with more accurate and timely replies.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="font-bold mb-2">3. Emergency Requests for Information (ERFI) Requirements</h3>
            <p className="mb-4">
              Law Enforcement Information The following officer/agent information is required for each RFI:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Requesting Agency Name</li>
              <li>Requesting Agency Address</li>
              <li>Requesting Agency Jurisdiction</li>
              <li>Requesting Agent Name</li>
              <li>Requesting Agent Mailing Address/Authorized E-mail Address</li>
            </ul>
            <p className="mt-4">
              Note: Upon receipt, each ERFI will be handled promptly and carefully.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LawGuidelines;
