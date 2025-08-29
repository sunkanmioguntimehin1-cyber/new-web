export const EventSchedule = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "October 10",
      title: "Arts & Fashion",
      events: [
        { time: "10:00 AM", event: "Arts Exhibition Opening" },
        { time: "7:00 PM", event: "Fashion Show Spectacular" },
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      day: "Day 2",
      date: "October 11",
      title: "Workshops & Films",
      events: [
        { time: "10:00 AM", event: "Interactive Workshops" },
        { time: "2:00 PM", event: "Film Exhibition" },
        { time: "8:00 PM", event: "Exclusive Premieres" },
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      day: "Day 3",
      date: "October 12",
      title: "Film & Music",
      events: [
        { time: "10:00 AM", event: "Final Workshops" },
        { time: "2:00 PM", event: "Film Exhibition Continues" },
        { time: "8:00 PM", event: "Premieres, Music & Awards" },
      ],
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            3 Days of{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          <p className="text-gray-400 text-xl">
            New York Film Academy • October 10-12, 2025
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedule.map((day, index) => (
            <div key={index} className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${day.color} rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
              ></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {day.day}
                  </h3>
                  <p className="text-lg text-gray-300 mb-1">{day.date}</p>
                  <p
                    className={`text-lg font-semibold bg-gradient-to-r ${day.color} bg-clip-text text-transparent`}
                  >
                    {day.title}
                  </p>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex items-start gap-4">
                      <div className="text-sm text-gray-400 font-mono mt-1 min-w-[80px]">
                        {event.time}
                      </div>
                      <div className="text-gray-300">{event.event}</div>
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
