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
  p {
    color: #fff;
    letter-spacing: 1.5px;
  }
`;
export const Account = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    cursor: pointer;
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
`;
export const Sides = styled.div`
  max-width: 1200px;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSide = styled.div`
  ul {
    text-decoration: none;
    display: flex;
    a {
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
  }
`;
export const Logo = styled.img`
  cursor: pointer;
`;
export const Menu = styled.div``;
