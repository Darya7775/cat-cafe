import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini
} from "./style";

function Gallery({ gallery }) {
  return (
    <>
      <StyledSwiper spaceBetween={20} loop>
        {gallery.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyleSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop
        >
          {gallery.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyleSlideMini src={slide.src} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
      </SliderWrapper>
    </>
  );
}

export default Gallery;
