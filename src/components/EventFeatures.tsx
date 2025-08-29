export const EventFeatures = () => {
  const features = [
    {
      title: "AI-Assisted Films",
      description: "AI scriptwriting, animation, and voice synthesis",
      icon: "🎬",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Interactive Art",
      description: "Co-create with neural networks",
      icon: "🎨",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AR Galleries",
      description:
        "Scan QR codes for hidden artwork meanings. Holograms and immersive arts",
      icon: "🔮",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "AI Sculptures",
      description: "Voice-interactive installations with GPT",
      icon: "🗿",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Personalized Movie Trailers",
      description:
        "AI facial recognition creates custom 10-second teasers starring attendees",
      icon: "🎭",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Awards Ceremony",
      description:
        "Grand finale with awards for films, fashion, arts and technology",
      icon: "🏆",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Future
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Immerse yourself in cutting-edge features that blur the lines
            between reality and imagination
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
              ></div>
              <div className="relative z-10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
