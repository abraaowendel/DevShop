import * as C from "./styled";
import SigaDevs from "../../assets/icons/SigaDevs.svg";
import Powered from "../../assets/icons/Powered.svg";
import FormasDePagamento from "../../assets/icons/formas_pagamento.png";
import SeloGoogle from "../../assets/icons/selo-google.png";
import SeloClearSale from "../../assets/icons/selo-clear-sale.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <C.Footer>
      <C.Content>
        <C.Social>
          <img src={SigaDevs} alt="SIGA A DEVS" />
          <C.SocialIcons>
            <FaInstagram size={40} color="#000" />
            <FaFacebookF size={35} color="#000" />
            <FaTwitter size={40} color="#000" />
          </C.SocialIcons>
        </C.Social>
        <C.Info>
          <C.PaymentsMethods>
            <h3>FORMAS DE PAGAMENTO</h3>
            <img src={FormasDePagamento} alt="" />
          </C.PaymentsMethods>
         <C.Certifications>
            <h3>CERTIFICAÇÕES</h3>
            <div>
              <img src={SeloGoogle} alt="Selo do Google" />
              <img src={SeloClearSale} alt="Selo ClearSale" />
            </div>
          </C.Certifications>
        </C.Info>
      </C.Content>
      <C.Copyright>
        <p>
          Copyright © {new Date().getFullYear()} Loja Devs - CNPJ
          12.345.678/XXXX-01 - Todos os direitos reservados.
        </p>
        <div>
          <a
            href="https://abraaowendel.github.io/portfolio/"
            target="_blank"
            alt="Ir para o desenvolvedor do site"
          >
            Desenvolvido por
          </a>
          <img src={Powered} alt="Logo AW Systems"  />
        </div>
      </C.Copyright>
    </C.Footer>
  );
};
