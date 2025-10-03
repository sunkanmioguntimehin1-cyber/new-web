"use client"
export const ProgramGlance = () => {
  const days = [
    {
      day: "Day 1",
      date: "November 14, 2025",
      title: "Film screenings, workshops, art and Fashion",
      description:
        "Immerse yourself in visual arts exhibitions and cutting-edge fashion showcases",
      highlights: [
        "Interactive Art Installations",
        "AI-Fashion Design Showcase",
        "Designer Meet & Greets",
        "Live Art Creation",
      ],
      color: "from-pink-500 to-rose-500",
      icon: "🎨",
    },
    {
      day: "Day 2",
      date: "November 15, 2025",
      title: "Film premieres, fashion show and awards night",
      description:
        "Celebrate cinematic excellence with exclusive premieres and recognition ceremonies",
      highlights: [
        "Exclusive Film Premieres",
        "Director Q&A Sessions",
        "Awards Ceremony",
        "Industry Networking",
      ],
      color: "from-purple-500 to-indigo-500",
      icon: "🎬",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Program at a{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Glance
            </span>
          </h2>
          <p className="text-gray-400 text-xl">
            Two days of immersive experiences in Los Angeles
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {days.map((day, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${day.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full hover:border-gray-500 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{day.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {day.day}
                  </h3>
                  <p className="text-lg text-gray-300 mb-2">{day.date}</p>
                  <p
                    className={`text-xl font-semibold bg-gradient-to-r ${day.color} bg-clip-text text-transparent mb-4`}
                  >
                    {day.title}
                  </p>
                  <p className="text-gray-400 text-sm mb-6">
                    {day.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {day.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
