import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/e0.jpg", "/imgs/e1.jpg", "/imgs/e2.jpg", "/imgs/e3.jpg", "/imgs/e4.jpg",
  "/imgs/e5.jpg", "/imgs/e6.jpg", "/imgs/e7.jpg", "/imgs/e8.jpg", "/imgs/e9.jpg",
  "/imgs/e10.jpg", "/imgs/e11.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Egypt University of Informatics (EUI)
        </h2>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <ImageGallery
          items={images}
          autoPlay={true}
          slideInterval={4000}
          showThumbnails={true}
          showFullscreenButton={true}
          showPlayButton={false}
        />
      </div>
    </section>
  );
};

export default Highlights;
