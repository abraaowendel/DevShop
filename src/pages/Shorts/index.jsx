import * as C from "./styled";
import { useEffect, useState } from "react";
import { Loading } from "../../components/loading";
import { Products } from "../../components/products";

const Shorts = () => {
  
  const [products, setProducts] = useState([]);
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
      {products.length == 0 && <Loading />}
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
