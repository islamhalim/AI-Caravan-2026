import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/k1.jpg", "/imgs/k2.jpg", "/imgs/k3.jpg", "/imgs/k4.jpg", "/imgs/k5.jpg",
  "/imgs/k6.jpg", "/imgs/k7.jpg", "/imgs/k8.jpg", "/imgs/k9.jpg", "/imgs/k10.jpg",
  "/imgs/k11.jpg", "/imgs/k12.jpg", "/imgs/k13.jpg", "/imgs/k14.jpg", "/imgs/k15.jpg",
  "/imgs/k16.jpg", "/imgs/k17.jpg", "/imgs/k18.jpg", "/imgs/k19.jpg", "/imgs/k20.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Kenya: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Dedan Kimathi University of Technology (DeKUT), Kenya
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

export default Kenya;

