"use client";
import { useState } from "react";

// Ticket Component with Stripe and Eventbrite
export const TicketSection = () => {
  const [selectedTicket, setSelectedTicket] = useState<string>("");

  const tickets = [
    {
      id: "general",
      name: "General Admission",
      price: 149,
      description: "Access to all exhibitions and shows",
      features: [
        "3-day access",
        "All exhibitions",
        "Fashion shows",
        "Film premieres",
      ],
    },
    {
      id: "vip",
      name: "VIP Experience",
      price: 299,
      description: "Premium access with exclusive perks",
      features: [
        "All General benefits",
        "VIP seating",
        "Artist meet & greets",
        "Exclusive workshops",
        "Gift bag",
      ],
    },
    {
      id: "creator",
      name: "Creator Pass",
      price: 499,
      description: "For artists and creators",
      features: [
        "All VIP benefits",
        "Networking sessions",
        "Industry panels",
        "Portfolio reviews",
        "Awards ceremony access",
      ],
    },
  ];

  const handleStripeCheckout = (ticketId: string) => {
    // In a real implementation, you'd integrate with Stripe's checkout
    console.log(`Stripe checkout for ticket: ${ticketId}`);
    // Example Stripe integration:
    // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    // await stripe?.redirectToCheckout({ sessionId: 'your-session-id' });
    alert(
      "Stripe checkout would open here. Please integrate with your Stripe account."
    );
  };

  // const handleEventbriteCheckout = (ticketId: string) => {
  //   // In a real implementation, you'd redirect to Eventbrite
  //   console.log(`Eventbrite checkout for ticket: ${ticketId}`);
  //   // window.open('https://www.eventbrite.com/e/your-event-id', '_blank');
  //   alert(
  //     "Eventbrite checkout would open here. Please integrate with your Eventbrite event."
  //   );
  // };

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
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, index) => (
            <div
              key={ticket.id}
              className={`relative group cursor-pointer ${
                selectedTicket === ticket.id ? "scale-105" : ""
              } transition-all duration-300`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  index === 0
                    ? "from-blue-500 to-purple-500"
                    : index === 1
                    ? "from-purple-500 to-pink-500"
                    : "from-pink-500 to-orange-500"
                } rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>

              <div
                className={`relative bg-gray-800/80 backdrop-blur-sm border-2 ${
                  selectedTicket === ticket.id
                    ? "border-cyan-400"
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
                  </div>
                  <p className="text-gray-400">{ticket.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStripeCheckout(ticket.id);
                    }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>💳</span> Pay with Stripe
                  </button>

                  {/* <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventbriteCheckout(ticket.id);
                    }}
                    className="w-full border-2 border-orange-500 text-orange-500 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>🎫</span> Buy on Eventbrite
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Secure checkout • 30-day refund policy • Limited capacity
          </p>
        </div>
      </div>
    </section>
  );
};
