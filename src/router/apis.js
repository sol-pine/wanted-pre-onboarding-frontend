import axiosInstance from "./instance";

export const signUp = (email, password) => axiosInstance.post("/auth/signup", {email: email, password: password});

export const signIn = (email, password) => axiosInstance.post("/auth/signin", {email: email, password: password});
