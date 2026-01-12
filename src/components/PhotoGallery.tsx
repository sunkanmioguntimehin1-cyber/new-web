

"use client";
import { useState } from "react";
import Image from "next/image"; // Import the Next.js Image component
import image1 from "@/assets/images/image1.jpg";
import image2 from "@/assets/images/image2.jpg";
import image3 from "@/assets/images/image3.jpg";
import image4 from "@/assets/images/image4.jpg";
import image5 from "@/assets/images/image5.jpg";
import image6 from "@/assets/images/image6.jpg";
import image7 from "@/assets/images/image7.jpg";
import image8 from "@/assets/images/image8.jpg";
import image9 from "@/assets/images/image9.jpg";



export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, url: image1, title: "Festival Opening Night", category: "Events" },
    { id: 2, url: image2, title: "Art Exhibition", category: "Art" },
    { id: 3, url: image3, title: "Fashion Runway Show", category: "Fashion" },
    { id: 4, url: image4, title: "Film Screening", category: "Film" },
    { id: 5, url: image5, title: "Live Performance", category: "Performance" },
    {
      id: 6,
      url: image6,
      title: "Interactive Art Installation",
      category: "Art",
    },
    { id: 7, url: image7, title: "Networking Event", category: "Events" },
    { id: 8, url: image8, title: "Designer Showcase", category: "Fashion" },
    { id: 9, url: image9, title: "Awards Ceremony", category: "Events" },
  ];

  const openImage = (index: number) => setSelectedImage(index);
  const closeDialog = () => setSelectedImage(null);

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header omitted for brevity */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/3] bg-gray-800"
              onClick={() => openImage(index)}
            >
              {/* NEXT.JS IMAGE - GRID VIEW */}
              <Image
                src={image.url}
                alt={image.title}
                fill // Uses parent container aspect ratio
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block bg-purple-500/80 text-white text-xs px-3 py-1 rounded-full mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
              {/* Zoom Icon omitted for brevity */}
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeDialog}
          >
            {/* Nav buttons omitted for brevity */}

            <div
              className="max-w-6xl max-h-[80vh] w-full h-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* NEXT.JS IMAGE - MODAL VIEW */}
              <Image
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].title}
                fill
                priority // Ensures the large modal image loads instantly
                className="object-contain"
              />
            </div>

            {/* Image Info Panel */}
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-between">
                  {/* Info text... */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};