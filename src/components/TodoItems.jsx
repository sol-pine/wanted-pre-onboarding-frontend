import React, {useState} from 'react';
import {deleteTodo, getTodos, updateTodo} from "../utils/apis";
import styled from "styled-components";

const TodoItems = ({todos, setTodos}) => {
    const [newTodo, setNewTodo] = useState("");
    const [editableId, setEditableId] = useState(0);

    // 투두 삭제
    const handleDelete = (id) => {
        deleteTodo(id).then(() => getTodos().then((response) => setTodos(response.data)));
    }

    // 투두 수정
    const handleUpdate = (id, todo, isCompleted) => {
        updateTodo(id, todo, isCompleted).then(() => {
            setEditableId(0)
            getTodos().then((response) => setTodos(response.data))
        });
    }

    return (
        <ItemContainer>
            {todos.map(({id, todo, isCompleted}) => (
                <li key={id}>
                    <label>
                        <input type="checkbox" defaultChecked={isCompleted}
                               onChange={() => handleUpdate(id, todo, !isCompleted)}/>
                        {editableId === id ?
                            <EditInput data-testid="modify-input" defaultValue={todo}
                                   onChange={e => setNewTodo(e.target.value)}/> :
                            <TodoText isCompleted={isCompleted}>{todo}</TodoText>}
                    </label>
                    {
                        editableId === id ? <>
                            <button data-testid="submit-button"
                                    onClick={() => newTodo !== todo ? handleUpdate(id, newTodo, isCompleted) : setEditableId(0)}>제출
                            </button>
                            <button data-testid="cancel-button" onClick={() => setEditableId(0)}>취소
                            </button>
                        </> : <>
                            <button data-testid="modify-button" onClick={() => setEditableId(id)}>수정</button>
                            <button data-testid="delete-button" onClick={() => handleDelete(id)}>삭제</button>
                        </>
                    }

                </li>
            ))}
        </ItemContainer>
    );
};

export default TodoItems;

const ItemContainer = styled.div`
  width: 300px;
  display:flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  button{
    background: #4461F2;
    padding: 0 10px;
    font-size: 13px;
    color: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
    margin-left: 10px;
  }
`

const EditInput = styled.input`
  margin-left: 10px;
  width: 100px;
  font-size:15px;
  :focus{
    outline: none;
  }
`

const TodoText = styled.span`
  display:inline-block;
  margin-left: 10px;
  width: 100px;
  font-size:15px;
  text-decoration: ${props => props.isCompleted ? "line-through" : "none"};
`