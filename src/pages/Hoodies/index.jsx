import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import * as C from "./styled";
import { Products } from "../../components/products";

const Hoodies = () => {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      name: "Moletom Dev Frontend Preto",
      desc: "",
      price: 179.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379334.png",
      discount: 10,
    },
    {
      id: 2,
      name: "Moletom Python Preto",
      desc: "",
      price: 199.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379387.png",
      discount: 10,
    },
    {
      id: 13,
      name: "Moletom Github Preto",
      desc: "",
      price: 149.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379222.png",
      discount: 5,
    },
    {
      id: 4,
      name: "Moletom Dev Backend Preto",
      desc: "",
      price: 159.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379425.png",
      discount: 10,
    },
    {
      id: 5,
      name: "Moletom Linux Branco",
      desc: "",
      price: 129.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Branco_1379295.png",
      discount: 30,
    },
    {
      id: 6,
      name: "Moletom VSCode Preto",
      desc: "",
      price: 119.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379408.png",
      discount: 40,
    },
    {
      id: 7,
      name: "Moletom Acessa o GitHub Preto",
      desc: "",
      price: 99.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379175.png",
      discount: 50,
    },
    {
      id: 8,
      name: "Moletom Rotina Dev Preto",
      desc: "",
      price: 149.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379217.png",
      discount: 20,
    },
    {
      id: 9,
      name: "Moletom Node.js Branco",
      desc: "",
      price: 149.99,
      image:
        "https://montink.s3.amazonaws.com/mockups/226692/Branco_1379352.png",
      discount: 20,
    },
  ]);

  const [sortOrder, setSortOrder] = useState("desc");
  useEffect(() => {
    const sortedProducts = [...produtos].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setProdutos(sortedProducts);
  }, [sortOrder]);

  return (
    <C.Container>
      {!produtos && <Loading />}
      {produtos && (
        <C.Context>
          <C.Painel>
            <h1>OFERTAS</h1>
          </C.Painel>
          <C.Filter>
            <span>ORDERNAR POR:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">Maior preço</option>
              <option value="asc">Menor preço</option>
            </select>
          </C.Filter>
          <Products props={produtos} url="moletons" />
        </C.Context>
      )}
    </C.Container>
  );
};

export default Hoodies;
