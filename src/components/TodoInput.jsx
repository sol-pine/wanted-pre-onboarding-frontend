import React from 'react';
import styled from "styled-components";

const TodoInput = ({onChange, todo, handleCreate}) => {
    return (
        <InputWrapper>
            <input data-testid="new-todo-input" type="text" onChange={onChange} value={todo} placeholder="할일을 입력해보세요"/>
            <button data-testid="new-todo-add-button" onClick={handleCreate}>추가</button>
        </InputWrapper>
    );
};

export default TodoInput;

const InputWrapper = styled.div`
  width: 300px;
  justify-content: center;
  display: flex;
  gap: 5px;

  input {
    width: 200px;
    height: 30px;
    border: 1px solid #676767;
    font-size: 13px;
    padding: 10px;

    :focus {
      outline: none;
    }
  }

  button {
    background: #4461F2;
    padding: 0 10px;
    font-size: 13px;
    color: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
  }
`