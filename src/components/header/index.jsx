import * as C from "./styled";
import Logo from "../../assets/icons/Logo.svg";
import { IoPerson } from "react-icons/io5";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Header = () => {
  
  const [inputValue, setInputValue] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [condition2, setCondition2] = useState(false);

  const location = useLocation().pathname;

  const handleSearchClick = () => {
    setIsExpanded(true);
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

  const handleMenu = () => {
    document.querySelector("ul").classList.toggle("active");
    setIsOpen(!isOpen);
  };

  return (
    <>
     {/*  {location == "/login" && (
        <C.HeaderLogin>
          <C.Logo src={Logo} alt="Logo escrito Devs" />
        </C.HeaderLogin>
      )}
      {location == "/signup" && (
        <C.HeaderLogin>
          <C.Logo src={Logo} alt="Logo escrito Devs" />
        </C.HeaderLogin>
      )} */}
      {location !== "/signup" && location !== "/login" && (
        <C.Header>
          <C.Container style={{position: isOpen? "fixed":"static"}}
          >
            <p>FRETE GRÁTIS PARA TODO BRASIL</p>
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
            <IoPerson
              fontSize={22}
              style={{ margin: " 0 20px 0 10px" }}
              onClick={() => (window.location.href = "/account/profile")}
            />
            <FaShoppingCart fontSize={22} />
          </C.Account>
          <C.Sides>
            <C.LeftSide>
              <C.Logo
                src={Logo}
                alt="Logo escrito Devs"
                onClick={() => (window.location.href = "/")}
                style={{position: isOpen? "fixed":"static"}}
              />
            </C.LeftSide>
            <C.RightSide>
              <ul>
                <a href="/camisas">
                  <li>CAMISAS</li>
                </a>
                <a href="/moletons">
                  <li>MOLETONS</li>
                </a>
                {/* <a href="/bermudas">
                  <li>BERMUDAS</li>
                </a> */}

                {!isOpen && (
                  <TbMenu2
                    className="menu"
                    fontSize={55}
                    color="#000"
                    onClick={handleMenu}
                  />
                )}
                {isOpen && (
                  <MdClose
                    className="menu"
                    fontSize={55}
                    color="#000"
                    onClick={handleMenu}
                  />
                )}

                {condition2 && (
                  <>
                    <a href="">
                      <li>Minha Conta</li>
                    </a>
                    <a href="">
                      <li>Carrinho</li>
                    </a>
                  </>
                )}
                {condition2 && (
                  /* AQUI TERÁ UM COMPONENTE DE PESQUISA */
                  <div></div>
                )}
              </ul>
            </C.RightSide>
          </C.Sides>
        </C.Header>
      )}
    </>
  );
};
