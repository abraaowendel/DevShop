import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  min-height: calc(100vh - 300px);
  font-family: "Inter", "Arial";
  padding-bottom: 80px;
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
    color: #282828;
    text-transform: uppercase;
  }
  h3 {
    font-size: 24px;
    color: #ff0000;
    padding: 5px 0 3px;
  }
  p {
    font-size: 15px;
  }
  h4 {
    margin: 15px 0 10px;
  }
  .reviews{
    display: flex;
    align-items: center;
    padding: 5px 0 15px;
    border-bottom: 1px solid #ccc;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      li {
        font-size: 20px;
        color: #F5D5A3;
        cursor: pointer;
        user-select: none;
      }
    }
    p{
      margin: 0 5px -3px;
      line-height: 27px;
      font-weight: 600;
      font-size: 14px;
    }
  }
  .quantityAvailable{
    color: #ff0000;
    font-weight: bold;
    letter-spacing: 1.01px;
  }
  .btns {
    margin-bottom: 20px;
  }
  .size {
    background-color: #f5f5f5;
    color: #000;
    border: 1px solid #ccc;
    margin-right: 10px;
  }
  .size.active {
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
      opacity: 0.9;
    }
  }
  .btnCount {
    border: 1px solid #ccc;
    max-width: 160px;
    margin-bottom: 25px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: transparent;
      color: #000;
      font-size: 20px;
    }
  }
  .btnAddCart {
    width: 100%;
    background-color: #2e9e7b;
  }
`;
