import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;
export const SectionSlide = styled.div`
  width: 100vw;
  background-size: contain;
  padding-bottom: 20px;
`;
export const SectionProduct = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 80px 30px;
`;
export const Title = styled.h1`
  text-align: center;
  font-family: "Inter", sans-serif;
  letter-spacing: 1.3px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const LinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 40px;
  min-width: 33.3%;
  img {
    height: 300px;
    object-fit: contain;
    object-position: center;
  }
  h3 {
    padding-top: 15px;
    font-weight: 300;
    color: #000;
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
    border-radius: 2px;
    max-width: 128px;
    height: 24px !important;
    user-select: none;
    width: 100%;
    font-size: 11px;
    margin-bottom: -2px;
    color: #fff;
    letter-spacing: 1.2px;
    font-family: "Inter";
    font-weight: bold;
  }
  &:hover{
    img{
      opacity: .9;
    }
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
  @media (max-width: 590px) {
    h3,
    p,
    span {
      font-size: 1em;
    }
    img{
      height: 320px;
    }
  }
`;