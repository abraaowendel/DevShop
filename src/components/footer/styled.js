import styled from "styled-components";

export const Footer = styled.footer`
   min-height: 200px;
   background-color: #F5F5F5;
   font-family: "Inter", sans-serif;
`;
export const Content = styled.footer`
   max-width: 1400px;
   margin: auto;
   padding: 60px 0;
`;
export const Social = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   h2{
   
   }
   div{
      margin: 10px 0;
      width: 180px;
      display: flex;
      justify-content: space-around;
      align-items: center;
   }
  svg{
      cursor: pointer;
      &:hover path{
         color: #444;
      }
   }
`;
