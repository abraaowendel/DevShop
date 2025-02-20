import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, .4);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.div`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    min-width: 500px;
    height: 500px;
    padding: 20px;
`