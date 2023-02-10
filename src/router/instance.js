import axios from "axios";

const axiosConfig = {
    timeout: 3000,
    baseURL: "https://pre-onboarding-selection-task.shop",
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
    (config) => {
        if (!config.headers) config.headers = {};
        config.headers["Content-Type"] = "application/json";
        config.headers["X-Requested-With"] = "XMLHttpRequest";
        config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        config.headers.Accept = "application/json";
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error;
        if (response) alert(response.data.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
