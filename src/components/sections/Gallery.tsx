import { useState } from "react";
import { X } from "lucide-react";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageItem {
  original: string;
  thumbnail: string;
}

const images: ImageItem[] = [
  { original: "/imgs/c0.png", thumbnail: "/imgs/c0.png" },
  { original: "/imgs/c1.png", thumbnail: "/imgs/c1.png" },
  { original: "/imgs/c2.png", thumbnail: "/imgs/c2.png" },
  { original: "/imgs/c3.png", thumbnail: "/imgs/c3.png" },
  { original: "/imgs/cc1.png", thumbnail: "/imgs/cc1.png" },
  { original: "/imgs/cc2.png", thumbnail: "/imgs/cc2.png" },
  { original: "/imgs/c4.png", thumbnail: "/imgs/c4.png" },
  { original: "/imgs/c5.png", thumbnail: "/imgs/c5.png" },
  { original: "/imgs/c6.png", thumbnail: "/imgs/c6.png" },
  { original: "/imgs/c7.png", thumbnail: "/imgs/c7.png" },
  { original: "/imgs/c8.png", thumbnail: "/imgs/c8.png" },
  { original: "/imgs/cc3.png", thumbnail: "/imgs/cc3.png" },
  { original: "/imgs/cc4.png", thumbnail: "/imgs/cc4.png" },
  { original: "/imgs/c10.png", thumbnail: "/imgs/c10.png" },
  { original: "/imgs/c11.png", thumbnail: "/imgs/c11.png" },
  { original: "/imgs/c12.png", thumbnail: "/imgs/c12.png" },
  { original: "/imgs/c13.png", thumbnail: "/imgs/c13.png" },
  { original: "/imgs/c9.png", thumbnail: "/imgs/c9.png" },
  { original: "/imgs/c14.png", thumbnail: "/imgs/c14.png" },
  { original: "/imgs/c15.png", thumbnail: "/imgs/c15.png" },
  { original: "/imgs/c16.png", thumbnail: "/imgs/c16.png" },
  { original: "/imgs/c17.png", thumbnail: "/imgs/c17.png" },
  { original: "/imgs/c18.png", thumbnail: "/imgs/c18.png" },
  { original: "/imgs/c19.png", thumbnail: "/imgs/c19.png" },
  { original: "/imgs/c20.png", thumbnail: "/imgs/c20.png" },
  { original: "/imgs/c21.png", thumbnail: "/imgs/c21.png" },
  { original: "/imgs/c22.png", thumbnail: "/imgs/c22.png" },
  { original: "/imgs/c23.png", thumbnail: "/imgs/c23.png" },
  { original: "/imgs/c24.png", thumbnail: "/imgs/c24.png" },
  { original: "/imgs/c25.png", thumbnail: "/imgs/c25.png" },
  { original: "/imgs/c26.png", thumbnail: "/imgs/c26.png" },
  { original: "/imgs/c27.png", thumbnail: "/imgs/c27.png" },
  { original: "/imgs/c28.png", thumbnail: "/imgs/c28.png" },
  { original: "/imgs/c29.png", thumbnail: "/imgs/c29.png" },
  { original: "/imgs/c30.png", thumbnail: "/imgs/c30.png" },
  { original: "/imgs/c31.png", thumbnail: "/imgs/c31.png" },
];


import TopSection from '../TopSection';

const Gallery = () => {const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <TopSection
        title="IEEE Computer Society Gallery"
        subtitle="Showcasing the activities of IEEE Computer Society in Egypt."
      />
      <section id="CSactivities" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Responsive Grid Layout for Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              // Add onClick handler here to show the maximized image
              onClick={() => handleImageClick(image)} 
              // Styling for each grid item: rounded corners, shadow, hover effects, and aspect ratio for uniform size
              className="group relative overflow-hidden rounded-xl shadow-lg aspect-square cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              aria-label={`Gallery Image ${index + 1}`} 
            >
              <img
                src={image.original}
                alt={`Event Photo ${index + 1}`}
                // Image sizing and hover zoom effect
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                // Fallback for missing images
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; 
                    target.src = 'https://placehold.co/400x400/CCCCCC/333333?text=Image+Missing';
                }}
              />
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Image Maximization Modal --- */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleCloseModal} // Close on backdrop click
          aria-modal="true"
          role="dialog"
        >
          <div 
            className="relative bg-transparent rounded-lg max-w-5xl w-full max-h-[90vh]" 
            onClick={e => e.stopPropagation()} // Prevent modal close when clicking inside the content
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Maximized Image */}
            <img 
              src={selectedImage.original} 
              alt="Maximized event photo" 
              className="max-h-[85vh] w-auto mx-auto object-contain rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
      {/* --- End Image Maximization Modal --- */}
    </section>
    </>
  );

}

export default Gallery;
