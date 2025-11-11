// src/components/hero/Hero.jsx
import React from "react";
import styled from "styled-components";
import HeroSwiper from "../../components/swiper/Swiper";

const HeroSection = styled.div`
  width: 100%;
  position: relative;
`;

const SwiperContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1.5rem 2rem;

  .swiper {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <SwiperContainer>
        <HeroSwiper />
      </SwiperContainer>
    </HeroSection>
  );
};

export default Hero;