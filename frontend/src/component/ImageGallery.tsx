import React, { useState } from "react";

const ImageGallery: React.FC = () => {
  const thumbnails = [
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide4.png",
  ];

  const [mainImage, setMainImage] = useState<string>(thumbnails[0]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Image principale */}
      <div className="w-full max-w-6xl ">
        <img
          src={mainImage}
          alt="Main"
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Miniatures */}
      <div className="grid grid-cols-4 max-w-4xl gap-4">
        {thumbnails.map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumb ${index + 1}`}
            className="rounded-lg md:h-24 h-14 object-cover cursor-pointer hover:opacity-80 transition"
            onClick={() => setMainImage(thumb)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
