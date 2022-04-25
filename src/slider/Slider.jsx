import React from 'react'
import './slider.css'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    scrollbar={{ draggable: true }}
  >
    <SwiperSlide>
      <div className="slide-box">
      <img className='swiper-1' src="slide4.jpg" alt="slide-1" />
      <div className="text-box firs">
        <div className="text-2">We are Service</div>
        <div className="text-1">Fill Your cart !!</div>
      </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="slide-box">
      <img className='swiper-1' src="slide6.jpg" alt="slide-1" />
      <div className="text-box">
        <div className="text-2">We are Brand</div>
        <div className="text-1">Shop with Us !!</div>
      </div>
      </div>
    </SwiperSlide>
   </Swiper>
  )
}

export default Slider
