
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/u0.jpg", "/imgs/u1.jpg", "/imgs/u2.jpg", "/imgs/u3.jpg", "/imgs/u4.jpg",
  "/imgs/u5.jpg", "/imgs/u6.jpg", "/imgs/u7.jpg", "/imgs/u8.jpg", "/imgs/u9.jpg",
  "/imgs/u10.jpg", "/imgs/u11.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
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

