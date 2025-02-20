import * as C from "../Profile/styled.js";
import { Menu } from "../../components/menu/index.jsx";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { ModalNewAddress } from "../../components/modals/modalNewAddress.jsx";

const Address = () => {
  const [address, setAddress] = useState([
    {
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
      default: true,
    },
    {
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
      default: false,
    },
    {
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
      default: false,
    },
  ]);

  const [showModalNewAddress, setShowModalNewAddress] = useState(false);

  const handleShowModalNewAdress = () => {
    setShowModalNewAddress(!showModalNewAddress);
  }
  
  return (
    <C.Container>
      <Menu />
      <C.SideRight>
        <h1>Meus Endereços</h1>
        <C.SideRightTop>
          <p>Gerencie seus endereços</p>
          <button onClick={handleShowModalNewAdress}><IoMdAdd style={{marginRight: "5px"}} fontSize={20} /> Inserir novo endereço</button>
        </C.SideRightTop>
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
                {item.default && <C.ItemDefault>Padrão</C.ItemDefault>}
              </C.ItemAddressLeft>
              <C.Options>
                <C.OptionsTop>
                  <button>Editar</button>
                  {!item.default &&                
                    <button>Excluir</button>
                  }
                </C.OptionsTop>
                <button disabled={item.default}>Definir como padrão</button> 
              </C.Options>
            </C.ItemAddress>
          ))}
        </C.Addresses>
      </C.SideRight>
      {showModalNewAddress &&      
        <ModalNewAddress/>
      }
    </C.Container>
  );
};

export default Address;
