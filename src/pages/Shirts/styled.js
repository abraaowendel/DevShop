import styled, {keyframes} from "styled-components";

export const pulse = keyframes`
  0% {
    opacity: 0;
  }
  100%{ 
    opacity: 1;
  }
`;
export const Container = styled.div`
  min-height: 100vh;
  max-width: 992px;
  margin: auto;
  padding: 80px 0;
`;
export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 60px;
  span{
    letter-spacing: 1.1px;
    font-size: 14px;
  }
  select{
    border-color: #B5B5B5;
    color: #111;
    cursor: pointer;
    margin-left: 5px;
    padding: 10px 30px 10px 5px;
    line-height: 34px;
    option{
      font-size: 16px;
      cursor: pointer;
    }
  }
`
export const Painel = styled.div`
  background-color: #000;
  padding: 30px;
  margin-bottom: 30px;
  h1{
    font-size: 80px;
    color: #fff;
    text-align: center;
    animation: ${pulse} 2s infinite;
  }
`