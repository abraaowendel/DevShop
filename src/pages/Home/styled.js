import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
export const SectionSlide = styled.div`
    width: 100vw;
    height: 516px;
    background-size: contain;
`;
export const SectionProduct = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 10px;
`;
export const Title = styled.h1`
 text-align: center;
 font-family: 'Inter', sans-serif;
`;
export const Cards = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;
export const Card = styled.div`
  border: 1px solid #000;
  width: 100%;
  height: 250px;
`;