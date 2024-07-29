import Carousel from "../../components/carousel";
import * as C from "./styled";

const Home = () => {
  return (
    <C.Container>
      <C.SectionSlide>
        <Carousel/>
      </C.SectionSlide>
      <C.SectionProduct>
        <C.Title>EM OFERTA</C.Title>
        <C.Cards>
          <C.Card>Card</C.Card>
          <C.Card>Card</C.Card>
          <C.Card>Card</C.Card>
        </C.Cards>
      </C.SectionProduct>
    </C.Container>
  );
};

export default Home;
