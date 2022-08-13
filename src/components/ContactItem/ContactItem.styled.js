import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  border-radius: 5px;
  margin-left: 10px;
  font-size: 15px;
  cursor: pointer;
  :hover {
    background-color: blueviolet;
    color: white;
  }
`;
