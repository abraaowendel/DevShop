import * as C from "./styled";
import Logo from "../../assets/Logo.svg";
import SigaDevs from "../../assets/SigaDevs.svg";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export const Footer = () => {
    return ( 
        <C.Footer>
            <C.Content>
                <C.Social>
                    <img src={SigaDevs} alt="" />
                    <FaInstagram size={45} color="#fff"/>
                    <FaTwitter size={45} color="#fff"/>
                    <FaFacebookF size={45} color="#fff"/>
                </C.Social>
            </C.Content>
        </C.Footer>
    );
}

