import React, { useState } from 'react';
import "./login.css";
import facebook from "../assets/facebook1.png";
import instagram from "../assets/instagram1.png";
import twitter from "../assets/x1.png";
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';


const Login = () => {
    const {t,i18n} = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [status, setStatus] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.text()) // Extract the text content from the response
            .then(text => {
                console.log(text);
                setStatus(text);
                localStorage.setItem("user", JSON.stringify({ email, status: text }));

                if (text === "ADMIN") {
                    navigate("/admin");
                } else {
                    navigate("/user");
                }
            })
            .catch(err => console.error(err));

        console.log(email);
        console.log(password);
        console.log(status);
    };

    return (
        <div>
            <Header />
             <div className="form-signin">
            <form onSubmit={handleSubmit}>
                <h3>{t('Login')}</h3>
                <input
                type="text"
                name="email"
                placeholder={t('Email')}
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                />
                <input
                type="password"
                name="password"
                placeholder={t('Password')}
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
                <button type="submit">{t('Login')}</button>

                {/* Updated "Don't have an account?" to be a link */}
                <div className="text-center mt-3">
                <a href="/register">{t("Don't have an account?")} {t('Register')}</a>
                </div>

                {/* Removed error message */}
            </form>
            </div>

            {/* Removed registration button */}
            <Footer />
        </div>
    );
};

export default Login;
