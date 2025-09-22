"use client";
import { useState } from "react";

export const SubmitApply = () => {
  const [showForm, setShowForm] = useState<string>("");

  const applications = [
    {
      id: "film",
      title: "Film Submissions",
      description: "Submit your film for premiere consideration",
      icon: "🎬",
      action: "external2",
      // link: "https://filmfreeway.com/artifact-festival",
      link: "https://filmfreeway.com/ARTiFACTFilmFestival",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "art",
      title: "Art Exhibitors",
      description: "Showcase your artwork at the festival",
      icon: "🎨",
      // action: "form",
      action: "external",
      link: "https://docs.google.com/forms/d/1-ETDwUXCcc6dUzrDgT6vYeBRmzPILPzD_SbbEeC0KLk/edit?ts=68ca2e46",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "performers",
      title: "Performers",
      description: "Apply to perform at ARTiFACT",
      icon: "🎭",
      // action: "form",
      action: "external",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe7i99ny2i-pdw-g_60Y907GfoEmgsAA81lu5XNPz8GfItoWw/viewform?usp=header",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "fashion",
      title: "Fashion Designers",
      description: "Feature your designs on our runway",
      icon: "👗",
      // action: "form",
      action: "external",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfDNDvA0pfqHpJy6ELdMBdV8v6GYwaEi0draKDmCep7ORaBdw/viewform?usp=header",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "sponsors",
      title: "Sponsors & Brand Activations",
      description: "Partner with ARTiFACT Festival",
      icon: "💼",
      // action: "form",
      action: "external",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSc-4zwKuYzuEUKOJw7gXvU304FWeOKh402e-wgruK1y-Xrs5g/viewform?usp=header",
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "volunteers",
      title: "Volunteers",
      description: "Join our festival team",
      icon: "🤝",
      // action: "form",
      action: "external",
      link: "https://forms.gle/rbFiqBhewzyYoDwJ7",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "press",
      title: "Press & Media",
      description: "Media accreditation and coverage",
      icon: "📰",
      // action: "form",
      action: "external",
      link: "https://forms.gle/BpoBZSMdPp6No3CQA",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const handleAction = (app: (typeof applications)[0]) => {
    if (app.action === "external" && app.link) {
      window.open(app.link, "_blank");
    } else {
      setShowForm(app.id);
    }
  };

  const handleFormSubmit = (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());

    // Here you would send the data to your backend
    console.log(`${formType} submission:`, data);

    // Show success message and close form
    alert("Application submitted successfully! We'll be in touch soon.");
    setShowForm("");
  };

  return (
    <section
      id="submit-apply"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Submit &{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Apply
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Join the ARTiFACT Festival community. Multiple ways to participate
            and showcase your talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group relative cursor-pointer"
              onClick={() => handleAction(app)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${app.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 h-full hover:border-gray-500 transition-all duration-300 group-hover:transform group-hover:scale-105">
                <div className="text-center">
                  <div className="text-3xl mb-4">{app.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {app.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {app.description}
                  </p>

                  <button
                    className={`w-full bg-gradient-to-r ${app.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                  >
                    {app.action === "external2"
                      ? "Submit on FilmFreeway"
                      : app.action === "external"
                      ? "Submit Application"
                      : "Apply Now"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Forms Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {applications.find((app) => app.id === showForm)?.title}
                </h3>
                <button
                  onClick={() => setShowForm("")}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <form
                onSubmit={(e) => handleFormSubmit(e, showForm)}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                {showForm === "art" && (
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Art Medium/Style
                    </label>
                    <input
                      type="text"
                      name="artMedium"
                      placeholder="e.g., Digital art, Sculpture, Mixed media"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                )}

                {showForm === "performers" && (
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Performance Type
                    </label>
                    <select
                      name="performanceType"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="">Select type</option>
                      <option value="music">Music</option>
                      <option value="dance">Dance</option>
                      <option value="spoken-word">Spoken Word</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                )}

                {showForm === "fashion" && (
                  <div>
                    <label className="block text-gray-300 mb-2">
                      Design Focus
                    </label>
                    <input
                      type="text"
                      name="designFocus"
                      placeholder="e.g., Sustainable fashion, Tech-wear, Avant-garde"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-gray-300 mb-2">
                    Portfolio/Website URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">
                    Tell us about your proposal/experience *
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:border-cyan-400 focus:outline-none"
                    placeholder="Describe your work, experience, or what you'd like to contribute to ARTiFACT Festival"
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowForm("")}
                    className="flex-1 border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
