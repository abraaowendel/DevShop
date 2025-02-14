import Carrousel from "../../components/carrousel";
import * as C from "./styled";
import i1 from "../../assets/tshirts/t-shirt-01.png"
import i2 from "../../assets/tshirts/t-shirt-02.png"
import i3 from "../../assets/tshirts/t-shirt-03.png"

import ScrollReveal from 'scrollreveal';


import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1200,
      reset: true
    });

    sr.reveal('.fade-in', { delay: 200 });
    sr.reveal('.fade-up', { origin: 'bottom' });
  }, []);
  
  return (
    <C.Container>
      <C.SectionSlide>
        <Carrousel/>
      </C.SectionSlide>
      <C.SectionProduct>
        <C.Title>PRODUTOS EM OFERTA</C.Title>
        <C.Cards className="fade-in">
          <C.LinkStyled to={`/ofertas/1`}>
            <img src={i1} alt="" />
            <h3>T-Shirt Basic - Branca</h3>
            <p><span>R$ 250,00</span> R$ 150,00</p>
            <p>ou 3 x R$ 50,00</p>
          </C.LinkStyled>
          <C.LinkStyled to={`/ofertas/2`}>
            <img src={i2} alt="" />
            <h3>T-Shirt Basic - Cinza</h3>
            <p><span>R$ 250,00</span> R$ 120,00</p>
            <p>ou 3 x R$ 40,00</p>
          </C.LinkStyled> 
          <C.LinkStyled to={`/ofertas/3`}>
            <img src={i3} alt="" />
            <h3>T-Shirt Basic - Vermelha</h3>
            <p><span>R$ 250,00</span> R$ 120,00</p>
            <p>ou 3 x R$ 40,00</p>
          </C.LinkStyled>
        </C.Cards>
      </C.SectionProduct>
    </C.Container>
  );
};

export default Home;
