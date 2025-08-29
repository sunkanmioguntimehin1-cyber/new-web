export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="text-cyan-400 text-sm font-mono tracking-wider">
              OCTOBER 10-12, 2025 • NEW YORK
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            ARTiFACT
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Where Film, Fashion, Art and AI collide
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            3 days of avant-garde fashion, exclusive film premieres, and
            groundbreaking visual art powered by artificial intelligence
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
            //   onClick={() =>
            //     document
            //       .getElementById("tickets")
            //       ?.scrollIntoView({ behavior: "smooth" })
            //   }
              className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">Get Tickets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
            //   onClick={() =>
            //     document
            //       .getElementById("about")
            //       ?.scrollIntoView({ behavior: "smooth" })
            //   }
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
