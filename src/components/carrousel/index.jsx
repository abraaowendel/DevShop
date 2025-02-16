import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";



const Carrousel = () => {
  
  //AQUI SERÁ CHAMADA UMA REQUISACAO PARA TRAZER OS BANNERS
  const images = [{
    src: "https://i.imgur.com/OFVLlql.png", 
    alt: "Vem ai novidades!"
  },{
    src: "https://i.imgur.com/p2QXbDD.png", 
    alt: "Frete gratis"
  },{
    src: "https://i.imgur.com/gHaj2Y7.png", 
    alt: "Até 50% off" 
  },{
    src: "https://i.imgur.com/TyKXOsf.png", 
    alt: "Moda Masculina"
  }];
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0} // Espaço entre slides
      slidesPerView={1} // Número de slides visíveis // Adiciona setas de navegação
      pagination={{ clickable: true }} // Paginação com bullets
      autoplay={{ delay: 3000 }} // Slide automático a cada 3 segundos
      loop // Permite o loop infinito
    >
      {    
        images.map((item, key) => (
          <SwiperSlide key={key} style={{ backgroundImage: `url(${item.src})` }} alt={item.alt} />
        ))
      }
    </Swiper>
  );
};

export default Carrousel;
