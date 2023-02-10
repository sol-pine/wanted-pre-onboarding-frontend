import React, {useState} from 'react';
import {signIn} from "../router/apis";
import {useNavigate} from "react-router-dom";

const SignInPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 이메일 유효성 검사
    const isEmailValid = () => {
        const regExp = /@/;
        return regExp.test(email);
    };

    // 비밀번호 유효성 검사
    const isPasswordValid = () => {
        const regExp = /^.{8,}$/;
        return regExp.test(password);
    };

    // 로그인
    const handleSignIn = () => {
        signIn(email, password).then(response => {
            localStorage.setItem("token", response.data.access_token);
            navigate("/todo");
        })
    }

    return (
        <>
            <h1>로그인</h1>
            <input data-testid="email-input" type="text" onChange={(e) => setEmail(e.target.value)}/>
            {email && !isEmailValid() ? <p>이메일 형식을 확인해주세요(@ 필수 포함)</p> : null}
            <br/>
            <input data-testid="password-input" type="password" onChange={(e) => setPassword(e.target.value)}/>
            {password && !isPasswordValid() ? <p>비밀번호 형식을 확인해주세요(8자 이상)</p> : null}
            <br/>
            <button data-testid="signin-button" onClick={handleSignIn} disabled={!isEmailValid() || !isPasswordValid()}>
                로그인
            </button>
        </>
    );
};

export default SignInPage;