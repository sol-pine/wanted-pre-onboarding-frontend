import React from 'react';
import styled from "styled-components"

const Input = (props) => {
    return (<MainInput {...props}/>);
};

export default Input;

const MainInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 20px;
  font-size: 13px;

  :focus {
    outline: none;
    border: 1px solid #676767;
  }
  ::placeholder{
    font-size: 13px;
  }
`