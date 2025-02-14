import * as C from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";

const Registrar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <h1>Registrar</h1>
        <div>
          <span>
            <FaUser fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <span>
            <GiPadlock fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <C.Button type="submit">Criar uma conta</C.Button>
        <C.LinkText>
          Já tem uma conta? <Link to="/login">Entrar</Link>
        </C.LinkText>
      </C.Form>
    </C.Container>
  );
};

export default Registrar;
