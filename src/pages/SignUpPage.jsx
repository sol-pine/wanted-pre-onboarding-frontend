import React, {useEffect, useState} from 'react';
import {signUp} from "../utils/apis";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import isEmailValid from "../utils/isEmailValid";
import isPasswordValid from "../utils/isPasswordValid";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const token = localStorage.getItem("token");

    // 로그인 여부에 따른 리다이렉트 처리
    useEffect(() => {
        if (token) navigate("/todo");
    }, [token])

    // 회원가입
    const handleSignUp = () => {
        signUp(email, password).then(() => navigate("/signin"))
    }

    return (
        <Container>
            <Title>회원가입 페이지</Title>
            <Input data-testid="email-input" type="text" onChange={(e) => setEmail(e.target.value)}
                   placeholder="이메일을 입력해주세요 (@ 필수 포함)"/>
            {email && !isEmailValid(email) ? <ErrorMsg>이메일 형식을 확인해주세요</ErrorMsg> : null}
            <Input data-testid="password-input" type="password" onChange={(e) => setPassword(e.target.value)}
                   placeholder="비밀번호를 입력해주세요 (8자 이상)" isNotValid={password && !isPasswordValid(password)}
                   message="비밀번호 형식을 확인해주세요"/>
            <br/>
            <Button data-testid="signup-button"  onClick={handleSignUp}
                    disabled={!isEmailValid(email) || !isPasswordValid(password)}>
                회원가입
            </Button>
        </Container>
    );
};

export default SignUpPage;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 40px;
`

const ErrorMsg = styled.p`
  font-size: 12px;
  color: #4461F2;
`