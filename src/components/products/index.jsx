import { Link } from "react-router-dom";
import * as C from "./styled";

export const Products = ({ props }) => {
  return (
    <C.Cards className="fade-in">
      {props &&
        props.map((item, key) => (
          <C.LinkStyled to={`/camisas/${item.id}`} key={key}>
            {item.discount != 0 && <div>ECONOMIZE {item.discount}%</div>}
            {item.discount === 0 && (
              <div style={{ backgroundColor: "transparent" }}>ECONOMIZE</div>
            )}

            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>
              {item.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              <span>
                {item.discount !== 0 &&
                  (item.price / (1 - item.discount / 100)).toLocaleString(
                    "pt-BR",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
              </span>
            </p>
            <p className="p-black">
              3 x{" "}
              {(item.price / 3).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </C.LinkStyled>
        ))}
    </C.Cards>
  );
};
