import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/cs01.png", "/imgs/cs02.png", "/imgs/cs03.png", "/imgs/cs04.png", "/imgs/cs05.png",
  "/imgs/cs06.png", "/imgs/cs07.png", "/imgs/cs08.png", "/imgs/cs09.png", "/imgs/cs10.png",
  "/imgs/cs11.png", "/imgs/cs12.png", "/imgs/cs13.png", "/imgs/cs14.png", "/imgs/cs15.png",
  "/imgs/cs16.png", "/imgs/cs17.png", "/imgs/cs18.png", "/imgs/cs19.png", "/imgs/cs20.png"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
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

