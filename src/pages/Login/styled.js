import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: "Inter", sans-serif;
`;

export const Form = styled.form`
  background: #fff;
  padding: 40px 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ddd;
  div{
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 25px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    span{
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 50px;
      height: 100%;
      top: 0;
      bottom: 0;
      left: 0;
      padding: 0 10px;
      border-radius: 10px 0 0 10px;
      border-right: 1px solid #ddd;
      background-color: #ccc;
    }
    .icon{
    }
  }
`;

export const Input = styled.input`
  border: 0;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50px;
  font-size: 15px;
  padding: 0 10px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  max-width: 300px;
  margin: 20px auto;
  width: 100%;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  padding: 13px;
  cursor: pointer;
  &:hover {
    background: #111;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  font-size: 14px;
`;