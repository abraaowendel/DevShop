import * as C from "../Profile/styled.js";
import { Menu } from "../../components/menu/index.jsx";
import { useState } from "react";

const Address = () => {

  const [address, setAddress] = useState({
    id: "",
    fullName: "Perfil de testes",
    phone: "(82) 98123-4567",
    street: "Rua ficticia",
    number: "SN",
    cep: "12345-000",
    district: "Cruz das almas",
    city: "Cidade de teste",
    state: "Alagoas",
    complement: "Em frente ao mercado"
  });

  return (
    <C.Container>
      <Menu/>
      <C.SideRight>
        <h1>Meus Endereços</h1>
        <p>Gerencie seus endereços</p>
        <div>
          <div>
            <div>
              <span><b>{address.fullName}</b></span>
              <span> | </span>
              <span>{address.phone}</span>
            </div>
            <div>
              <span>{address.street}, </span>
              <span>{address.number}, </span>
              <span>{address.complement}, </span>
              <span>{address.district}</span>
            </div>
            <div>
              <span>{address.city}, </span>
              <span>{address.state}, </span>
              <span>{address.cep}</span>
            </div>
          </div>
          <div>
            <div>
              <button>Editar</button>
              <button>Excluir</button>
            </div>
            <button>Definir como padrão</button>
          </div>
        </div>
      </C.SideRight>
    </C.Container>
  );
};

export default Address;
