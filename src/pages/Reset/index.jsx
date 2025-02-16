import * as C from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Reset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("E-mail enviado com sucesso")
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <h1>Alterar Senha</h1>
        <label htmlFor="">E-MAIL</label>
        <div>
          <span>
            <MdEmail fontSize={23} color="#fff" />
          </span>
          <C.Input
            type="email"
            placeholder="ex.: seunome@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <C.Button type="submit">Enviar e-mail</C.Button>
      </C.Form>
    </C.Container>
  );
};
export default Reset;
