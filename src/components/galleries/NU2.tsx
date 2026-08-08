
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/nn0.jpg", "/imgs/nn1.jpg", "/imgs/nn2.jpg", "/imgs/nn3.jpg", "/imgs/nn4.jpg",
  "/imgs/nn5.jpg", "/imgs/nn6.jpg", "/imgs/nn7.jpg", "/imgs/nn8.jpg", "/imgs/nn9.jpg",
  "/imgs/nn10.jpg", "/imgs/nn11.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="Highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Nile University (NU)
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

