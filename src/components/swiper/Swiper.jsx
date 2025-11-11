import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import oneImg from "../../assets/oneImg.jpg";
import twoImg from "../../assets/twoImg.avif";
import threeImg from "../../assets/thereImg.jpg";

// массив слайдов
const sliderData = [
  { img: oneImg },
  { img: twoImg },
  { img: threeImg },
];

const Swiper = () => {
  return (
    <SwiperComponent
      modules={[Navigation, Autoplay]}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={1000}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      className="simple-swiper"
    >
      {sliderData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="image-container">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        </SwiperSlide>
      ))}
      <div className="custom-prev">‹</div>
      <div className="custom-next">›</div>
    </SwiperComponent>
  );
};

export default Swiper;
