import { teamSlider } from "../data";

// import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../slider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const TeamSlider = () => {
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={"auto"}
      
      autoplay={{ delay: 2000 }}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {teamSlider.map((slide, index) => {
        // Destructure
        const { image } = slide;
        //  slide
        return (
          <SwiperSlide
            className="pt-[60px] px-[35px] pb-[50px] flex items-start gap-x-[30px] "
            key={index}
          >
            <img
              src={`/img/slider/${image}`}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TeamSlider;
