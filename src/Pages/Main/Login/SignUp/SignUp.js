import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleUserWithEmailAndPassword = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.psw.value;
        if (!email || !password) {
            alert('plz give email or password');
        } else {
            createUserWithEmailAndPassword(email, password);
            alert('Success register');
            navigate('/');
        }

    }
    return (
        <div >
            <form onSubmit={handleUserWithEmailAndPassword} className="login-container">
                <h1>Sign Up</h1>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required />

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;