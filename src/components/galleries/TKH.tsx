import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/TKH00.jpg", "/imgs/TKH01.jpg", "/imgs/TKH02.jpg", "/imgs/TKH03.jpg", "/imgs/TKH04.jpg",
  "/imgs/TKH05.jpg", "/imgs/TKH06.jpg", "/imgs/TKH07.jpg", "/imgs/TKH08.jpg", "/imgs/TKH09.jpg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          The Knowledge Hub Universities (TKH)

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

