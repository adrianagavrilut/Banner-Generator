import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffe992;
  // color: #19170f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 666;
  margin: 30px 10px 10px 10px;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: none;
  }
`;
