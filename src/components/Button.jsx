import React from 'react';
import styled from "styled-components";

const Button = (props) => {
    return (
        <MainButton {...props}>
            {props.children}
        </MainButton>
    );
};

export default Button;

const MainButton = styled.button`
  width: 300px;
  height: 50px;
  padding: 20px;
  background: ${props => props.disabled ? "#777777" : "#4461F2"};
  box-shadow: ${props => props.disabled ? "none" : "0px 12px 21px 4px rgba(68, 97, 242, 0.15)"};
  border-radius: 10px;
  cursor:  ${props => props.disabled ? "default" : "pointer"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #FFFFFF;
`