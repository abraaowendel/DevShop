import styled from "styled-components";

export const Footer = styled.footer`
   min-height: 200px;
   background-color: #F5F5F5;
   font-family: "Inter", sans-serif;
   border-top: 1px solid #ccc;
`;
export const Content = styled.div`
   max-width: 1400px;
   margin: auto;
`;

export const Social = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 30px 0;
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
export const Copyright = styled.div`
   background-color: #000;
   height: 40px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   p,a{
      color: #fff;
      font-size: 12px;
      text-align: center;
   }
   div{
      display: flex;
      align-items: center;
   }
`;