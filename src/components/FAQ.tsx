"use client";
import { useState } from "react";

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      category: "Deadlines",
      questions: [
        {
          q: "When is the deadline for film submissions?",
          a: "Film submissions through FilmFreeway close on October 15, 2025. Early bird submissions receive priority consideration.",
        },
        {
          q: "What are the application deadlines for exhibitors and performers?",
          a: "Art exhibitor, performer, and fashion designer applications are due by September 30, 2025. Late applications may be considered based on availability.",
        },
      ],
    },
    {
      category: "Fees",
      questions: [
        {
          q: "Are there submission fees?",
          a: "Film submissions have standard FilmFreeway fees. Art exhibitor, performer, and fashion designer applications are currently free to submit.",
        },
        {
          q: "What are the costs for sponsors?",
          a: "Sponsorship packages vary based on level and activation requirements. Contact sponsorships@artifactfestival.com for detailed pricing and custom packages.",
        },
      ],
    },
    {
      category: "Venue & Accessibility",
      questions: [
        {
          q: "Where is ARTiFACT Festival taking place?",
          a: "The festival will be held at Magic Box, 1933 S. Broadway, Los Angeles, CA. The venue is centrally located and accessible via public transportation.",
        },
        {
          q: "Is the venue accessible?",
          a: "Yes, Magic Box is ADA compliant with wheelchair accessibility, accessible restrooms, and accommodations for guests with disabilities. Contact us for specific accessibility needs.",
        },
        {
          q: "Is parking available?",
          a: "Yes, there is paid parking available near the venue. We also encourage the use of rideshare services and public transportation.",
        },
      ],
    },
    {
      category: "Sponsor Information",
      questions: [
        {
          q: "What sponsorship levels are available?",
          a: "We offer multiple sponsorship tiers including Title Sponsor, Presenting Sponsor, Category Sponsors, and Brand Activation opportunities. Download our sponsor kit for detailed information.",
        },
        {
          q: "What are the benefits of sponsoring ARTiFACT Festival?",
          a: "Sponsors gain brand exposure to our creative audience, networking opportunities, logo placement, social media promotion, and optional brand activation spaces.",
        },
      ],
    },
    {
      category: "General Information",
      questions: [
        {
          q: "Who can attend ARTiFACT Festival?",
          a: "The festival is open to all ages. Some evening events may have age restrictions. Tickets will be available closer to the event date.",
        },
        {
          q: "Can I volunteer at the festival?",
          a: "Yes! We welcome volunteers. Apply through our Submit & Apply section. Volunteers receive festival access and ARTiFACT merchandise.",
        },
        {
          q: "Will there be food and beverages available?",
          a: "Yes, we'll have food vendors and beverage stations throughout the venue. Information about specific vendors will be announced closer to the event.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-xl">
            Everything you need to know about ARTiFACT Festival
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div
                      key={faqIndex}
                      className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700/30 transition-all duration-300"
                      >
                        <span className="text-white font-semibold pr-4">
                          {faq.q}
                        </span>
                        <span
                          className={`text-cyan-400 text-2xl transition-transform duration-300 ${
                            openFAQ === globalIndex ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      {openFAQ === globalIndex && (
                        <div className="px-6 pb-6">
                          <div className="border-t border-gray-700 pt-4">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 text-center mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Get in touch
              with our team.
            </p>
            <a
              href="mailto:inquiries@artifactfestival.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              📧 inquiries@artifactfestival.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
