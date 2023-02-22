// 이메일 유효성 검사
const isEmailValid = (email) => {
  const regExp = new RegExp("@");
  return regExp.test(email);
};

export default isEmailValid;
