"use client";
import { useState } from "react";

export const TicketSection = () => {
  const [selectedTicket, setSelectedTicket] = useState<string>("");

  // Replace these with your actual Stripe payment link URLs
  // const STRIPE_PAYMENT_LINKS = {
  //   regular: "https://buy.stripe.com/test_7sY9AU2FI2Iv0Pe9se18c01", // Replace with your actual link
  //   regularpackage: "https://buy.stripe.com/test_eVqfZicgierd0Pe33Q18c02",
  //   vippackage: "https://buy.stripe.com/test_aFa5kE1BE96TdC0cEq18c03",
  //   groupof5package: "https://buy.stripe.com/test_bJefZi6VY0AngOcdIu18c04",
  //   groupof10package: "https://buy.stripe.com/test_6oU9AU802fvh2Xm7k618c05",
  // };

  //production
  const STRIPE_PAYMENT_LINKS = {
    regular: "https://buy.stripe.com/7sYeVdc7Y2nV2QA7pNbEA01", // Replace with your actual link
    regularpackage: "https://buy.stripe.com/aFaeVd0pg3rZ8aU5hFbEA02",
    vippackage: "https://buy.stripe.com/aFa14n7RIgeL9eY25tbEA03",
    groupof5package: "https://buy.stripe.com/eVq28rb3UgeLaj27pNbEA04",
    groupof10package: "https://buy.stripe.com/9B66oHdc25A74YIaBZbEA05",
  };

  const tickets = [
    {
      id: "regular",
      name: "Regular Admission",
      price: 60,
      description: "Allows entry for 1 day",
      // features: [
      //   "2-day access (Nov 14-15)",
      //   "All art exhibitions",
      //   "Fashion shows",
      //   "Film screenings",
      //   "Workshop access",
      // ],
      paymentLink: STRIPE_PAYMENT_LINKS.regular,
      gradient: "from-[#FFC32F] to-[#FEA900]",
    },
    {
      id: "regularpackage",
      name: "Regular Package",
      price: 110,
      description: "Allows entry for 2 days",
      // features: [
      //   "All General benefits",
      //   "VIP seating areas",
      //   "Artist meet & greets",
      //   "Exclusive workshops",
      //   "Welcome gift bag",
      //   "Priority entry",
      // ],
      paymentLink: STRIPE_PAYMENT_LINKS.regularpackage,
      gradient: "from-[#CF8AFF] to-[#9F5ACE]",
      popular: true,
    },
    {
      id: "vippackage",
      name: "VIP Package",
      price: 250,
      description:
        "Allows entry for 2 days with backstage access to celebrites, food, drinks, photos and silent auction",
      // features: [
      //   "All VIP benefits",
      //   "Networking sessions",
      //   "Industry panels",
      //   "Portfolio reviews",
      //   "Awards ceremony access",
      //   "1-on-1 mentorship session",
      // ],
      paymentLink: STRIPE_PAYMENT_LINKS.vippackage,
      gradient: "from-[#FF6B71] to-[#DF242B]",
      popular: true,
    },
    {
      id: "groupof5package",
      name: "Group of 5 package",
      price: 500,
      description:
        "Allows entry for 2 days with backstage access to celebrites, food, drinks, photos and silent auction",
      // features: [
      //   "All VIP benefits",
      //   "Networking sessions",
      //   "Industry panels",
      //   "Portfolio reviews",
      //   "Awards ceremony access",
      //   "1-on-1 mentorship session",
      // ],
      paymentLink: STRIPE_PAYMENT_LINKS.groupof5package,
      gradient: "from-[#918FFF] to-[#625EE2]",
      // popular: true,
    },

    {
      id: "groupof10package",
      name: "Group of 10 package",
      price: 1000,
      description:
        "Allows entry for 2 days with backstage access to celebrites, food, drinks, photos and silent auction",
      // features: [
      //   "All VIP benefits",
      //   "Networking sessions",
      //   "Industry panels",
      //   "Portfolio reviews",
      //   "Awards ceremony access",
      //   "1-on-1 mentorship session",
      // ],
      paymentLink: STRIPE_PAYMENT_LINKS.groupof10package,
      gradient: "from-[#78BF45] to-[#4D8820]",
      // popular: true,
    },
  ];

  const handleStripeCheckout = (paymentLink: string, ticketName: string) => {
    // Analytics tracking (optional)
    console.log(`Opening Stripe checkout for: ${ticketName}`);

    // Open Stripe payment link in new tab
    window.open(paymentLink, "_blank");
  };

  return (
    <section
      id="tickets"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Secure Your{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Spot
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Choose your experience level and join the cultural revolution
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Early Bird Pricing - Limited Time
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`relative group cursor-pointer ${
                selectedTicket === ticket.id ? "scale-105" : ""
              } transition-all duration-300 ${
                ticket.popular ? "md:scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${ticket.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>

              <div
                className={`relative bg-gray-800/80 backdrop-blur-sm border-2 ${
                  selectedTicket === ticket.id
                    ? "border-cyan-400"
                    : ticket.popular
                    ? "border-purple-400"
                    : "border-gray-700"
                } rounded-2xl p-8 h-full hover:border-gray-500 transition-all duration-300`}
                onClick={() => setSelectedTicket(ticket.id)}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {ticket.name}
                  </h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    <span className="text-lg">$</span>
                    {ticket.price}
                    <span className="text-lg text-gray-400">/person</span>
                  </div>
                  <p className="text-gray-400">{ticket.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {/* {ticket.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-green-400 mr-3 flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))} */}
                </ul>

                <div className="space-y-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStripeCheckout(ticket.paymentLink, ticket.name);
                    }}
                    className={`w-full bg-gradient-to-r ${ticket.gradient} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105`}
                  >
                    <span>🎫</span>
                    Get Tickets
                  </button>

                  {/* Trust indicators */}
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                    <span>🔒 Secure Payment</span>
                    <span>•</span>
                    <span>💳 Stripe Protected</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12 space-y-4">
          <p className="text-gray-500 text-sm">
            🔒 Secure checkout • 📧 Instant confirmation • 🎫 Mobile tickets
          </p>

          <div className="max-w-2xl mx-auto bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 className="text-white font-semibold mb-3">What's Included</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <div className="text-center">
                <div className="text-2xl mb-2">🎨</div>
                <p>Art Exhibitions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👗</div>
                <p>Fashion Shows</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🎬</div>
                <p>Film Screenings</p>
              </div>
            </div>
          </div>

          <div className="text-gray-400 text-sm">
            <p>
              Questions about tickets? Email us at{" "}
              <a
                href="mailto:tickets@artifactfestival.com"
                className="text-cyan-400 hover:text-cyan-300"
              >
                tickets@artifactfestival.com
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};
