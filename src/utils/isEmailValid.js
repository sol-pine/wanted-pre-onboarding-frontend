// 이메일 유효성 검사
const isEmailValid = (email) => {
    const regExp = /@/;
    return regExp.test(email);
};

export default isEmailValid;
