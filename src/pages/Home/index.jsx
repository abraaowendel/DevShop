import Carrousel from "../../components/carrousel";
import * as C from "./styled";

import ScrollReveal from "scrollreveal";

import { useEffect, useState } from "react";
import { Products } from "../../components/products";

const Home = () => {
  //AQUI SERÁ CHAMADA UMA REQUISACAO PARA TRAZER OS BANNERS
  const [products, setProducts] = useState([
    {
      id: 1,
      desc: "",
      productName: "T-Shirt Basic - Branca",
      price: 150.0,
      src: "https://i.imgur.com/uIeujfv.png",
      discount: "",
    },
    {
      id: 2,
      desc: "",
      productName: "T-Shirt Basic - Cinza",
      price: 150.0,
      src: "https://i.imgur.com/VOZ1G97.png",
      discount: "",
    },
    {
      id: 3,
      desc: "",
      productName: "T-Shirt Basic - Vermelha",
      price: 150.0,
      src: "https://i.imgur.com/1nkQgd4.png",
      discount: "",
    },
  ]);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1200,
      reset: true,
    });

    sr.reveal(".fade-in", { delay: 200 });
    sr.reveal(".fade-up", { origin: "bottom" });
  }, []);

  return (
    <C.Container>
      <C.SectionSlide>
        <Carrousel />
      </C.SectionSlide>
      <C.SectionProduct>
        <C.Title>PRODUTOS EM OFERTA</C.Title>
        <C.Cards className="fade-in">
          <Products props={products} url="ofertas" />
        </C.Cards>
        </C.SectionProduct>
    </C.Container>
  );
};

export default Home;
