import React from "react";
import { X } from "lucide-react";

type Props = {
  setOpen: any;
};

const ContactModalDetails = ({ setOpen }: Props) => {

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={() => setOpen(false)}
      >
        <div
          className="bg-white p-4 rounded w-full mx-4 max-w-[600px] max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative p-4 w-full">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact PopChat
            </h1>

            {/* Billing Section */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 mb-2">Billing</h2>
              <div className="text-gray-600 mb-1">
                For any billing questions including refunds on a case-by-case basis, please contact our billing partner,
                CCBill via <a
                  href="https://ccbill.com/contact"
                  className="text-blue-500 underline"
                  target="_blank"
                >https://ccbill.com/contact</a>, phone 1.888.596.9279,
                or eamil at <a
                  href="mailto:consumersupport@ccbill.com"
                  className="text-blue-500 underline"
                >
                  consumersupport@ccbill.com
                </a>
              </div>

            </section>

            {/* Complaints Section */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 mb-2">
                Complaints
              </h2>
              <div className="text-gray-600 mb-1">
                For all complaints, please contact us through{" "}
                <a
                  href="mailto:support@popchat.live"
                  className="text-blue-500 underline"
                >
                  support@popchat.live
                </a>
                .
              </div>
              <div className="text-gray-600">
                Complaints will be reviewed and resolved within seven (7)
                business days. That resolution will then be communicated to the
                complainant. Appeals or requests for any decision made should be
                presented, again, to{" "}
                <a
                  href="mailto:support@popchat.live"
                  className="text-blue-500 underline"
                >
                  support@popchat.live
                </a>
                .
              </div>
            </section>

            {/* Appeals Section */}
            <section className="mb-6">
              <h2 className="text-xl font-bold text-gray-700 mb-2">Appeals</h2>
              <div className="text-gray-600 mb-1">
                If you have been depicted in any content and would like to
                appeal removal of such content, please notify us by email at{" "}
                <a
                  href="mailto:appeal@popchat.live"
                  className="text-blue-500 underline"
                >
                  appeal@popchat.live
                </a>
                .
              </div>
              <div className="text-gray-600">
                If there is disagreement regarding an appeal, we will allow the
                disagreement to be resolved by a neutral party.
              </div>
            </section>

            {/* Report Section */}
            <section>
              <h2 className="text-xl font-bold text-gray-700 mb-2">Report</h2>
              <div className="text-gray-600 mb-1">
                To report any content or user that violates our Terms of
                Service, Privacy Policy, or Community Guidelines, you can either
                click the "Report" button within the app or send an email to{" "}
                <a
                  href="mailto:report@popchat.live"
                  className="text-blue-500 underline"
                >
                  report@popchat.live
                </a>
                .
              </div>
              <div className="text-gray-600">
                Please provide as much detail as possible in your report,
                including any relevant screenshots or descriptions of the issue.
              </div>
            </section>
            <img src={'/map.png'} alt="map" className="mt-8" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactModalDetails;
