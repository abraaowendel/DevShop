import * as C from "../Profile/styled.js"
import { Menu } from "../../components/menu/index.jsx";
import { useState } from "react";

const ChangePassword = () => {

    const [password, setPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <C.Container>
              <Menu />
              <C.SideRight>
                <h1>Alterar minha senha</h1>
                <p>Gerenciar e proteger sua conta</p>
                <form action={handleSubmit}>
                  <label htmlFor="password">Senha atual</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />  
                  <label htmlFor="newPassword">Nova Senha</label>
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />  
                  <label htmlFor="confirmPassword">Confirmar Senha</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button>Alterar senha</button>
                </form>
              </C.SideRight>
            </C.Container>
    );
}
export default ChangePassword;

