'use client'

import Link from "next/link";
import "../css/components/header.css";
import { Card } from "@mantine/core";
import Image from "next/image";
import NavlinksJson from "../json/navlinks.json";
import {usePathname} from "next/navigation";
import userService from "@/services/UserService";
import {useEffect, useState} from "react";

const Header = () => {
    const pathname = usePathname();
    const filteredNavlinks = NavlinksJson.navlinks.filter(link => link.inMainNavbar);
    const [userIsAuth, setUserIsAuth] = useState(false);
    const [id, setId] = useState("");

    useEffect(() => {
        async function userVerified()  {
            const result = await userService.UserVerify();
            setUserIsAuth(result);
        }

        userVerified();
    }, [userIsAuth]);

    useEffect(() => {
        async function fetchUserData() {
            if (userIsAuth) {
                const user = await userService.GetUser();
                setId(user.userId);
            }
        }

        fetchUserData();
    }, [userIsAuth]);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <Card withBorder shadow="sm" radius="md" className="header-wrapper">
                        <div className="col-lg-10">
                            <div className="header-content">
                                <Link href="/"><Image src="/logo.png" alt="" width={75} height={75}/></Link>
                                <div className="header-navlinks">
                                    {filteredNavlinks.map((link, index) => (
                                        <Link key={index} href={link.pathname} className={pathname === link.pathname ? "navlink-active" : ""}>{link.title}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2">
                            <div className="header-account">
                                <Link href={userIsAuth ? `/user/${id}` : "/login"}><i className="fa-solid fa-user"></i></Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Header;
