import styled, { keyframes } from 'styled-components';

// Animação de pulso
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: .1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Componente Container estilizado
export const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 140px);
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;

    h1 {
        color: #000;
        font-size: 60px;
        text-align: center;
        margin-bottom: 30px;
        animation: ${pulse} 1.5s infinite; /* Ajustado para duração mais suave */
    }

    a {
        background-color: #000;
        color: #fff;
        padding: 15px 30px;
        text-decoration: none; /* Remover o sublinhado padrão */
        border-radius: 4px; /* Adiciona bordas arredondadas */
        font-size: 16px; /* Ajusta o tamanho da fonte */
        transition: background-color 0.3s ease; /* Suaviza a transição do hover */
        
        &:hover {
            background-color: #111;
        }
    }
`;
