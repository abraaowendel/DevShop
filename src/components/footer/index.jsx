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
                    <div>
                        <FaInstagram size={40} color="#000"/>
                        <FaFacebookF size={35} color="#000"/>
                        <FaTwitter size={40} color="#000"/>
                    </div>
                </C.Social>
            </C.Content>
        </C.Footer>
    );
}

