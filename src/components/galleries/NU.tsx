import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../ui/ImageGalleryStyles.css"; // Your custom file

// Add images to array
const images = [
  "/imgs/nu00.jfif", "/imgs/nu01.jfif", "/imgs/nu02.jfif", "/imgs/nu03.jfif", "/imgs/nu04.jfif",
  "/imgs/nu05.jfif", "/imgs/nu06.jfif", "/imgs/nu07.jfif", "/imgs/nu08.jfif", "/imgs/nu09.jfif",
  "/imgs/nu10.jfif", "/imgs/nu11.jfif", "/imgs/nu12.jfif", "/imgs/nu13.jfif", "/imgs/nu14.jfif",
  "/imgs/nu15.jfif", "/imgs/nu16.jfif", "/imgs/nu17.jfif", "/imgs/nu18.jfif", "/imgs/nu19.jfif",
  "/imgs/nu20.jfif", "/imgs/nu21.jfif", "/imgs/nu22.jfif", "/imgs/nu23.jfif", "/imgs/nu24.jfif",
  "/imgs/nu25.jfif", "/imgs/nu26.jfif", "/imgs/nu27.jfif", "/imgs/nu28.jfif", "/imgs/nu29.jfif",
  "/imgs/nu30.jfif", "/imgs/nu31.jfif", "/imgs/nu32.jfif", "/imgs/nu33.jfif", "/imgs/nu34.jfif",
  "/imgs/nu35.jfif", "/imgs/nu36.jfif", "/imgs/nu37.jfif", "/imgs/nu38.jfif", "/imgs/nu39.jfif",
  "/imgs/nu40.jfif", "/imgs/nu41.jfif", "/imgs/nu42.jfif", "/imgs/nu43.jfif", "/imgs/nu44.jfif",
  "/imgs/nu45.jfif", "/imgs/nu46.jfif", "/imgs/nu47.jfif", "/imgs/nu48.jfif", "/imgs/nu49.jfif",
  "/imgs/nu50.jfif", "/imgs/nu51.jfif", "/imgs/nu52.jfif", "/imgs/nu53.jfif", "/imgs/nu54.jfif",
  "/imgs/nu55.jfif"
].map((img) => ({
  original: img,
  thumbnail: img,
}));

const Highlights: React.FC = () => {
  return (
    <section id="highlights" className="py-10 bg-white">
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

