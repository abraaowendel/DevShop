import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

const Carousel = () => {
  const images = [
    "/src/assets/backgrounds/image1.png",
    "/src/assets/backgrounds/image1.png",
    "/src/assets/backgrounds/image1.png"
  ]
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0} // Espaço entre slides
      slidesPerView={1} // Número de slides visíveis // Adiciona setas de navegação
      pagination={{ clickable: true }} // Paginação com bullets
      autoplay={{ delay: 3000 }} // Slide automático a cada 3 segundos
      loop // Permite o loop infinito
    >
      <SwiperSlide style={{ backgroundImage: `url(${images[2]})`}}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${images[2]})` }}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${images[2]})` }}></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;