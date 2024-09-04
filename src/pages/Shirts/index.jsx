import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { Products } from "../../components/products";
import * as C from "./styled";
import ScrollReveal from "scrollreveal";

const Shirts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);


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
            <select name="" id="">
              <option value="">Nome</option>
              <option value="">Maior preço</option>
              <option value="">Menor preço</option>
            </select>
          </C.Filter>
          <Products props={products} />
        </>
      )}
    </C.Container>
  );
};

export default Shirts;
