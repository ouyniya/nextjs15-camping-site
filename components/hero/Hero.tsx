"use client";

import { landmarkCardProps } from "@/utils/types";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = ({ landmarks }: { landmarks: landmarkCardProps[] }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {landmarks.map((landmark) => (
          <SwiperSlide key={landmark.id} className="group">
            <div className="relative rounded-md overflow-hidden">
              <img
                src={landmark.image}
                alt={landmark.name}
                className="w-full h-[600px] object-cover brightness-75 group-hover:brightness-50 transform-all duration-1000"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Hero;
