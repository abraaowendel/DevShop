import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as C from "./styled";

export const Item = () => {
  const { id } = useParams();
  const  idProduto  = parseInt(id);

  const [item, setItem] = useState([]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Camiseta Básica Preta",
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

  useEffect(() => {
    products.find((i) => {
      if (idProduto === i.id) {
        setItem(i)
      }
    });
  }, []);

  return (
    <C.Container>
      {item && (
        <C.Sides>
          <C.SideLeft>
            <img src={item.image} alt="" />
          </C.SideLeft>
          <C.SideRight>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
            <h3>R$ {item.price}</h3>
            3 x{" "}
              {(item.price / 3).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            <ul>
               <li>P</li> 
               <li>M</li> 
               <li>G</li> 
               <li>GG</li> 
            </ul>
            <button>Adicionar ao Carrinho</button>
          </C.SideRight>
        </C.Sides>
      )}
    </C.Container>
  );
};

export default Item;
