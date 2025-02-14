import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";
import { GiPadlock } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <div>
          <span>
            <FaUser className="icon" fontSize={23} color="#fff"/>
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
            <GiPadlock className="icon" fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <C.LinkText style={{textAlign: "end", color: "#000"}}>
          <Link to="/forgot">Esqueceu sua senha?</Link>
        </C.LinkText>
        <C.Button type="submit">Entrar</C.Button>
        <C.LinkText>
            Não tem uma conta? <Link to="/signup">Criar uma conta</Link>
        </C.LinkText>
      </C.Form>
    </C.Container>
  );
};

export default Login;
