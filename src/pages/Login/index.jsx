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
        <label htmlFor="">E-MAIL</label>
        <div>
          <span>
            <FaUser className="icon" fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="email"
            placeholder="ex.: seunome@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <label htmlFor="">SENHA</label>
        <div>
          <span>
            <GiPadlock className="icon" fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <C.LinkText style={{textAlign: "end", color: "#000"}}>
          <Link to="/reset">Esqueceu sua senha?</Link>
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
