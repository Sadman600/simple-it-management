import axios from 'axios';
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import './Login.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        // navigate(from, { replace: true });
    }

    const handleSignInWithEmailAndPassword = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.psw.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://glacial-sands-06183.herokuapp.com/login', { email });
        localStorage.setItem('accessToken',data.accessToken);
        navigate(from, { replace: true });
        console.log(data);
    }
    const handleSignInWithGoogle = (e) => {
        e.preventDefault();
        signInWithGoogle();
    }
    return (
        <div >
            <form onSubmit={handleSignInWithEmailAndPassword} className="login-container">
                <h1>Login</h1>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit" className="btn">Login</button>
                <button onClick={handleSignInWithGoogle}>Sign in with google</button>
            </form>
        </div>
    );
};

export default Login;