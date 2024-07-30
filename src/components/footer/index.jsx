import * as C from "./styled";
import SigaDevs from "../../assets/icons/SigaDevs.svg";
import Powered from "../../assets/icons/Powered.svg";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
  return (
    <C.Footer>
      <C.Content>
        <C.Social>
          <img src={SigaDevs} alt="" />
          <div>
            <FaInstagram size={40} color="#000" />
            <FaFacebookF size={35} color="#000" />
            <FaTwitter size={40} color="#000" />
          </div>
        </C.Social>
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
