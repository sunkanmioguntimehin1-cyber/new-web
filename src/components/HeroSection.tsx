
"use client";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo5.png";
import Image from "next/image";

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Festival promotion images/content
  const slides = [
    {
      id: 1,
      title: "Call for Vendors",
      subtitle: "For enquiries",
      content:
        "Join ARTiFACT Festival as a vendor and showcase your creative work",
      bgPattern: "colorful-squiggles",
      primaryColor: "from-green-400 to-emerald-500",
    },
    {
      id: 2,
      title: "Ticket Sales",
      subtitle: "Multiple Package Options Available",
      content:
        "Regular • VIP • Group Packages • Experience the future of creativity",
      bgPattern: "paint-splash",
      primaryColor: "from-pink-500 to-purple-600",
    },
    {
      id: 3,
      title: "Call for Sponsorship",
      subtitle: "Partnership Opportunities",
      content:
        "Align your brand with innovation and creativity at ARTiFACT Festival",
      bgPattern: "money-splash",
      primaryColor: "from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      title: "Festival Experience",
      subtitle: "Film • Arts • Fashion • Technology",
      content:
        "You are invited to ARTiFACT Festival where creativity collides with AI",
      bgPattern: "artistic-blend",
      primaryColor: "from-cyan-400 to-blue-500",
    },
    {
      id: 5,
      title: "Fashion Show Exhibitors & Models",
      subtitle: "Runway Ready",
      content: "Showcase your designs and walk the ARTiFACT runway",
      bgPattern: "fashion-splash",
      primaryColor: "from-purple-400 to-pink-500",
    },
    {
      id: 6,
      title: "Art Exhibitors",
      subtitle: "Creative Expression",
      content: "Display your artwork at the intersection of art and technology",
      bgPattern: "art-explosion",
      primaryColor: "from-indigo-500 to-purple-600",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Patterns based on slide type */}
            <div className="absolute inset-0 w-full h-full">
              {/* Colorful overlay patterns */}
              {slide.bgPattern === "colorful-squiggles" && (
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b9d' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  ></div>
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-700"></div>
                  <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-yellow-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
                </div>
              )}

              {slide.bgPattern === "paint-splash" && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                  <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-radial from-pink-500/40 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-radial from-purple-600/40 to-transparent rounded-full blur-3xl"></div>
                </div>
              )}

              {slide.bgPattern === "money-splash" && (
                <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-yellow-900 to-black">
                  <div className="absolute inset-0">
                    {/* Money bill decorations */}
                    <div className="absolute top-1/4 left-1/6 w-24 h-12 bg-green-600/30 rounded border-2 border-green-400/50 transform rotate-12"></div>
                    <div className="absolute top-1/2 right-1/4 w-20 h-10 bg-green-500/30 rounded border-2 border-green-300/50 transform -rotate-12"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-28 h-14 bg-yellow-600/30 rounded border-2 border-yellow-400/50 transform rotate-6"></div>
                    <div className="absolute top-3/4 right-1/6 w-24 h-12 bg-green-600/30 rounded border-2 border-green-400/50 transform -rotate-6"></div>
                  </div>
                </div>
              )}

              {slide.bgPattern === "artistic-blend" && (
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                  <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-conic from-red-500/30 via-yellow-500/30 via-green-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-spin-slow"></div>
                </div>
              )}

              {slide.bgPattern === "fashion-splash" && (
                <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-purple-900 to-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
                  <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-radial from-pink-400/40 via-purple-500/30 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-gradient-radial from-yellow-400/30 to-transparent rounded-full blur-2xl"></div>
                </div>
              )}

              {slide.bgPattern === "art-explosion" && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
                  <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-conic from-purple-500/40 via-pink-500/40 via-cyan-500/40 to-yellow-500/40 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              )}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  {/* ARTiFACT Logo */}
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="flex items-center bg-white justify-center gap-4 mb-2">
                        <Image
                          alt="carousel image"
                          src={logo}
                          className="h-12 text-white md:h-16 w-auto object-contain"
                        />
                      </div>
                    </div>

                    <div className="text-cyan-400 text-sm font-mono tracking-wider mb-6">
                      SANTA MONICA • NOV 21st - 22nd, 2025 • 10AM DAILY
                    </div>
                  </div>

                  {/* Slide Content */}
                  <div className="mb-12">
                    <h2
                      className={`text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${slide.primaryColor} bg-clip-text text-transparent`}
                    >
                      {slide.title}
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-6 font-light italic">
                      {slide.subtitle}
                    </p>

                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                      {slide.content}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <button
                      onClick={() =>
                        document
                          .getElementById("submit-apply")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className={`group relative bg-gradient-to-r ${slide.primaryColor} text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                    >
                      <span className="relative z-10">Submit & Apply</span>
                    </button>

                    {/* <button
                      onClick={() =>
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
                    >
                      Learn More
                    </button> */}
                  </div>

                  {/* Contact Information */}
                  <div className="text-center mb-8">
                    <p className="text-gray-400 mb-2">For enquiries</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
                      <a
                        href="mailto:inquiries@artifactfestival.com"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        📧 inquiries@artifactfestival.com
                      </a>
                      <span className="hidden sm:block text-gray-600">|</span>
                      <span className="text-gray-400">
                        1533 26th Street
                        Santa Monica 90404 LA, CA.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          >
            <span className="text-white">←</span>
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
          >
            <span className="text-white">→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};