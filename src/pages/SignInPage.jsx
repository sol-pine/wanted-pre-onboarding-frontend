import React, { useEffect, useState } from "react";
import { signIn } from "../utils/apis";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import styled from "styled-components";
import Button from "../components/Button";
import isEmailValid from "../utils/isEmailValid";
import isPasswordValid from "../utils/isPasswordValid";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = localStorage.getItem("token");

  // 로그인 여부에 따른 리다이렉트 처리
  useEffect(() => {
    if (token) navigate("/todo");
  }, [token]);

  // 로그인
  const handleSignIn = () => {
    signIn(email, password).then((response) => {
      localStorage.setItem("token", response.data.access_token);
      navigate("/todo");
    });
  };

  return (
    <Container>
      <Title>로그인 페이지</Title>
      <Input data-testid="email-input" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력해주세요 (@ 필수 포함)" />
      {email && !isEmailValid(email) ? <ErrorMsg>이메일 형식을 확인해주세요</ErrorMsg> : null}
      <Input data-testid="password-input" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요 (8자 이상)" />
      {password && !isPasswordValid(password) ? <ErrorMsg>비밀번호 형식을 확인해주세요</ErrorMsg> : null}
      <br />
      <Button data-testid="signin-button" onClick={handleSignIn} disabled={!isEmailValid(email) || !isPasswordValid(password)}>
        로그인
      </Button>
    </Container>
  );
};

export default SignInPage;

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 40px;
`;

const ErrorMsg = styled.p`
  font-size: 12px;
  color: #4461f2;
`;
