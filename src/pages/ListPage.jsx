import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {createTodo, getTodos} from "../utils/apis";
import styled from "styled-components";
import TodoInput from "../components/TodoInput";
import TodoItems from "../components/TodoItems";

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
            createTodo(todo).then(() => {
                setTodo("");
                getTodos().then((response) => setTodos(response.data));
            });
        }

        return (
            <Container>
                <Title>TODO LIST</Title>
                <TodoInput  onChange={e => setTodo(e.target.value)} todo={todo} handleCreate={handleCreate}/>
                <br/>
                <br/>
                <br/>
                <TodoItems todos={todos} setTodos={setTodos}/>
            </Container>
        );
    }
;

export default ListPage;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 40px;
`

