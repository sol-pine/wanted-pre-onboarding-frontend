import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {createTodo, deleteTodo, getTodos, updateTodo} from "../router/apis";

const ListPage = () => {
        const navigate = useNavigate();
        const [todo, setTodo] = useState("");
        const [todos, setTodos] = useState([]);
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
            createTodo(todo).then(() => getTodos().then((response) => setTodos(response.data)));
        }

        // 투두 삭제
        const handleDelete = (id) => {
            deleteTodo(id).then(() => getTodos().then((response) => setTodos(response.data)));
        }

        return (
            <>
                <h1>TODO LIST</h1>
                <input data-testid="new-todo-input" type="text" onChange={e => setTodo(e.target.value)}/>
                <button data-testid="new-todo-add-button" onClick={handleCreate}>추가</button>
                <br/>
                <br/>
                <br/>
                {todos.map(({id, todo, isCompleted}) => (
                    <li key={id}>
                        <label>
                            <input type="checkbox" defaultChecked={isCompleted}
                                   onChange={() => updateTodo(id, todo, !isCompleted)}/>
                            <span>{todo}</span>
                        </label>
                        <button data-testid="modify-button">수정</button>
                        <button data-testid="delete-button" onClick={() => handleDelete(id)}>삭제</button>
                    </li>
                ))}
            </>
        );
    }
;

export default ListPage;