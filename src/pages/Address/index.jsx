import * as C from "../Profile/styled.js";
import { Menu } from "../../components/menu/index.jsx";
import { useState } from "react";

const Address = () => {
  const [address, setAddress] = useState([{
    id: "",
    fullName: "Perfil de testes",
    phone: "(82) 98123-4567",
    street: "Rua ficticia",
    number: "SN",
    cep: "12345-000",
    district: "Cruz das almas",
    city: "Cidade de teste",
    state: "Alagoas",
    complement: "Em frente ao mercado",
  }, {
    id: "",
    fullName: "Perfil de testes",
    phone: "(82) 98123-4567",
    street: "Rua ficticia",
    number: "SN",
    cep: "12345-000",
    district: "Cruz das almas",
    city: "Cidade de teste",
    state: "Alagoas",
    complement: "Em frente ao mercado",
  }, {
    id: "",
    fullName: "Perfil de testes",
    phone: "(82) 98123-4567",
    street: "Rua ficticia",
    number: "SN",
    cep: "12345-000",
    district: "Cruz das almas",
    city: "Cidade de teste",
    state: "Alagoas",
    complement: "Em frente ao mercado",
  }]);

  return (
    <C.Container>
      <Menu />
      <C.SideRight>
        <h1>Meus Endereços</h1>
        <p>Gerencie seus endereços</p>
        <C.Addresses>
          {address.map((item, key) => (
            <C.ItemAddress key={key}>
              <C.ItemAddressLeft>
                <C.ItemAddressTop>
                  <span>
                    <b>{item.fullName}</b>
                  </span>
                  <span> | </span>
                  <span>{item.phone}</span>
                </C.ItemAddressTop>
                <C.ItemAddressCenter>
                  <span>{item.street}, </span>
                  <span>{item.number}, </span>
                  <span>{item.complement}, </span>
                  <span>{item.district}</span>
                </C.ItemAddressCenter>
                <C.ItemAddressBottom>
                  <span>{item.city}, </span>
                  <span>{item.state}, </span>
                  <span>{item.cep}</span>
                </C.ItemAddressBottom>
              </C.ItemAddressLeft>
              <C.Options>
                <C.OptionsTop>
                  <button>Editar</button>
                  <button>Excluir</button>
                </C.OptionsTop>
                <button>Definir como padrão</button>
              </C.Options>
            </C.ItemAddress>
          ))}
        </C.Addresses>
      </C.SideRight>
    </C.Container>
  );
};

export default Address;
