import styled from "styled-components";

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0 80px;
  @media (max-width: 768px) {
    padding: 0px 0 80px;
  }
`;
export const SideRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin: 10px 0 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      label {
        margin: 0 5px;
      }
      span {
        margin: -20px 0 0 10px;
      }
      span,
      input,
      select {
        width: 100%;
      }
    }
    input,
    select {
      padding: 10px;
      margin: 5px 0 8px;
      border: 1px solid #ddd;
      font-size: 16px;
    }
    button {
      display: flex;
      justify-content: center;
      margin: 10px 0;
      max-width: 180px;
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
    }
  }
`;

export const Addresses = styled.div`
  padding-top: 8px;
    b {
    color: #000;
    font-size: 16px;
  }
  span {
    font-size: 14px;
    color: #75757e;
    line-height: 1.25rem;
  }
`;
export const ItemAddress = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  border-bottom: 1px solid #ccc;
  padding: 10px 0 30px;
  margin-bottom: 15px;
`;
export const ItemAddressLeft = styled.div`
`;
export const ItemAddressTop = styled.div`
  margin-bottom: 5px;
`;
export const ItemAddressCenter = styled.div``;
export const ItemAddressBottom = styled.div``;
export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  button{
    border: 1px solid #ccc;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
    &:hover{
      opacity: .8;
    }
  }
`;
export const OptionsTop = styled.div`
  button{
    color: #0088FF;
    font-weight: 600;
    background-color: transparent;
    border: none;
    margin: 10px 0 10px 5px;
  }
`