import React from "react";
import { CheckCircle2 } from "lucide-react";

const terms = [
  "Allotment of plots will be made on a first come, first served basis.",
  "Application for plots should be made on a prescribed application form duly signed by the applicant along with 3 copies of photograph, 2 copies of the nominee’s photograph, and booking money.",
  "National ID card/passport/citizenship certificate issued by the city corporation counselor should be handed in.",
  "Payment of booking money should be made along with the application.",
  "In case of prompt payment and installments, the contract will be signed after the reception of down payment and booking money.",
  "More than one plot can be owned by a single person, and vice versa.",
  "Bangladeshis residing abroad may remit payments in foreign exchange by TT/Bank draft.",
  "All payments should be made by Pay Order/cash/cheque/Bank Draft in favour of Unity Landmark Limited.",
  "The main connections of water supply, electricity, gas, and sewerage system will be set up by the company as per the rules and regulations of the government. In this connection, the allottee will be billed proportionately on actual cost basis.",
  "The allottee should set up the connections in his/her plot at his/her own expense.",
  "After the completion of construction and the payment, plots will be registered, followed by transferal.",
  "Following the transfer of plots, a committee for social welfare – Tribhuban Dreamland City Society – consisting of members from the plot owners, will be formed.",
  "A welfare fund should meet necessary expenses. Subscription to the fund should be taken out as per the decision made by the society.",
  "In case of failure to pay the full amount, application should be made to refund the amount already paid by the allottee. 20% of the paid amount will be taken out as documentation/service charge while the rest is refunded by cheque within three months.",
  "The company will not be responsible for any hindrance in project development and handing over of plots due to natural disaster, political unrest, etc.",
];

const TermsAndConditions = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto rounded-2xl shadow-xl  p-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-10">
          Terms & Conditions for Plot Allotment
        </h1>

        <div className="grid gap-6 md:grid-cols-2">
          {terms.map((term, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-blue-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="text-blue-700 min-w-6 min-h-6 mt-1" />
              <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                {term}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
