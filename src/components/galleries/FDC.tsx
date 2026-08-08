import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/d0.png", "/imgs/d1.png", "/imgs/d2.png", "/imgs/d3.png", "/imgs/d4.png",
  "/imgs/d5.png", "/imgs/d6.png", "/imgs/d7.png", "/imgs/d8.png", "/imgs/d12.png",
  "/imgs/d9.png", "/imgs/d10.png", "/imgs/d11.png"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const FDC: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
       <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          FDC Summit
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

export default FDC;

