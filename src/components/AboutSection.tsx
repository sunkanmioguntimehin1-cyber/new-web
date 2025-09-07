"use client"
export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About ARTiFACT{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Festival
            </span>
          </h2>

          <div className="text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              ARTiFACT Festival is a groundbreaking celebration where film,
              fashion, art, and artificial intelligence converge to create
              unprecedented experiences.
            </p>
            <p>
              This two-day cultural revolution brings together visionaries,
              creators, and innovators to showcase the future of creative
              expression in the heart of Los Angeles.
            </p>
            <p>
              Join us as we redefine the boundaries of artistic possibility and
              explore how technology amplifies human creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
