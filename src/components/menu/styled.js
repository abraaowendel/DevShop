import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: start;
  height: calc(100vh - 184px);
  min-width: 40%;
`;
export const SideLeft = styled.div`
    display: flex;
    flex-direction: column;
    padding:0 30px;
    a{
        font-size: 18px;
        color: #000;
        display: flex;
        align-items: center;
        margin: 15px 0;
        p{
            font-size: 18px;
            margin-left: 8px;
            margin-bottom: -3px;
        }
        &:hover{
            color: #ccc;
        }
    }
`
