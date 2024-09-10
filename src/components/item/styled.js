import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  min-height: calc(100vh - 300px);
  font-family: "Inter", "Arial";
`;

export const Sides = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SideLeft = styled.div`
  width: 55%;
  img {
    height: 400px;
  }
`;
export const SideRight = styled.div`
  h1 {
    font-size: 30px;
    color: #000;
    text-transform: uppercase;
  }
  h3 {
    font-size: 26px;
  }
  h4{
    margin: 20px 0 10px;
  }
  .btns{
    margin-bottom: 20px;
  }
  .size{
    background-color: #F5F5F5;
    color: #000;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  .size.active{
    border-color: #000;
  }
  button {
    color: #fff;
    font-size: 16px;
    padding: 15px 20px;
    border-radius: 5px;
    border-color: transparent;
    cursor: pointer;
    &:hover {
      opacity: .9;
    }
  }
  .btnCount{
    border: 1px solid #ccc;
    max-width: 160px;
    margin-bottom: 25px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button{
      background-color: transparent;
      color: #000;
      font-size: 20px;
    }
  }
  .btnAddCart{
    width: 100%;
    background-color: #2E9E7B;
  }
`;
