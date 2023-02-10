import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {createTodo, deleteTodo, getTodos, updateTodo} from "../utils/apis";

const ListPage = () => {
        const navigate = useNavigate();
        const [todo, setTodo] = useState("");
        const [newTodo, setNewTodo] = useState("");
        const [todos, setTodos] = useState([]);
        const [editableId, setEditableId] = useState(0);
        const token = localStorage.getItem("token");

        // 로그인 여부에 따른 리다이렉트 처리
        useEffect(() => {
            if (!token) navigate("/signin");
        }, [token])

        // 투두 목록 받아오기
        useEffect(() => {
            getTodos().then((response) => setTodos(response.data));
        }, [])

        // 투두 추가
        const handleCreate = () => {
            createTodo(todo).then(() => {
                setTodo("");
                getTodos().then((response) => setTodos(response.data));
            });
        }

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
            <>
                <h1>TODO LIST</h1>
                <input data-testid="new-todo-input" type="text" onChange={e => setTodo(e.target.value)} value={todo}/>
                <button data-testid="new-todo-add-button" onClick={handleCreate}>추가</button>
                <br/>
                <br/>
                <br/>
                {todos.map(({id, todo, isCompleted}) => (
                    <li key={id}>
                        <label>
                            <input type="checkbox" defaultChecked={isCompleted}
                                   onChange={() => handleUpdate(id, todo, !isCompleted)}/>
                            {editableId === id ?
                                <input data-testid="modify-input" defaultValue={todo}
                                       onChange={e => setNewTodo(e.target.value)}/> :
                                <span>{todo}</span>}
                        </label>
                        {
                            editableId === id ? <>
                                <button data-testid="submit-button"
                                        onClick={() => newTodo ? handleUpdate(id, newTodo, isCompleted) : setEditableId(0)}>제출
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
            </>
        );
    }
;

export default ListPage;