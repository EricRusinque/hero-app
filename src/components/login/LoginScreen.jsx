import './index.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/marvel',{
            replace: true
        })
    }
  
    return (
        <form className="box">
            <h1>Login</h1>
            <input 
                type="text" 
                name="" 
                placeholder="Username"
                autoComplete="off"
            />
            <input 
                type="password" 
                name="" 
                placeholder="Password"
                autoComplete="off"
            />
            <button
                onClick={handleLogin}
                type="submit"
            >
                Submit
            </button>
        </form>
    )
};
   // <div className="container mt-5">
        //     <h1>Login</h1>
        //     <hr/>

        //     <button
        //         onClick={handleLogin}
        //         className="btn btn-primary"
        //     >
        //         Login
        //     </button>
        // </div>