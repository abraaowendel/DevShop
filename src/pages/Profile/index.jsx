import { useState } from "react";
import { Menu } from "../../components/menu";
import * as C from "./styled";

const Profile = () => {
  const [profile, setProfile] = useState({
    id: "",
    fullName: "Perfil de testes",
    email: "emailteste@email.com",
    phone: "82981123456",
    gender: "man",
    cpf: "123.456.789-10",
    birthday: "01/01/2000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile, // Copia todas as propriedades do estado anterior
      [name]: value, // Atualiza apenas a propriedade correspondente ao campo alterado
    }));
  };
  return (
    <C.Container>
      <Menu />
      <C.SideRight>
        <h1>Meu perfil</h1>
        <p>Gerenciar e proteger sua contas</p>
        <form action="">
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
          />
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
          />
          <label htmlFor="phone">Telefone</label>
          <div>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
            <span>
              <label htmlFor="cpf">CPF</label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                disabled
                value={profile.cpf}
                onChange={handleChange}
              />
            </span>
          </div>
          <label htmlFor="birthday">Data de Nascimento</label>
          <div>
            <input
              type="date"
              id="birthday"
              name="birthday"
              value={profile.birthday}
              onChange={handleChange}
            />
            <span>
              <label htmlFor="gender">Gênero</label>
              <select
                name="gender"
                id="gender"
                value={profile.gender}
                onChange={handleChange}
              >
                <option value="man">Masculino</option>
                <option value="woman">Feminino</option>
                <option value="others">Outros</option>
              </select>
            </span>
          </div>
          <button>Salvar</button>
        </form>
      </C.SideRight>
    </C.Container>
  );
};
export default Profile;
