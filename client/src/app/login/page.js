'use client'

import React, {useEffect, useState} from 'react'; // Import React if not already imported
import UserService from "../../services/UserService";
import "../../assets/css/login.css";
import { Card, TextInput, PasswordInput, Button } from "@mantine/core";
import Link from "next/link";
import {useForm} from "@mantine/form";

const Login = () => {

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
        },
    })

    const userLogin = async (email, password) => {
        const user = {
            email,
            password
        };

        console.log("User", user);

        await UserService.UserLogin(user);
    }

    return (
        <div className="login-page-wrapper">
            <Card className="form-card-wrapper" withBorder shadow="sm" radius="md">
                <div className="form-heading">
                    <h1>Log in</h1>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={form.onSubmit((values) => userLogin(values.email, values.password))}>
                        <div className="form-fields-wrapper">
                            <TextInput {...form.getInputProps("email")} className="form-text" label="Email" placeholder="Enter email here!"/>
                            <div>
                                <PasswordInput {...form.getInputProps("password")} label="Password" placeholder="Enter password here!"/>
                                <Link href="/forgot-password" className="form-forgot-password">forgot password?</Link>
                            </div>
                        </div>
                        <Button type="submit" className="form-signin" variant="filled" color="lime">Sign In</Button>
                        <Link href="/signup" className="form-signup">sign up</Link>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Login;