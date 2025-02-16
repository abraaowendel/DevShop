import { Link } from "react-router-dom";
import * as C from "./styled";

export const ItemSale = ({ props }) => {
  return (
    <C.ProductLink to={`/${props.url}/${props.item.id}`}>
      {props.item.discount != 0 && <div>ECONOMIZE {props.item.discount}%</div>}
      {props.item.discount === 0 && (
        <div style={{ backgroundColor: "transparent" }}>ECONOMIZE</div>
      )}
      <img src={props.item.src} alt="" />
      <h3>{props.item.name}</h3>
      <p>
        {props.item.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        <span>
          {props.item.discount !== 0 &&
            (props.item.price / (1 - props.item.discount / 100)).toLocaleString(
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
        {(props.item.price / 3).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </C.ProductLink>
  );
};
