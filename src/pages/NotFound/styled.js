import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: calc(100vh - 140px);
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
    h1{
        font-size: 200px;
        color: #000;
    }
    a{
        background-color: #000;
        color: #fff;
        padding: 15px 30px;
         &:hover{
            background-color: #111;
        }
    }
`;
