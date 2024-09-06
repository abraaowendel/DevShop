import * as C from "./styled";

export const Products = ({ props }) => {
  return (
    <C.Cards className="fade-in">
      {props &&
        props.map((item, key) => (
          <C.Card key={key}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p><span>R$ {(item.price * 20  / 100 + item.price).toFixed(2)}</span> R$ {(item.price).toFixed(2)}</p>
              <p>ou 6 x R$ {(item.price / 6).toFixed(2)}</p>
          </C.Card>
        ))}
    </C.Cards>
  );
};
