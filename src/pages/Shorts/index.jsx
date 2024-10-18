import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { Products } from "../../components/products";
import * as C from "./styled";

const Shorts = () => {
  
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Camiseta Backend Preta",
      desc: "",
      price: 39.99,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/237795018/camisa-back-end-pride-preta-02354e44-geqc1055zu.png",
      discount: 0,
    },
    {
      id: 2,
      name: "Camiseta Estampada Rock",
      desc: "",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/102113470/3bb53679ba.jpg",
      discount: 0,
    },
    {
      id: 13,
      name: "Camiseta Manga Longa Listrada",
      desc: "",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/287626094/camisa-errado-mais-t--funcionando-insevx46lo.jpg",
        discount: 0,
      },
    {
      id: 4,
      name: "Camiseta Oversized Branca",
      desc: "",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/221152188/camisa-tech-support-definition-preta-3a35729c.png",
        discount: 0,
      },
    {
      id: 5,
      name: "Camiseta com Logo Minimalista",
      desc: "",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/130221950/ac8fe9f499.jpg",
        discount: 20,
      },
    {
      id: 6,
      name: "Camiseta Regata Fitness",
      desc: "",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/102460820/c2d44fc0fe.jpg",
        discount: 0,

      },
    {
      id: 7,
      name: "Camiseta Polo Algodão Egípcio",
      desc: "",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/153700878/02ad351fb7.jpg",
      discount: 20,
      },
    {
      id: 8,
      name: "Camiseta Tie-Dye Colorida",
      desc: "",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/242028720/camisa-php-tmdmqims7k.png",
      discount: 20,
      },
  ]);
  const [sortOrder, setSortOrder] = useState("desc");

  /* useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
 */


  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  }, [sortOrder]);


  return (
    <C.Container>
      {!products && <Loading />}
      {products && (
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
          <Products props={products} url="camisas" />
        </C.Context>
      )}
    </C.Container>
  );
};

export default Shorts;
