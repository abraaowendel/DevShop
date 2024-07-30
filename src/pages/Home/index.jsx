import Carousel from "../../components/carousel";
import * as C from "./styled";

import i1 from "../../assets/tshirts/t-shirt-01.png"
import i2 from "../../assets/tshirts/t-shirt-02.png"
import i3 from "../../assets/tshirts/t-shirt-03.png"

const Home = () => {
  return (
    <C.Container>
      <C.SectionSlide>
        <Carousel/>
      </C.SectionSlide>
      <C.SectionProduct>
        <C.Title>PRODUTOS EM OFERTA</C.Title>
        <C.Cards>
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
