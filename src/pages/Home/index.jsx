import Carousel from "../../components/carousel";
import * as C from "./styled";

const Home = () => {
  return (
    <C.Container>
      <C.SectionSlide>
        <Carousel/>
      </C.SectionSlide>
      <C.SectionProduct>produto</C.SectionProduct>
    </C.Container>
  );
};

export default Home;
