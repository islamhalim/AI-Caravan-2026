import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/AAST01.jpg", "/imgs/AAST02.jpg", "/imgs/AAST03.jpg", "/imgs/AAST04.jpg", "/imgs/AAST05.jpg",
  "/imgs/AAST06.jpg", "/imgs/AAST07.jpg", "/imgs/AAST08.jpg", "/imgs/AAST09.jpg", "/imgs/AAST10.jpg",
  "/imgs/AAST11.jpg", "/imgs/AAST12.jpg", "/imgs/AAST13.jpg", "/imgs/AAST14.jpg", "/imgs/AAST15.jpg",
  "/imgs/AAST16.jpeg", "/imgs/AAST17.jpg", "/imgs/AAST18.jpg", "/imgs/AAST19.jpg", "/imgs/AAST20.jpeg"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Arab Academy for Science, Technology & Maritime Transport (AASTMT)
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

