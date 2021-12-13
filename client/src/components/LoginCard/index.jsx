import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import InputForm from "../common/InputForm";
import user from "../../data/user.json";

const LOCAL_STORAGE_KEY = "isLoggedIn";

const LoginCard = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const usernameLabel = "username";
    const passwordLabel = "password";

    const handleLoginForm = (e) => {
        e.preventDefault();

        if(username !== user.username){
            setErrorMessage("Username is not valid or registered!");
            return;
        }

        if(password !== user.password){
            setErrorMessage("Password is wrong!");
            return;
        }
        
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(true));

        navigate("/");
    }

    return ( 
        <div className={`bg-white rounded-lg px-10 md:px-16 pt-10 pb-24`}>
            <div>
                <div className={`text-2xl font-bold mb-12`}>
                    <h1>LOGIN</h1>
                </div>
                <div className={``}>
                    <form onSubmit={handleLoginForm}>
                        <InputForm labelName={usernameLabel} handleSubmitForm={(e) => setUsername(e.target.value)} />
                        <InputForm labelName={passwordLabel} handleSubmitForm={(e) => setPassword(e.target.value)} />
                        <div className={`flex flex-col mt-5`}>
                            <button className="bg-yellow-500 py-3 px-8 text-white" type="submit">Login</button>
                        </div>
                        {!!errorMessage && <p>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default LoginCard;