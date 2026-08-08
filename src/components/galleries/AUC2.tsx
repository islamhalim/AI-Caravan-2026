import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/j0.jpg", "/imgs/j1.jpg", "/imgs/j2.jpg", "/imgs/j3.jpg", "/imgs/j4.jpg",
  "/imgs/j5.jpg", "/imgs/j6.jpg", "/imgs/j7.jpg", "/imgs/j8.jpg", "/imgs/j9.jpg",
  "/imgs/j10.jpg", "/imgs/j11.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="Highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          American University in Cairo (AUC) 
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

