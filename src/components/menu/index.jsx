import * as C from "./styled";
import { IoPersonSharp } from "react-icons/io5";
import { RiShoppingBagFill } from "react-icons/ri";
import { FaExchangeAlt } from "react-icons/fa";
import { BsHouseGearFill } from "react-icons/bs";

export const Menu = () => {
  return (
    <C.Container>
      <C.SideLeft>
        <a href="/account/profile">
          <IoPersonSharp fontSize={18} />
          <p>Meu perfil</p>
        </a>
        <a href="/account/orders">
          <RiShoppingBagFill fontSize={18} />
          <p>Meus Pedidos</p>
        </a>
        <a href="/account/address">
          <BsHouseGearFill fontSize={18} />
          <p>Endereços</p>
        </a>
        <a href="/account/change-password">
          <FaExchangeAlt fontSize={18} />
          <p>Trocar Senha</p>
        </a>
      </C.SideLeft>
    </C.Container>
  );
};
