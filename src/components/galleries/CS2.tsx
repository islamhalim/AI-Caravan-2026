import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/ee0.jpg", "/imgs/ee1.jpg", "/imgs/ee2.jpg", "/imgs/ee3.jpg", "/imgs/ee4.jpg",
  "/imgs/ee5.jpg", "/imgs/ee6.jpg", "/imgs/ee7.jpg", "/imgs/ee8.jpg", "/imgs/ee9.jpg",
  "/imgs/ee10.jpg", "/imgs/ee11.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="Highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          IEEE Computer Society R8 (Online)
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

