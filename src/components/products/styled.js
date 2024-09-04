import styled from "styled-components";

export const Container = styled.div`
`
export const Cards = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
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
  img {
    width: 250px;
    height: 250px;
    object-fit: contain;
    object-position: center;
  }
  h3 {
    padding-top: 5px;
    font-weight: 300;
  }
  h3,
  p,
  span {
    font-family: "Inter", sans-serif;
    text-align: start;
  }
  p {
    font-weight: bold;
  }
  p span {
    font-size: 13px;
    font-weight: 300;
    color: #898989;
    text-decoration: line-through;
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
