"use client"
export const Sponsors = () => {
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

            <div className="text-center">
              <button
                onClick={() => {
                  // In a real implementation, this would trigger a PDF download
                  alert(
                    "Sponsor Kit PDF download will be available soon. Please contact sponsorships@artifact.com for more information."
                  );
                }}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                📄 Download Sponsor Kit
              </button>
            </div>
          </div>

          {/* Sponsor Logos Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-gray-700/30 rounded-lg p-6 text-center border border-gray-600 hover:border-gray-500 transition-all duration-300"
              >
                <div className="text-gray-500 text-sm">Partner Logo {i}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Interested in becoming a sponsor or partner?
            </p>
            <a
              href="mailto:sponsorships@artifact.com"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              📧 sponsorships@artifact.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
