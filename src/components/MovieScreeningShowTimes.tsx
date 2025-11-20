"use client";

export const MovieScreeningShowTimes = () => {
  const screenings = {
    friday: {
      date: "Friday 21st November, 2025",
      films: [
        { title: "KER", time: "3:00PM - 3:20PM" },
        { title: "Road to Tatana", time: "3:30PM - 3:40PM" },
        { title: "RYSE OF 1NES", time: "3:40PM - 3:50PM" },
        { title: "MAMAYA", time: "3:50PM - 4:00PM" },
        { title: "Dream a World", time: "4:00PM - 5:01PM" },
        { title: "Bench (short film)", time: "5:05PM - 5:08PM" },
        { title: "Melon headed Whale", time: "5:10PM - 5:26PM" },
        { title: "FILKOOL", time: "5:30PM - 5:38PM" },
        { title: "Self Shadow Animus", time: "5:40PM - 5:58PM" },
        { title: "Monday", time: "6:00PM - 6:20PM" },
      ],
    },
    saturday: {
      date: "Saturday 22nd November, 2025",
      films: [
        { title: "Aso Ebi Diaries", time: "1:00PM - 3:00PM" },
        { title: "Nemesis", time: "3:00PM - 3:27PM" },
        { title: "BOOK OF SKIN", time: "3:30PM - 3:40PM" },
        { title: "BOOKANIMA: Martial Arts", time: "3:40PM - 3:57PM" },
        { title: "1776: Thierno Souleymane", time: "4:00PM - 4:56PM" },
        { title: "Baal et la révolution du Fouta", time: "" },
        { title: "Shane Mauss Trips", time: "Closing night film" },
      ],
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="text-5xl">🎬</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Movie Screening{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Show Times
              </span>
            </h2>
            <div className="text-5xl">🍿</div>
          </div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Join us for exclusive film screenings featuring international and
            experimental works
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Friday Schedule */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            <div className="relative bg-gray-800/80 backdrop-blur-sm border-2 border-cyan-500/30 rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full font-bold mb-4">
                  DAY 1
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {screenings.friday.date}
                </h3>
              </div>

              <div className="space-y-3">
                {screenings.friday.films.map((film, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-900/50 rounded-xl p-4 hover:bg-gray-900/70 transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-200 font-medium">
                        {film.title}
                      </span>
                    </div>
                    <span className="text-cyan-400 font-mono text-sm font-semibold">
                      {film.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Saturday Schedule */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

            <div className="relative bg-gray-800/80 backdrop-blur-sm border-2 border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold mb-4">
                  DAY 2
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {screenings.saturday.date}
                </h3>
              </div>

              <div className="space-y-3">
                {screenings.saturday.films.map((film, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-900/50 rounded-xl p-4 hover:bg-gray-900/70 transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-200 font-medium">
                        {film.title}
                      </span>
                    </div>
                    {film.time && (
                      <span
                        className={`font-mono text-sm font-semibold ${
                          film.time === "Closing night film"
                            ? "text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full"
                            : "text-purple-400"
                        }`}
                      >
                        {film.time}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Venue Information */}
        <div className="mt-12 max-w-3xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 text-center backdrop-blur-sm">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-3xl">📍</span>
            <h4 className="text-2xl font-bold text-white">Venue Location</h4>
          </div>
          <p className="text-gray-300 text-lg mb-2">
            The Creator Space LA (Famecast)
          </p>
          <p className="text-gray-400 mb-4">
            1533 26th Street, Santa Monica, CA 90404
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span>🎫</span>
              <span>All screenings included with ticket</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <span>🪑</span>
              <span>First come, first served seating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
