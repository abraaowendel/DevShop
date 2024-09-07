import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { Products } from "../../components/products";
import * as C from "./styled";

const Shirts = () => {
  const [products, setProducts] = useState([
    {
      name: "Camiseta Básica Preta",
      price: 39.99,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/237795018/camisa-back-end-pride-preta-02354e44-geqc1055zu.png",
        discount: 0,
    },
    {
      name: "Camiseta Estampada Rock",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/102113470/3bb53679ba.jpg",
        discount: 5,
    },
    {
      name: "Camiseta Manga Longa Listrada",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/287626094/camisa-errado-mais-t--funcionando-insevx46lo.jpg",
        discount: 14,
      },
    {
      name: "Camiseta Oversized Branca",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/221152188/camisa-tech-support-definition-preta-3a35729c.png",
        discount: 20,
      },
    {
      name: "Camiseta com Logo Minimalista",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/130221950/ac8fe9f499.jpg",
        discount: 20,
      },
    {
      name: "Camiseta Regata Fitness",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/102460820/c2d44fc0fe.jpg",
        discount: 20,

      },
    {
      name: "Camiseta Polo Algodão Egípcio",
      price: 100,
      image:
        "https://cdn.awsli.com.br/600x450/608/608801/produto/153700878/02ad351fb7.jpg",
      discount: 20,
      },
    {
      name: "Camiseta Tie-Dye Colorida",
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
        <>
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
          <Products props={products} />
        </>
      )}
    </C.Container>
  );
};

export default Shirts;
