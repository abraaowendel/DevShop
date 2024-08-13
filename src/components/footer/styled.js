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
   padding: 30px;
`;
export const Social = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 20px 0;
  svg{
      cursor: pointer;
      &:hover path{
         color: #444;
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
`

export const PaymentsMethods = styled.div`
   h3{
      font-family: 'Oswald', sans-serif;
      letter-spacing: 1.3px;
      padding-bottom: 3px;
   }   
   img{
      width: 460px;
      height: 35px;
      object-fit: cover;
   }
`;
export const Certifications = styled.div`
   h3{
      font-family: 'Oswald', sans-serif;
      letter-spacing: 1.3px;
      padding-bottom: 3px;
   }  
   div img{
      margin-right: 5px;
   }
`
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