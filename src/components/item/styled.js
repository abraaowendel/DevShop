import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 300px);
  max-width: 992px;
  margin: auto;
  font-family: "Inter";
  
`;

export const Sides = styled.div`
  display: flex;
 
 

`;
export const SideLeft = styled.div`
 img {
    height: 400px;
  }
`
export const SideRight = styled.div`
 h1 {
    font-size: 30px;
    color: #000;
  }
  h3 {
    font-size: 26px;
  }
  button {
    background-color: #000;
    color: #fff;
    font-size: 16px;
    padding: 15px 20px;
    border-radius: 5px;
    border-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: #222;
    }
  }
  ul {
    display: flex;
    margin: 20px 0;
    li {
      border: 1px solid #ccc;
      font-size: 18px;
      padding: 10px;
      list-style: none;
      font-weight: bold;
      cursor: pointer;
      &:hover{
        background-color: #ddd;
      }
    }
  }
`
