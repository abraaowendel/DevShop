import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: auto;
  min-height: calc(100vh - 300px);
  font-family: "Inter", "Arial";
  padding:60px 0 80px;
  overflow-x: hidden;
  @media (max-width: 768px) {
    padding:10px 0 40px;
  }
`;

export const Sides = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px 0;
  @media (max-width: 768px) {
    padding: 30px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
export const SideLeft = styled.div`
  width: 55%;
  img {
    height: 400px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: auto;
    padding: 0 20px;
    img {
      height: 400px;
    }
  }
  @media (max-width: 590px) {
    img {
      height: 300px;
    }
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
  .reviews {
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
        color: #f5d5a3;
        cursor: pointer;
        user-select: none;
      }
    }
    p {
      margin: 0 5px -3px;
      line-height: 27px;
      font-weight: 600;
      font-size: 14px;
    }
  }
  .quantityAvailable {
    color: #ff0000;
    font-weight: bold;
    letter-spacing: 1.01px;
  }
  .btns {
    display: flex;
    margin-bottom: 20px;
    gap: 10px;
  }
  .size {
    background-color: #f5f5f5;
    color: #000;
    border: 1px solid #ccc;
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
  @media (max-width: 590px) {
    padding: 0 20px;
    h1 {
      font-size: 26px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;
