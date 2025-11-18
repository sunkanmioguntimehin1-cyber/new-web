// "use client"

// import Image from "next/image";
// import donation from "@/assets/images/donation.png"
// import sponsor1 from "@/assets/images/sponsor1.jpg";
// import sponsor2 from "@/assets/images/sponsor2.jpg";
// import sponsor3 from "@/assets/images/sponsor3.jpg";
// import sponsor4 from "@/assets/images/sponsor4.jpg";
// import sponsor5 from "@/assets/images/sponsor5.jpg";
// import sponsor6 from "@/assets/images/sponsor6.jpg";

// export const Sponsors = () => {

//   const donationAmounts = [
//     {
//       amount: 50,
//       stripeLink: "https://donate.stripe.com/your_actual_50_link",
//     },
//     {
//       amount: 100,
//       stripeLink: "https://donate.stripe.com/your_actual_50_link",
//     },
//     {
//       amount: 200,
//       stripeLink: "https://donate.stripe.com/your_actual_50_link",
//     },
//   ];

//   const partners = [
//     {
//       name: "sponsor1",
//       logo: sponsor1,
//     },
//     {
//       name: "sponsor2",
//       logo: sponsor2,
//     },
//     {
//       name: "sponsor3",
//       logo: sponsor3,
//     },
//     {
//       name: "sponsor4",
//       logo: sponsor4,
//     },
//     {
//       name: "sponsor5",
//       logo: sponsor5,
//     },
//     {
//       name: "sponsor6",
//       logo: sponsor6,
//     },

//     // ... add more partners
//   ];
//   return (
//     <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Partner With{" "}
//             <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//               ARTiFACT
//             </span>
//           </h2>
//         </div>

//         <div className="max-w-4xl mx-auto">
//           <div className="bg-gray-800/50 rounded-2xl p-8 mb-12 border border-gray-700">
//             <p className="text-gray-300 text-lg leading-relaxed mb-8">
//               Join ARTiFACT Festival as a sponsor and align your brand with
//               innovation, creativity, and cultural impact. Our festival brings
//               together artists, filmmakers, fashion designers, and technology
//               pioneers from around the world, creating unique opportunities for
//               meaningful brand engagement. Partner with us to reach a diverse,
//               creative audience while supporting groundbreaking artistic
//               expression and the intersection of art and artificial
//               intelligence.
//             </p>

//             {/* <div className="text-center">
//               <button
//                 onClick={() => {
//                   // In a real implementation, this would trigger a PDF download
//                   alert(
//                     "Sponsor Kit PDF download will be available soon. Please contact sponsorships@artifactfestival.com for more information."
//                   );
//                 }}
//                 className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
//               >
//                 📄 Download Sponsor Kit
//               </button>
//             </div> */}
//           </div>

//           {/* Sponsor Logos Placeholder */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center ">
//             {partners.map((item) => (
//               <div
//                 key={item.name}
//                 className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-gray-500 transition-all duration-300"
//               >
//                 <Image
//                   src={item.logo}
//                   alt={item.name}
//                   width={112}
//                   height={112}
//                   className="w-36 h-36"
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <p className="text-gray-400 mb-6">
//               Interested in becoming a sponsor or partner?
//             </p>
//             <a
//               href="mailto:sponsorships@artifactfestival.com"
//               className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
//             >
//               📧 sponsorships@artifactfestival.com
//             </a>
//           </div>

//           <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-700/50">
//             <div className="text-center mb-8">
//               <h3 className="text-3xl font-bold text-white mb-4">
//                 Support{" "}
//                 <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//                   ARTiFACT Festival
//                 </span>
//               </h3>
//               <p className="text-gray-300 mb-2">
//                 Help us bring art, film, fashion, and technology together. Your
//                 donation supports emerging artists and creators.
//               </p>
//               <p className="text-sm text-gray-400">
//                 Select an amount to update the QR code
//               </p>
//             </div>

//             <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
//               {/* Amount Selection Buttons */}
//               <div className="flex flex-col gap-3 w-full md:w-auto">
//                 {donationAmounts.map((donation, index) => (
//                   <button
//                     key={donation.amount}
//                     onClick={() => setSelectedDonation(index)}
//                     className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
//                       selectedDonation === index
//                         ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg scale-105"
//                         : "bg-gray-800/50 text-gray-300 border border-yellow-700/30 hover:border-yellow-500/50"
//                     }`}
//                   >
//                     ${donation.amount}
//                   </button>
//                 ))}
//               </div>

//               {/* QR Code Display */}
//               <div className="flex flex-col items-center">
//                 <div className="bg-white p-4 rounded-xl mb-4">
//                   <Image
//                     src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${donationAmounts[selectedDonation].stripeLink}`}
//                     alt={`Donate ${donationAmounts[selectedDonation].amount} QR Code`}
//                     width={150}
//                     height={150}
//                     className="w-36 h-36"
//                   />
//                 </div>
//                 <p className="text-sm text-gray-400 mb-4">
//                   Scan to donate ${donationAmounts[selectedDonation].amount}
//                 </p>
//                 <button
//                   onClick={() =>
//                     window.open(
//                       donationAmounts[selectedDonation].stripeLink,
//                       "_blank"
//                     )
//                   }
//                   className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
//                 >
//                   💝 Donate ${donationAmounts[selectedDonation].amount}
//                 </button>
//               </div>
//             </div>

