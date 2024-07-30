import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";

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
        <C.Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <C.Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <C.Button type="submit">Entrar</C.Button>
        <C.LinkText>
            Não tem uma conta? <Link to="/register">Criar uma conta</Link>
        </C.LinkText>
      </C.Form>
    </C.Container>
  );
};

export default Login;
