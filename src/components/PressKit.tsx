"use client"
export const PressKit = () => {
  const pressItems = [
    {
      title: "Fact Sheet",
      description: "Complete festival information, dates, and key details",
      icon: "📋",
      type: "PDF",
      action: () => alert("Fact sheet PDF download will be available soon."),
    },
    {
      title: "Logo Pack",
      description: "ARTiFACT Festival logos in various formats and resolutions",
      icon: "🎨",
      type: "ZIP",
      action: () => alert("Logo pack download will be available soon."),
    },
    {
      title: "Approved Photos",
      description: "High-resolution images for media use",
      icon: "📸",
      type: "ZIP",
      action: () => alert("Photo pack download will be available soon."),
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Press{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Kit
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Everything you need to cover ARTiFACT Festival
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pressItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={item.action}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-500 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">
                      {item.description}
                    </p>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                      Download {item.type}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Media Contact Information */}
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Media Contact
            </h3>
            <div className="space-y-4 text-gray-300">
              <p>
                For media inquiries, interviews, and additional press materials:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:info@artifactfestival.com"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  📧 info@artifactfestival.com
                </a>
                <span className="hidden sm:block text-gray-600">|</span>
                <span className="text-gray-400">Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
