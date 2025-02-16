import * as C from "./styled";
import { ItemSale } from "../itemSale";

export const Products = ({ props, url }) => {
  return (
    <C.Cards className="fade-in">
        {props &&
          props.map((item, key) => (
            <ItemSale key={key} props={{item, url}}/>
        ))}
    </C.Cards>
  );
};
