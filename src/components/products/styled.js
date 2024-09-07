import styled from "styled-components";

export const Container = styled.div`
`
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const Card = styled.div`
  cursor: pointer;
  margin-bottom: 40px;
  min-width: 33.3%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    height: 230px;
    object-fit: contain;
    object-position: center;
  }
  h3 {
    padding-top: 15px;
    font-weight: 300;
  }
  h3,
  p,
  span {
    font-family: "Inter", sans-serif;
    text-align: center;
  }
  p {
    font-weight: bold;
    color: #FF0000;
  }
  .p-black{
    font-weight: 400;
    font-size: 15px;
    color: #111;
  }
  p span {
    font-weight: 300;
    color: #898989;
    text-decoration: line-through;
    margin-left: 5px;
  }
  div{
    text-align: center;
    z-index: 2;
    background-color: #FF0000;
    padding: 5px;
    max-width: 145px;
    width: 100%;
    font-size: 13px;
    margin-bottom: -2px;
    color: #fff;
    letter-spacing: 1.2px;
    font-family: "Inter";
    font-weight: bold;
  }
  @media (max-width: 768px) {
    h3,
    p,
    span {
      text-align: center;
    }
    img {
      height: 350px;
    }
  }
`;
