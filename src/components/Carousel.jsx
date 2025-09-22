import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      img: "https://picsum.photos/1200/400?1",
    },
    {
      id: 2,
      img: "https://picsum.photos/1200/400?2",
    },
    {
      id: 3,
      img: "https://picsum.photos/1200/400?3",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-2xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
