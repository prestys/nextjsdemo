'use client'

import React from 'react';
import "../../assets/css/login.css";
import {Card, TextInput, PasswordInput, Button, rem} from "@mantine/core";
import Link from "next/link";
import { IconAt, IconLock } from '@tabler/icons-react';
import {useForm} from "@mantine/form";
import UserService from "@/services/UserService";
import { useRouter } from "next/navigation"

const Login = () => {
    const router = useRouter();
    const emailIcon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
    const passwordIcon = <IconLock style={{ width: rem(16), height: rem(16) }} />;

    const form = useForm({
        initialValues: {
            email: "",
            password: "",
            verifiedPassword: ""
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            verifiedPassword: (value, values) => ((value.length > 8) ? null : "Password is under 8 characters!") || (((value === values.password) ? null : 'Password do not match')),
            password: (value, values) => ((value.length > 8) ? null : "Password is under 8 characters!") || ((value === values.verifiedPassword) ? null : 'Password do not match'),
        },
    })

    const createUser = async (email, password) => {
        const newUser = {
            email,
            password
        }
        await UserService.CreateUser(newUser);
        router.push("/login")
    }

    return (
        <div className="login-page-wrapper">
            <Card className="form-card-wrapper" withBorder shadow="sm" radius="md">
                <div className="form-heading">
                    <h1>Sign up</h1>
                </div>
                <div className="form-wrapper">
                    <form onSubmit={form.onSubmit((values) => createUser(values.email, values.password))}>
                        <div className="form-fields-wrapper">
                            <TextInput {...form.getInputProps("email")} leftSectionPointerEvents="none" leftSection={emailIcon} className="form-text" label="Email" placeholder="Enter email here!"/>
                            <div>
                                <PasswordInput {...form.getInputProps("password")} leftSectionPointerEvents="none" leftSection={passwordIcon} className="form-text" label="Password" placeholder="Enter password here!"/>
                                <PasswordInput {...form.getInputProps("verifiedPassword")} leftSectionPointerEvents="none" leftSection={passwordIcon} className="form-text" label="Re-enter Password" placeholder="Re-enter password here!"/>
                            </div>
                        </div>
                        <Button type="submit" className="form-signin" variant="filled" color="lime">Sign Up</Button>
                        <Link href="/login" className="form-signup">log in</Link>
                    </form>
                </div>
            </Card>
        </div>
    );
};

export default Login;