import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
`;
export const SectionSlide = styled.div`
  width: 100vw;
  min-height: 450px;
  background-color: #fff;
  background-size: contain;
  background-repeat: no-repeat;
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
  display: block;
  img{
    height: 350px !important;
  }
  @media (max-width: 390px) {
    img{
    height: 300px !important;
  }
  }
`;

