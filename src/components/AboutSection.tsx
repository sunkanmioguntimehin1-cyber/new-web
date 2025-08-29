export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Cultural{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              ARTiFACT represents the convergence of traditional artistry and
              cutting-edge artificial intelligence. Our mission extends beyond
              entertainment to foster appreciation for innovative expression and
              connect multinational artistic communities.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  10M+
                </div>
                <div className="text-gray-400">Global Audience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">
                  100%
                </div>
                <div className="text-gray-400">Brand Integration</div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">
                About Rehoboth Media
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                A dynamic media and technology company based in Los Angeles,
                dedicated to making a difference through positive storytelling,
                impactful productions, and transformative events. We work at the
                intersection of creativity, culture, and technology.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                Event Categories
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300">
                    AI-Fashion: Digital concepts to physical garments
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-200"></div>
                  <span className="text-gray-300">
                    Film Festival: Workshops, exhibitions, premieres
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse delay-400"></div>
                  <span className="text-gray-300">
                    Arts Exhibition: Contemporary tech-infused displays
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-600"></div>
                  <span className="text-gray-300">
                    Runway: Multi-cultural fashion showcase
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
