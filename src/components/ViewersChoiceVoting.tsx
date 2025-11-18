"use client";
import Image from "next/image";

export const ViewersChoiceVoting = () => {
  // Replace this with your actual voting form URL (Google Forms, Typeform, etc.)
  const votingUrl = "https://forms.gle/your-voting-form-id"; // Update with actual URL

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="text-6xl mb-4">🏆</div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {`Viewer's Choice`}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Award
              </span>
            </h2>
            <p className="text-gray-300 text-xl mb-4">
              Your Vote Matters! Help us choose the best film, art piece, or
              fashion design
            </p>
            <p className="text-gray-400">
              Cast your vote and be part of ARTiFACT Festival 2025
            </p>
          </div>

          {/* Main Voting Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

            <div className="relative bg-gray-800/80 backdrop-blur-sm border-2 border-yellow-500/50 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - QR Code */}
                <div className="text-center">
                  <div className="inline-block bg-white p-6 rounded-2xl shadow-2xl mb-6">
                    <Image
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(votingUrl)}`}
                      alt="Viewer's Choice Voting QR Code"
                      width={200}
                      height={200}
                      className="w-48 h-48"
                    />
                  </div>
                  <p className="text-gray-300 font-semibold mb-2">
                    📱 Scan to Vote
                  </p>
                  <p className="text-sm text-gray-400">
                    Use your phone camera to scan
                  </p>
                </div>

                {/* Right Side - Information & Button */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    How to Vote:
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black">
                        1
                      </div>
                      <p className="text-gray-300 pt-1">
                        Scan the QR code or click the button below
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black">
                        2
                      </div>
                      <p className="text-gray-300 pt-1">
                        Browse the nominated works
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-black">
                        3
                      </div>
                      <p className="text-gray-300 pt-1">
                        Cast your vote for your favorite
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(votingUrl, "_blank")}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    🗳️ Vote Now
                  </button>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                    <span>🔒 One vote per person</span>
                    <span>•</span>
                    <span>⏰ Voting closes Nov 22</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">🎬</div>
              <h4 className="text-white font-semibold mb-2">Best Film</h4>
              <p className="text-gray-400 text-sm">
                Vote for the most impactful film
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="text-white font-semibold mb-2">Best Art Piece</h4>
              <p className="text-gray-400 text-sm">
                Choose your favorite artwork
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center hover:border-yellow-500/50 transition-all duration-300">
              <div className="text-3xl mb-3">👗</div>
              <h4 className="text-white font-semibold mb-2">
                Best Fashion Design
              </h4>
              <p className="text-gray-400 text-sm">
                Vote for the best runway look
              </p>
            </div>
          </div>

          {/* Info Banner */}
          <div className="mt-12 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-700/50 text-center">
            <p className="text-gray-300 mb-2">
              <span className="font-semibold text-yellow-400">
                🎉 Winner Announcement:
              </span>{" "}
              {`The Viewer's Choice Award will be presented at the Awards Gala on
              November 22, 2025`}
            </p>
            <p className="text-sm text-gray-400">
              Questions? Email{" "}
              <a
                href="mailto:voting@artifactfestival.com"
                className="text-yellow-400 hover:text-yellow-300"
              >
                voting@artifactfestival.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
