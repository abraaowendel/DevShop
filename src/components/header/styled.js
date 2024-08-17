import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;
export const Container = styled.div`
  background-color: #000;
  text-align: center;
  padding: 5px;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  p {
    color: #fff;
    letter-spacing: 1.5px;
  }
  @media (max-width: 992px) {
    font-size: 13px;
  }
`;
export const Account = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 10px 30px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    cursor: pointer;
  }
  @media (max-width: 992px) {
    svg {
      display: none;
    }
    .menu {
      display: block;
    }
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  transition: 0.5s all ease;
  border: 1px solid transparent;
  padding: 8px 0;
  &.active {
    border: 1px solid #ccc;
    padding: 8px 10px 8px 20px;
  }
  input {
    border: 0;
    outline-color: transparent;
    transition: 0.5s all ease;
    &::placeholder {
      text-align: center;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;
export const Sides = styled.div`
  position: relative;
  max-width: 1200px;
  margin: auto;
  padding: 20px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 992px) {
    padding: 15px 30px;
  }
`;
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;
export const HeaderLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
export const RightSide = styled.div`
 
  ul {
    transition: all .3s ease-in-out;
    text-decoration: none;
    display: flex;
    align-items: center;
    a {
      display: block;
      color: #555;
      cursor: pointer;
      padding-left: 15px;
      li {
        list-style: none;
        letter-spacing: 1.2px;
      }
      &:hover {
        color: #000;
      }
    }
    .menu {
      display: none;
      position: absolute;
      top: 21px;
      right: 25px;
      z-index: 99;
    }
  
    @media (max-width: 992px) {
      transition: all .2s ease-in;
      right: -50vw;
      a{      
        display: none;
      }
  
      .menu {
        display: flex;
      }
      &.active {
        transition: all .2s ease-in;
        z-index: 98;
        position: fixed;
        top: 0;
        right: 0;
        justify-content: center;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;
        overflow: hidden;
        background-color: #fff;
        display: flex; /* Certifique-se de que o menu é exibido como flex */
        .menu{
          top: 60px;
        }
        /* Estilos para o conteúdo do menu */
        a {
          display: block;
          color: #000;
          font-size: 25px;
          padding: 40px 60px;
        }
      }
    }
  }
`;
export const Logo = styled.img`
  cursor: pointer;
  z-index: 99;
  top: 61px;
  @media (max-width: 992px) {
     position: absolute;
     height: 60px;
  }
  @media (max-width: 590px) {
     height: 50px;
  }
`;
export const Menu = styled.div``;
