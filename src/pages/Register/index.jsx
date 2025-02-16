import * as C from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Register = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <h1>Cadastrar nova conta</h1>
        <label htmlFor="">NOME COMPLETO</label>
        <div>
          <span>
            <FaUser fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="text"
            placeholder="ex.: Maria Luiza"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <label htmlFor="">E-MAIL</label>
        <div>
          <span>
            <MdEmail fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="email"
            placeholder="ex.: seunome@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <label>
          SENHA
        </label>
        <div>
          <span>
            <GiPadlock fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
          <label htmlFor="">CONFIRMAR SENHA</label>
        <div>
          <span>
            <GiPadlock fontSize={23} color="#fff"/>
          </span>
          <C.Input
            type="password"
            placeholder=""
            value={passwordRepeat}
            onChange={(e) => setRepeatPassword(e.target.value)}
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

export default Register;
