import { useState } from "react";
import { Link } from "react-router-dom";
import * as C from "./styled";

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
      </C.Form>
    </C.Container>  
  );
};

export default Registrar;
