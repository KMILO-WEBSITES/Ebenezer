import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import '../assets/css/components/corousel-event.css';

import image1 from '../assets/images/event1.jpg';
import image2 from '../assets/images/event2.jpg';
import image3 from '../assets/images/event3.jpg';
import image4 from '../assets/images/event4.jpg';


export const CarouselEvent = () => {      
     
    return (
      <>
      <Swiper
        className="swiper-event"
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src={image2}/></SwiperSlide>
        <SwiperSlide><img src={image3}/></SwiperSlide>
        <SwiperSlide><img src={image4}/></SwiperSlide>
      </Swiper>
    </>
    );
  }
  
  