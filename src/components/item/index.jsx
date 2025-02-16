import * as C from "./styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../loading";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



export const Item = ({data}) => {
  console.log(data)
  const { id } = useParams();
  const idProduto = parseInt(id);

  const [item, setItem] = useState([]);
  const [selectedSize, setSelectedSize] = useState("P");
  const [count, setCount] = useState(1);
  const [products, setProducts] = useState([]);
  let url = window.location.pathname;

  useEffect(() => {
    let json;
    if (url.includes("camisas")) {
      json = [
        {
          id: 1,
          productName: "Camiseta Backend Preta",
          desc: "",
          price: 59.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/237795018/camisa-back-end-pride-preta-02354e44-geqc1055zu.png",
          discount: 10,
        },
        {
          id: 2,
          productName: "Camiseta !False Preta",
          desc: "",
          price: 59.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/102113470/3bb53679ba.jpg",
          discount: 10,
        },
        {
          id: 13,
          productName: "Camiseta Piada Dev Preta",
          desc: "",
          price: 59.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/287626094/camisa-errado-mais-t--funcionando-insevx46lo.jpg",
          discount: 10,
        },
        {
          id: 4,
          productName: "Camiseta Tech Suport Preta",
          desc: "",
          price: 59.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/221152188/camisa-tech-support-definition-preta-3a35729c.png",
          discount: 10,
        },
        {
          id: 5,
          productName: "Camiseta com Logo Minimalista",
          desc: "",
          price: 59.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/130221950/ac8fe9f499.jpg",
          discount: 20,
        },
        {
          id: 6,
          productName: "Camiseta T-Rex Game Preta",
          desc: "",
          price: 99.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/102460820/c2d44fc0fe.jpg",
          discount: 15,
        },
        {
          id: 7,
          productName: "Camiseta CSS IS Awesome Preta",
          desc: "",
          price: 59.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/153700878/02ad351fb7.jpg",
          discount: 20,
        },
        {
          id: 8,
          productName: "Camiseta PHP Preta",
          desc: "",
          price: 99.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/242028720/camisa-php-tmdmqims7k.png",
          discount: 10,
        },
        {
          id: 9,
          productName: "Camiseta Resenha Dev Preta",
          desc: "",
          price: 99.99,
          src:
            "https://cdn.awsli.com.br/600x450/608/608801/produto/158137472/93b0f45c77.jpg",
          discount: 10,
        },
      ];
    }
    if (url.includes("moletons")) {
      json = [
        {
          id: 1,
          productName: "Moletom Dev Frontend Preto",
          desc: "",
          price: 179.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379334.png",
          discount: 10,
        },
        {
          id: 2,
          productName: "Moletom Python Preto",
          desc: "",
          price: 199.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379387.png",
          discount: 10,
        },
        {
          id: 13,
          productName: "Moletom Github Preto",
          desc: "",
          price: 149.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379222.png",
          discount: 5,
        },
        {
          id: 4,
          productName: "Moletom Dev Backend Preto",
          desc: "",
          price: 159.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379425.png",
          discount: 10,
        },
        {
          id: 5,
          productName: "Moletom Linux Branco",
          desc: "",
          price: 129.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Branco_1379295.png",
          discount: 30,
        },
        {
          id: 6,
          productName: "Moletom VSCode Preto",
          desc: "",
          price: 119.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379408.png",
          discount: 40,
        },
        {
          id: 7,
          productName: "Moletom Acessa o GitHub Preto",
          desc: "",
          price: 99.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379175.png",
          discount: 50,
        },
        {
          id: 8,
          productName: "Moletom Rotina Dev Preto",
          desc: "",
          price: 149.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Preto_1379217.png",
          discount: 20,
        },
        {
          id: 9,
          productName: "Moletom Node.js Branco",
          desc: "",
          price: 149.99,
          src:
            "https://montink.s3.amazonaws.com/mockups/226692/Branco_1379352.png",
          discount: 20,
        },
      ];
    }
    if(url.includes("bermudas")){
      return;
    }
    if(url.includes("ofertas")){
      json = [
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
      ]
    }
    setProducts(json);
    carregarProduto(json);
  }, []);

  const carregarProduto = (json) => {
    let req = json.find((i) => {
      if (idProduto === i.id) {
        setItem(i);
        return i;
      }
    });
    req == undefined ? (window.location.href = "/404") : "";
  };

  return (
    <C.Container>
      {!item && <Loading />}
      {item && (
        <C.Sides>
          <C.SideLeft>
            <Zoom>
              <img 
                src={item.src} 
                alt={item.productName} 
                />
            </Zoom>
          </C.SideLeft>
          <C.SideRight>
            <h1>{item.productName}</h1>
            <p>{item.desc}</p>
            <h3>
              {(item.price + 0).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h3>
            <p>
              {" "}
              3 x{" "}
              {(item.price / 3).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <div className="reviews">
              <ul className="rating">
                <li className="star">★</li>
                <li className="star">★</li>
                <li className="star">★</li>
                <li className="star">★</li>
                <li className="star">★</li>
              </ul>
              <p>Sem Avaliações</p> {/* MUDAR ISSO QUANDO TIVER API */}
            </div>
            <h4>Tamanho: {selectedSize}</h4>
            <div className="btns">
              {["P", "M", "G", "GG"].map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setCount(1);
                  }}
                  className={size === selectedSize ? "size active" : "size"}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="quantityAvailable">
              Apenas {} 5 unidades disponíveis
            </p>
            <h4>Quantidade:</h4>
            <div className="btnCount">
              <button
                onClick={() => {
                  count > 1 ? setCount(count - 1) : "";
                }}
              >
                <CgMathMinus color="#000" />
              </button>
              <span>{count}</span>
              <button onClick={() => setCount(count + 1)}>
                <CgMathPlus color="#000" />
              </button>
            </div>
            <button className="btnAddCart">Adicionar ao Carrinho</button>
          </C.SideRight>
        </C.Sides>
      )}
      {}
    </C.Container>
  );
};

export default Item;
