import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css";

// Add images to array
const images = [
  "/imgs/su1.jpg", "/imgs/su2.JPG", "/imgs/su3.JPG", "/imgs/su4.jpg", "/imgs/su5.JPG",
  "/imgs/su6.jpg", "/imgs/su7.jpg", "/imgs/su8.jpg", "/imgs/su9.jpg", "/imgs/su10.JPG",
  "/imgs/su11.jpg", "/imgs/su12.jpg", "/imgs/su13.jpg", "/imgs/su14.jpg", "/imgs/su15.JPG",
  "/imgs/su16.jpg", "/imgs/su17.jpg", "/imgs/su18.jpg", "/imgs/su19.jpg", "/imgs/su20.jpg", "/imgs/su21.JPG"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Summit: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          AI Caravan Summit, Egypt
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

export default Summit;