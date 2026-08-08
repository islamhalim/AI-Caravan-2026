import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/tu1.jpg", "/imgs/tu2.jpg", "/imgs/tu3.jpg", "/imgs/tu4.jpg", "/imgs/tu5.jpg",
  "/imgs/tu6.jpg", "/imgs/tu7.jpg", "/imgs/tu8.jpg", "/imgs/tu9.jpg", "/imgs/tu10.jpg",
  "/imgs/tu11.jpg", "/imgs/tu12.jpg", "/imgs/tu13.jpg", "/imgs/tu14.jpg", "/imgs/tu15.jpg",
  "/imgs/tu16.jpg", "/imgs/tu17.jpg", "/imgs/tu18.jpg", "/imgs/tu19.jpg", "/imgs/tu20.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Tunisia: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          AfroTech Intelligence Congress (ATIC), Tunisia
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

export default Tunisia;

