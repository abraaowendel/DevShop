import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 176px);
  font-family: "Inter", sans-serif;
`;

export const Form = styled.form`
  background: #fff;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin: 15px 0;
  &:hover {
    background: #111;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  font-size: 14px;
`;