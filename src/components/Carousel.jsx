// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "../assets/images/main0.jpeg";
import img2 from "../assets/images/main1.jpeg";
import img3 from "../assets/images/main2.jpeg";
import "../assets/css/components/carousels.css";

export const Carousel = () => {
  return (
    <>    
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
        className="swiper-slide"
      >
        <SwiperSlide><img src={img1}/></SwiperSlide>
        <SwiperSlide><img src={img2}/></SwiperSlide>
        <SwiperSlide><img src={img3}/></SwiperSlide>
      </Swiper>
    </>
  );
}

