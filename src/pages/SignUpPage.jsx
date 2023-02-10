import React, {useState} from 'react';
import {signUp} from "../router/apis";
import {useNavigate} from "react-router-dom";

const SignUpPage = () => {
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

    // 회원가입
    const handleSignUp = () => {
        signUp(email, password).then(() => navigate("/signin"))
    }

    return (
        <>
            <h1>회원가입</h1>
            <input data-testid="email-input" type="text" onChange={(e) => setEmail(e.target.value)}/>
            {email && !isEmailValid() ? <p>이메일 형식을 확인해주세요(@ 필수 포함)</p> : null}
            <br/>
            <input data-testid="password-input" type="password" onChange={(e) => setPassword(e.target.value)}/>
            {password && !isPasswordValid() ? <p>비밀번호 형식을 확인해주세요(8자 이상)</p> : null}
            <br/>
            <button data-testid="signup-button" onClick={handleSignUp} disabled={!isEmailValid() || !isPasswordValid()}>
                회원가입
            </button>
        </>
    );
};

export default SignUpPage;