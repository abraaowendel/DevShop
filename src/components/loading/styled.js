import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  to {
    transform: rotate(360deg)  
 }
`;
export const Loader = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #000;
  border-right-color: #F5F5F5;
  animation: ${rotate} 1s infinite linear;
`;