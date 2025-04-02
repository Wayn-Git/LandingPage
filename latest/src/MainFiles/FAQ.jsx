import React, { useState } from "react";

export default function Faq() {
  // State to track which accordion item is open
  const [openIndex, setOpenIndex] = useState(0); // Set the second item open by default

  // Function to toggle accordion items
  const toggleAccordion = (index) => {
    if (openIndex === index) {
      // If clicking on already open item, close it
      setOpenIndex(null);
    } else {
      // Otherwise, open the clicked item
      setOpenIndex(index);
    }
  };

  return (
    <section className="flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row px-4 py-20">
        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm leading-loose text-center lg:text-left">
            Here you'll find answers to the most commonly asked questions about
            our services. If you have any other queries, feel free to reach out
            to our support team for assistance.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-full max-w-xl mx-auto p-5">
            {/* First FAQ Item */}
            <div className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-md shadow-lg mb-2 border border-zinc-800 transition duration-300">
              <div
                className="flex justify-between items-center p-5 cursor-pointer"
                onClick={() => toggleAccordion(0)}
              >
                <h3 className="text-sm font-medium">
                  How secure is our team data?
                </h3>
                <span className="text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-3 h-3 transition-transform ${
                      openIndex === 0 ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 0 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-5 py-4 text-gray-400 text-sm leading-loose">
                  We use enterprise-grade security including AES-256 encryption,
                  SOC 2 Type II compliance, and optional customer-managed
                  encryption keys. All data is encrypted both at rest and in
                  transit, with regular third-party security audits.
                </div>
              </div>
            </div>

            {/* Second FAQ Item */}
            <div className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-md shadow-lg mb-2 border border-zinc-800 transition duration-300">
              <div
                className="flex justify-between items-center p-5 cursor-pointer"
                onClick={() => toggleAccordion(1)}
              >
                <h3 className="text-sm font-medium">
                  What apps can we connect?
                </h3>
                <span className="text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-3 h-3 transition-transform ${
                      openIndex === 1 ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 1 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-5 py-4 text-gray-400 text-sm leading-loose">
                  We support 500+ integrations including Slack, Microsoft Teams,
                  GitHub, GitLab, Jira, Notion, Google Workspace, and Zoom. Our
                  Universal API Connector also lets you integrate any custom
                  REST API with OAuth2 support.
                </div>
              </div>
            </div>

            {/* Third FAQ Item */}
            <div className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-md shadow-lg mb-2 border border-zinc-800 transition duration-300">
              <div
                className="flex justify-between items-center p-5 cursor-pointer"
                onClick={() => toggleAccordion(2)}
              >
                <h3 className="text-sm font-medium">
                  How do we onboard our team?
                </h3>
                <span className="text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`w-3 h-3 transition-transform ${
                      openIndex === 2 ? "rotate-90" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === 2 ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="px-5 py-4 text-gray-400 text-sm leading-loose">
                  We provide multiple onboarding paths: 1-click bulk user
                  imports from Slack/Google Workspace, personalized onboarding
                  sessions, and interactive tutorials. Enterprise plans include
                  dedicated Customer Success Managers and custom training
                  programs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
