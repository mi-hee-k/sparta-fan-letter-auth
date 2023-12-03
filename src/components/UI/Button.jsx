import React from 'react';
import styled from 'styled-components';

const Btn = styled.button.attrs((props) => ({ type: props.type }))`
  background-color: #f2522e;
  border: none;
  width: 20%;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    filter: brightness(1.2);
  }

  ${(props) =>
    props.$active &&
    `
      background-color:  #F2BF27;
      color: #260101;
    `}
`;

const HomeBtn = styled(Btn)`
  display: block;
  margin: 0 auto 20px;
  background-color: #f2bf27;
`;

const Button = ({ children, onClick, $active, type, disabled }) => {
  return (
    <Btn type={type} onClick={onClick} $active={$active} disabled={disabled}>
      {children}
    </Btn>
  );
};

export { Btn, HomeBtn };
export default Button;
