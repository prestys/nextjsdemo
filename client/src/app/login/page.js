'use client'

import React from 'react'; // Import React if not already imported
import UserService from "../../services/UserService";
import "../../assets/css/login.css";

const Login = () => {

    const createUser = async () => {
        const newUser = {
            email: "testemail",
            password: "testpass"
        };

        console.log("User", newUser);

        await UserService.CreateUser(newUser);
    }

    return (
        <div className="login-page-wrapper">
            <button onClick={createUser}>create user test</button>
        </div>
    );
};

export default Login;