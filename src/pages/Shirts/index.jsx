import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { Products } from "../../components/products";
import * as C from "./styled";
import ScrollReveal from "scrollreveal";

const Shirts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=9")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1200,
      reset: true,
    });

    sr.reveal(".fade-in", { delay: 800 });
    sr.reveal(".fade-up", { origin: "bottom" });
  }, []);

  return (
    <C.Container>
      {!products && <Loading />}
      {products && (
        <>
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
