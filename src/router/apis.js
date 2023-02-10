import axiosInstance from "./instance";

export const signUp = (email, password) => axiosInstance.post("/auth/signup", {email: email, password: password});