//             <div className="text-center mt-6">
//               <p className="text-xs text-gray-500">
//                 🔒 Secure donation powered by Stripe • Tax-deductible
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";
import { useState } from "react";
import Image from "next/image";
import sponsor1 from "@/assets/images/sponsor1.jpg";
import sponsor2 from "@/assets/images/sponsor2.jpg";
import sponsor3 from "@/assets/images/sponsor3.jpg";
import sponsor4 from "@/assets/images/sponsor4.jpg";
import sponsor5 from "@/assets/images/sponsor5.jpg";
import sponsor6 from "@/assets/images/sponsor6.jpg";

export const Sponsors = () => {
  const [selectedDonation, setSelectedDonation] = useState(0);

  // Replace these with your actual Stripe donation links
  const donationAmounts = [
    {
      amount: 50,
      // stripeLink: "https://buy.stripe.com/test_7sYeVea8a3MzbtS7k618c06",
      stripeLink: "https://buy.stripe.com/bJeeVdeg66Ebbn6dObbEA06",
    },
    {
      amount: 100,
      stripeLink: "https://buy.stripe.com/bJefZh8VM7If9eYcK7bEA07",
    },
    {
      amount: 200,
      stripeLink: "https://buy.stripe.com/14A9AT9ZQaUrdve9xVbEA08",
    },
    {
      amount: 500,
      stripeLink: "https://buy.stripe.com/3cI9AT7RIaUrfDm25tbEA09",
    },
    {
      amount: 1000,
      stripeLink: "https://buy.stripe.com/bJe00jeg61jR9eY25tbEA0a",
    },
  ];

  // console.log("selectedDonation", selectedDonation);
  console.log("selectedDonation", donationAmounts[selectedDonation]);


  const partners = [
    { name: "sponsor1", logo: sponsor1 },
    { name: "sponsor2", logo: sponsor2 },
    { name: "sponsor3", logo: sponsor3 },
    { name: "sponsor4", logo: sponsor4 },
    { name: "sponsor5", logo: sponsor5 },
    { name: "sponsor6", logo: sponsor6 },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Partner With{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              ARTiFACT
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/50 rounded-2xl p-8 mb-12 border border-gray-700">
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Join ARTiFACT Festival as a sponsor and align your brand with
              innovation, creativity, and cultural impact. Our festival brings
              together artists, filmmakers, fashion designers, and technology
              pioneers from around the world, creating unique opportunities for
              meaningful brand engagement. Partner with us to reach a diverse,
              creative audience while supporting groundbreaking artistic
              expression and the intersection of art and artificial
              intelligence.
            </p>
          </div>

          {/* Sponsor Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((item) => (
              <div
                key={item.name}
                className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-gray-500 transition-all duration-300"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={112}
                  height={112}
                  className="w-36 h-36"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Interested in becoming a sponsor or partner?
            </p>
            <a
              href="mailto:sponsorships@artifactfestival.com"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              📧 sponsorships@artifactfestival.com
            </a>
          </div>

          {/* Donation Section with Single Dynamic QR Code */}
          <div className="max-w-3xl mx-auto mt-16 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 border border-yellow-700/50">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Support{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  ARTiFACT Festival
                </span>
              </h3>
              <p className="text-gray-300 mb-2">
                Your donations helps us give emerging global filmmakers,
                artists, fashion designers and tech entrepreneurs a platform to
                showcase their skills to the world
              </p>
              <p className="text-sm text-gray-400">
                Select an amount below to update the QR code
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              {/* Amount Selection List */}
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <p className="text-white font-semibold mb-2 text-center md:text-left">
                  Choose Amount:
                </p>
                {donationAmounts.map((donation, index) => (
                  <button
                    key={donation.amount}
                    onClick={() => setSelectedDonation(index)}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedDonation === index
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black shadow-lg transform scale-105"
                        : "bg-gray-800/50 text-gray-300 border border-yellow-700/30 hover:border-yellow-500/50 hover:bg-gray-700/50"
                    }`}
                  >
                    ${donation.amount}
                  </button>
                ))}
              </div>

              {/* Single QR Code Display */}
              <div className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-xl mb-4 shadow-lg">
                  <Image
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${donationAmounts[selectedDonation].stripeLink}`}
                    alt={`Donate $${donationAmounts[selectedDonation].amount} QR Code`}
                    width={180}
                    height={180}
                    className="w-44 h-44"
                  />
                </div>
                <p className="text-lg font-semibold text-yellow-400 mb-2">
                  ${donationAmounts[selectedDonation].amount}
                </p>
                <p className="text-sm text-gray-400 mb-4">
                  Scan QR code or click button below
                </p>
                <button
                  onClick={() =>
                    window.open(
                      donationAmounts[selectedDonation].stripeLink,
                      "_blank"
                    )
                  }
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  💝 Donate ${donationAmounts[selectedDonation].amount}
                </button>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-xs text-gray-500">
                🔒 Secure donation powered by Stripe • Tax-deductible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};