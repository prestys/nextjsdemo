'use client'

import React, {useEffect, useState} from 'react'; // Import React if not already imported
import UserService from "../../services/UserService";
import "../../assets/css/login.css";
import { Card, TextInput, PasswordInput, Button } from "@mantine/core";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState(true);

    useEffect(() => {

    }, []);

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        validateEmail(email);
    };

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

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
            <Card className="form-card-wrapper" withBorder shadow="sm" radius="md">
                <div className="form-heading">
                    <h1>Log in</h1>
                </div>
                <div className="form-wrapper">
                    <div className="form-fields-wrapper">
                        <TextInput onChange={handleEmailChange} className="form-text" label="Email" placeholder="Enter email here!"/>
                        <div>
                            <PasswordInput onChange={handlePasswordChange} label="Password" placeholder="Enter password here!"/>
                            <a href="dsa" className="form-forgot-password">forgot password?</a>
                        </div>
                    </div>
                    <Button className="form-signin" variant="filled" color="lime">Sign In</Button>
                    <a href="dsa" className="form-signup">sign up</a>
                </div>
            </Card>
        </div>
    );
};

export default Login;