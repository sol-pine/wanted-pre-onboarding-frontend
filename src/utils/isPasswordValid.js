// 비밀번호 유효성 검사
const isPasswordValid = (password) => {
    const regExp = /^.{8,}$/;
    return regExp.test(password);
};

export default isPasswordValid;