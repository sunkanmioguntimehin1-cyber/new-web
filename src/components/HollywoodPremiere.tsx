"use client";

import Image from "next/image";

export const HollywoodPremiere = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-red-950/20 to-black relative overflow-hidden">
      {/* Decorative background elements - film reel inspired */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-yellow-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Confetti-like particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ["#FF0000", "#FFA500", "#FFFF00", "#00FF00"][
                Math.floor(Math.random() * 4)
              ],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="text-5xl mb-4">🎬</div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hollywood{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Premiere
              </span>
            </h2>
          </div>

          {/* Main Content Card */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-orange-500 to-yellow-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="relative bg-gray-900/90 backdrop-blur-sm border-2 border-red-500/50 rounded-3xl overflow-hidden hover:border-red-500/80 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-[500px] md:h-auto">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                  <Image
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=800&h=1000&fit=crop"
                    alt="IMA Film Premiere"
                    className="w-full h-full object-cover"
                  />

                  {/* Film Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="text-center">
                      <p className="text-gray-300 text-sm mb-2 uppercase tracking-wider">
                        An Olawunmi Oyedeji Film
                      </p>
                      <h3 className="text-6xl md:text-7xl font-black text-red-500 mb-2 drop-shadow-2xl">
                       { "IMA"}
                      </h3>
                      <p className="text-white text-lg font-semibold mb-2">
                        A Story of Hope
                      </p>
                      <p className="text-gray-400 text-sm">
                        A Viesan Media Production
                      </p>
                    </div>
                  </div>
                </div>

                {/* Info Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    {/* Event Details */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">📍</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">
                            Venue
                          </h4>
                          <p className="text-gray-300">
                            Creator Space LA (Famecast)
                          </p>
                          <p className="text-gray-400 text-sm">
                            1533 26th street,
                          </p>
                          <p className="text-gray-400 text-sm">
                            Santa Monica 90404 LA, CA.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">📅</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">
                            Date & Time
                          </h4>
                          <p className="text-gray-300 font-semibold">
                            Nov 21, 2025
                          </p>
                          <p className="text-gray-400 text-sm">
                            Red Carpet Event
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🎭</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg mb-1">
                            Experience
                          </h4>
                          <p className="text-gray-300">
                            Exclusive Hollywood-style premiere
                          </p>
                          <p className="text-gray-400 text-sm">
                            Red carpet • Photo ops • Meet the cast
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 pt-6">
                      <button
                        onClick={() =>
                          document
                            .getElementById("tickets")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
                      >
                        🎟️ Get Your Premiere Tickets
                      </button>

                      {/* <button
                        onClick={() =>
                          document
                            .getElementById("program")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="w-full border-2 border-red-500 text-red-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500/10 transition-all duration-300"
                      >
                        📋 View Full Program
                      </button> */}
                    </div>

                    {/* Info Banner */}
                    <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-4 border border-red-500/30">
                      <p className="text-gray-300 text-sm text-center">
                        <span className="text-red-400 font-semibold">
                          ⭐ VIP Package holders
                        </span>{" "}
                        get exclusive backstage access
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center hover:border-red-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="text-white font-bold mb-2">Star-Studded Event</h4>
              <p className="text-gray-400 text-sm">
                Meet the cast and crew on the red carpet
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center hover:border-orange-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">📸</div>
              <h4 className="text-white font-bold mb-2">Photo Opportunities</h4>
              <p className="text-gray-400 text-sm">
                Professional photos with the premiere backdrop
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 text-center hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-4xl mb-3">🎬</div>
              <h4 className="text-white font-bold mb-2">First Screening</h4>
              <p className="text-gray-400 text-sm">
                Be among the first to experience this powerful story
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
