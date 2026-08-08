
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/g1.jpg", "/imgs/g2.jpg", "/imgs/g3.jpg", "/imgs/g4.jpg", "/imgs/g5.jpg",
  "/imgs/g6.jpg", "/imgs/g7.jpg", "/imgs/g8.jpg", "/imgs/g9.jpg", "/imgs/g10.jpg",
  "/imgs/g11.jpg", "/imgs/g12.jpg", "/imgs/g13.jpg", "/imgs/g14.jpg", "/imgs/g15.jpg",
  "/imgs/g16.jpg", "/imgs/g17.jpg", "/imgs/g18.jpg", "/imgs/g19.jpg", "/imgs/g20.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
       <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          German University in Cairo (GUC)
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

