"use client"
export const Footer = () => {
  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="col-span-1">
            <h3 className="text-3xl font-bold text-white mb-4">ARTiFACT</h3>
            <p className="text-gray-400 mb-6">
              Where Film, Fashion, Art and AI collide. Los Angeles • November
              14–15, 2025
            </p>
            <div className="text-gray-400 text-sm">
              <p>Presented by</p>
              <p className="font-semibold text-white">
                Rehoboth Media and Technologies LLC
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-white font-medium">Festival Director</p>
                <p>Olawunmi Oyedeji</p>
                <a
                  href="mailto:ola@artifact.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  📧 ola@artifact.com
                </a>
              </div>

              <div className="pt-4">
                <p className="text-white font-medium">General Inquiries</p>
                <a
                  href="mailto:info@artifact.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  📧 info@artifact.com
                </a>
              </div>

              <div>
                <p className="text-white font-medium">Sponsorships</p>
                <a
                  href="mailto:sponsorships@artifact.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  📧 sponsorships@artifact.com
                </a>
              </div>

              <div>
                <p className="text-white font-medium">Other Inquiries</p>
                <a
                  href="mailto:inquiries@artifact.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  📧 inquiries@artifact.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Event Info</h4>
            <div className="space-y-3 text-gray-400">
              <div>
                <p className="text-white font-medium">Venue</p>
                <p>Magic Box</p>
                <p>1933 S. Broadway</p>
                <p>Los Angeles, CA</p>
              </div>

              <div className="pt-4">
                <p className="text-white font-medium">Dates</p>
                <p>November 14–15, 2025</p>
                <p>Daily: 10AM</p>
              </div>

              <div className="pt-4">
                <h5 className="text-white font-medium mb-3">Follow Us</h5>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white">📷</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white">𝕏</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white">f</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white">▶</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-white">🌐</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 Rehoboth Media and Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
