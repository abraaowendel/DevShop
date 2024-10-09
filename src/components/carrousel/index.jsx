import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

import i1 from "../../assets/backgrounds/banner-01.png"
import i2 from "../../assets/backgrounds/banner-02.png"
import i3 from "../../assets/backgrounds/banner-03.png"



const Carrousel = () => {

  const images = [
    i1,i2,i3
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
      <SwiperSlide style={{ backgroundImage: `url(${images[0]})`}}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${images[1]})` }}></SwiperSlide>
      <SwiperSlide style={{ backgroundImage: `url(${images[2]})` }}></SwiperSlide>
    </Swiper>
  );
};

export default Carrousel;