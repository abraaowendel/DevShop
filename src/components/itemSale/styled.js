import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProductLink = styled(Link)`
 display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin-bottom: 40px;
  min-width: 33.3%;
  img {
    height: 230px;
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
      height: 300px;
    }
  }
  @media (max-width: 590px) {
    h3,
    p,
    span {
      font-size: 1em;
    }
    img{
      height: 250px;
    }
  }
`