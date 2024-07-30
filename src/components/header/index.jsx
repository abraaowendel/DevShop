import * as C from "./styled";
import Logo from "../../assets/icons/Logo.svg";
import { IoPerson } from "react-icons/io5";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export const Header = () => {

  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); 
  const [condition, setCondition] = useState(false);
  const [condition2, setCondition2] = useState(false);

  const handleSearchClick = () => {
    setIsExpanded(true); // Expand on search click
  };

  const handleBlur = (event) => {
    if (inputValue === "" && !event.target.closest(".C.Search")) {
      setIsExpanded(false);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsExpanded(true);
  };

  return (
    <C.Header>
      <C.Container>
        <p>FRETE FIXO R$ 9.99 PARA TODO BRASIL</p>
      </C.Container>
      <C.Account>
        <C.Search className={isExpanded ? "active" : ""}>
          <input
            type="text"
            placeholder="BUSCAR"
            value={inputValue}
            onChange={handleInputChange}
            required
            onFocus={handleSearchClick}
            onBlur={handleBlur}
          />
          <FaSearch
            fontSize={20}
            style={{ margin: "0 10px" }}
            onClick={() => {
              if (inputValue === "") {
                alert(`ERRO`);
              }
            }}
          />
        </C.Search>
        <IoPerson fontSize={22} style={{ margin: " 0 20px 0 10px" }} onClick={() => window.location.href = "/login"}/>
        <FaShoppingCart fontSize={22} />
      </C.Account>
      <C.Sides>
        <C.LeftSide>
          <C.Logo src={Logo} alt="Logo escrito DevShop" onClick={() => window.location.href = "/"}/>
        </C.LeftSide>
        <C.RightSide>
     
          <ul>
            <a href="/camisas">
              <li>CAMISAS</li>
            </a>
            <a href="/moletons">
              <li>MOLETONS</li>
            </a>
            <a href="/bermudas">
              <li>BERMUDAS</li>
            </a>
            <a href="/calcas">
              <li>CALÇAS</li>
            </a>
            {condition &&
                <>      
                    <a href="">
                        <li>Minha Conta</li>
                    </a> 
                    <a href="">
                        <li>Carrinho</li>
                    </a>
                </>
            }
            {condition2 &&
                /* AQUI TERÁ UM COMPONENTE DE PESQUISA */
                <div>

                </div>
            }
          </ul>
        </C.RightSide>
      </C.Sides>
    </C.Header>
  );
};
