import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LOCAL_STORAGE_KEY = "isLoggedIn";

const Authenticated = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const loginState = localStorage.getItem(LOCAL_STORAGE_KEY);
        const isLoggedIn = JSON.parse(loginState || "false");

        if(isLoggedIn) navigate('/');
    }, []);

    return children;
}

export default Authenticated;