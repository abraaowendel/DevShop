import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
export const SectionSlide = styled.div`
  width: 100vw;
  background-size: contain;
`;
export const SectionProduct = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 80px 10px;
`;
export const Title = styled.h1`
  text-align: center;
  font-family: "Inter", sans-serif;
  letter-spacing: 1.3px;
`;
export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;
export const Card = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 300px;
    object-fit: contain;
    object-position: center;
  }
  h3 {
    padding-top: 5px;
    font-weight: 300;
  }
  h3,
  p,span{
    font-family: "Inter", sans-serif;
    text-align: start;
  }
  p{
    font-weight: bold;
  }
  p span{
    font-size: 14px;
    font-weight: 300;
    color: #898989;
    text-decoration: line-through;
    }
`;
