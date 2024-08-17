import styled from "styled-components";

export const Footer = styled.footer`
  min-height: 200px;
  background-color: #f5f5f5;
  font-family: "Inter", sans-serif;
  border-top: 1px solid #ccc;
`;
export const Content = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 30px;
`;
export const Social = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  svg {
    cursor: pointer;
    &:hover path {
      color: #444;
    }
  }
  @media (max-width: 768px) {
    padding: 20px 0 50px;
    img {
      height: 55px;
    }
    svg {
    }
  }
`;
export const SocialIcons = styled.div`
  margin: 10px 0;
  width: 180px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Info = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  gap: 15px;
  @media (max-width: 590px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const PaymentsMethods = styled.div`
  h3 {
    font-family: "Oswald", sans-serif;
    letter-spacing: 1.3px;
    padding-bottom: 3px;
  }
  img {
    width: auto;
    height: 35px;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    img {
      height: 25px;
    }
  }
  @media (max-width: 590px) {
    h3 {
      text-align: center;
    }
    img {
      max-width: 100%;
      height: 35px;
    }
  }
`;
export const Certifications = styled.div`
  h3 {
    font-family: "Oswald", sans-serif;
    letter-spacing: 1.3px;
    padding-bottom: 3px;
  }
  div img {
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    div img {
      margin-right: 0;
    }
    img {
      max-width: 100%;
      height: 30px;
    }
  }
  @media (max-width: 590px) {
    h3 {
      text-align: center;
    }
    img {
      height: 45px;
    }
  }
`;
export const Copyright = styled.div`
  background-color: #000;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p,
  a {
    color: #fff;
    font-size: 12px;
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
  }
  @media (max-width: 767px) {
    height: auto;
    padding: 20px 0 10px;
    div {
      margin-top: 10px;
    }
    flex-direction: column;
    justify-content: center;
    p,
    a {
      font-size: 13px;
    }
    p {
      padding: 0 10px;
    }
  }
`;
