import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  border-radius: 5px;
  padding: 10px;
  background-color: blueviolet;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  color: white;
`;

export const Input = styled.input`
  width: 200px;
  height: 25px;
  margin-top: 10px;
  border: 1px solid #030e1845;
  border-radius: 3px;
  box-shadow: 0 0 3px 1px;
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  width: 120px;
  height: 30px;
  :hover {
    background-color: teal;
    color: white;
  }
`;
