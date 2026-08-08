import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/sut00.jfif", "/imgs/sut01.jfif", "/imgs/sut02.jfif", "/imgs/sut03.jfif", "/imgs/sut04.jfif",
  "/imgs/sut05.jfif", "/imgs/sut06.jfif", "/imgs/sut07.jfif", "/imgs/sut08.jfif", "/imgs/sut09.jfif",
  "/imgs/sut10.jfif", "/imgs/sut11.jfif", "/imgs/sut12.jfif", "/imgs/sut13.jfif", "/imgs/sut14.jfif",
  "/imgs/sut15.jfif", "/imgs/sut16.jfif", "/imgs/sut17.jfif", "/imgs/sut18.jfif", "/imgs/sut19.jfif",
  "/imgs/sut20.jfif"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4">
          Elsewedy University of Technology (SUT)
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

