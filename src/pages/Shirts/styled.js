import styled, {keyframes} from "styled-components";

export const pulse = keyframes`
  to{
    opacity: 0;
  }
`;
export const Container = styled.div`
  min-height: 100vh;
  max-width: 992px;
  width: 100%;
  margin: auto;
  padding: 30px 0 80px;
  @media (max-width: 768px) {
    padding: 0px 0 80px;
  }
`;
export const Context = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`
export const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding-bottom: 30px;
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
  @media (max-width: 992px) {
    padding: 0 20px 30px 0;
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
  @media (max-width: 768px) {
    h1{
      font-size: 60px;
    }
  }
  @media (max-width: 590px) {
    h1{
      font-size: 45px;
    }

  }
`