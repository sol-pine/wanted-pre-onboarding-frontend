import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

const ListPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    // 로그인 여부에 따른 리다이렉트 처리
    useEffect(() => {
        if (!token) navigate("/signin");
    }, [token])

    return (
        <div>

        </div>
    );
};

export default ListPage;