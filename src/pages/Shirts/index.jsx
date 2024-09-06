import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { Products } from "../../components/products";
import * as C from "./styled";

const Shirts = () => {

  const [products, setProducts] = useState([
    {
      "name": "Camiseta Básica Preta",
      "price": 39.99,
      "image": "https://exemplo.com/camisetas/preta.jpg"
    },
    {
      "name": "Camiseta Estampada Rock",
      "price": 49.99,
      "image": "https://exemplo.com/camisetas/rock.jpg"
    },
    {
      "name": "Camiseta Manga Longa Listrada",
      "price": 59.99,
      "image": "https://exemplo.com/camisetas/listrada.jpg"
    },
    {
      "name": "Camiseta Oversized Branca",
      "price": 45.99,
      "image": "https://exemplo.com/camisetas/branca.jpg"
    },
    {
      "name": "Camiseta com Logo Minimalista",
      "price": 35.99,
      "image": "https://exemplo.com/camisetas/minimalista.jpg"
    },
    {
      "name": "Camiseta Regata Fitness",
      "price": 29.99,
      "image": "https://exemplo.com/camisetas/regata.jpg"
    },
    {
      "name": "Camiseta Polo Algodão Egípcio",
      "price": 69.99,
      "image": "https://lh3.googleusercontent.com/gg/AJIvXivuPje6t5bQfjiUbltvMIIpIZMwBmCP1BNZIwJz_ASPdYGXR8Q00l37eRwzFhtkJroGGMJ_l9fOycdr-8xJDA4sLxghQdg6asmMCTo4rRch_C2vY2NdQYFezVl13mPYuHkLZk8YVyN6n5sjiOYnPRhERKtPUCU6_5oi13ecI2Ftg-NeawQD"
    },
    {
      "name": "Camiseta Tie-Dye Colorida",
      "price": 49.99,
      "image": "https://exemplo.com/camisetas/tie-dye.jpg"
    }
  ]);

  /* useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
 */
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
            <select>
              <option value="asc">Ordem alfabética, A-Z</option>
              <option value="desc">Ordem alfabética, Z-A</option>
              <option value="maior">Maior preço</option>
              <option value="menor">Menor preço</option>
            </select>
          </C.Filter>
          <Products props={products} />
        </>
      )}
    </C.Container>
  );
};

export default Shirts;
