"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

type ImageSwiperProps = {
  images: string[];
};

const ImageSwiper = ({ images }: ImageSwiperProps) => {
  const [selectImage, setSelectImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < images.length - visibleCount) {
      setStartIndex(startIndex + 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 1199) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full mt-20">
      <Image
        src={`/images/projects/${selectImage}.jpg`}
        alt="선택된 이미지"
        width={1000}
        height={600}
        className="w-full h-[550px] mobile:h-[250px] bg-cover rounded-[5px] border border-[#404040]"
      />
      <div className="flex justify-center items-center gap-5">
        <FaRegArrowAltCircleLeft
          className={`text-[40px] cursor-pointer ${
            startIndex === 0 ? "text-[#737373] cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
        />
        <div className="flex justify-center items-center w-full max-w-[1000px] gap-3 overflow-hidden">
          {images
            .slice(startIndex, startIndex + visibleCount)
            .map((image, index) => (
              <Image
                key={index}
                src={`/images/projects/${image}.jpg`}
                alt={`포트폴리오 사이트 이미지 ${index + 1}`}
                width={300}
                height={200}
                className={`w-full max-w-[300px] h-[200px] mobile:w-[220px] mobile:h-[150px] rounded-[5px] object-cover cursor-pointer ${
                  selectImage === image
                    ? "border-2 border-[#A3A3A3]"
                    : "border border-[#404040]"
                }`}
                onClick={() => setSelectImage(image)}
              />
            ))}
        </div>
        <FaRegArrowAltCircleRight
          className={`text-[40px] cursor-pointer ${
            startIndex >= images.length - visibleCount
              ? "text-[#737373] cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageSwiper;
