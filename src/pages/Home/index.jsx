import Carrousel from "../../components/carrousel";
import * as C from "./styled";

import ScrollReveal from 'scrollreveal';

import i1 from "../../assets/tshirts/t-shirt-01.png"
import i2 from "../../assets/tshirts/t-shirt-02.png"
import i3 from "../../assets/tshirts/t-shirt-03.png"
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
          <C.Card>
            <img src={i1} alt="" />
            <h3>T-Shirt Basic - Branca</h3>
            <p><span>R$ 452,00</span> R$ 299,00</p>
            <p>ou 6 x R$ 49,83</p>
          </C.Card>
          <C.Card>
            <img src={i2} alt="" />
            <h3>T-Shirt Basic - Cinza</h3>
            <p><span>R$ 452,00</span> R$ 299,00</p>
            <p>ou 6 x R$ 49,83</p>
          </C.Card>
          <C.Card>
            <img src={i3} alt="" />
            <h3>T-Shirt Basic - Vermelha</h3>
            <p><span>R$ 452,00</span> R$ 299,00</p>
            <p>ou 6 x R$ 49,83</p>
          </C.Card>
        </C.Cards>
      </C.SectionProduct>
    </C.Container>
  );
};

export default Home;
