import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import InputForm from "../common/InputForm";

const RegisterCard = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const usernameLabel = "username";
    const passwordLabel = "password";

    let alphanumericRegex = /^[0-9a-zA-Z]+$/;

    const handleRegisterForm = (e) => {
        e.preventDefault();

        console.log("1");

        if(!username.match(alphanumericRegex)){
            setErrorMessage("Username must alphanumeric without space!");
            console.log("2");

            return;
        }

        if(username.length < 6 && username.length > 20){
            setErrorMessage("Username must have 6-20 characters!");
            console.log("3");

            return;
        }

        if(password.length < 6){
            setErrorMessage("Password must contain minimum 6 characters!");
            console.log("4");

            return;
        }

        if(password !== confirmPassword){
            setErrorMessage("Password is not match!");
            console.log("5");

            return;
        }
        console.log("6");

        navigate("/");
    }


    return ( 
        <div className={`bg-white rounded-lg px-10 md:px-16 pt-10 pb-24`}>
            <div>
                <div className={`text-2xl font-bold mb-12`}>
                    <h1>REGISTER</h1>
                </div>
                <div className={``}>
                    <form onSubmit={handleRegisterForm}>
                        <InputForm labelName={usernameLabel} handleSubmitForm={(e) => setUsername(e.target.value)} />
                        <InputForm labelName={passwordLabel} handleSubmitForm={(e) => setPassword(e.target.value)} />
                        <div className={`flex flex-col mt-5`}>
                            <label className="text-left" htmlFor="confirmPassword">Confirm Password</label>
                            <input className="bg-gray-200 rounded-lg py-3 px-8" name="confirmPassword" type="password" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        <div className={`flex flex-col mt-5`}>
                            <button className="bg-yellow-500 py-3 px-8 text-white" type="submit">REGISTER</button>
                        </div>
                        {!!errorMessage && <p>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default RegisterCard;