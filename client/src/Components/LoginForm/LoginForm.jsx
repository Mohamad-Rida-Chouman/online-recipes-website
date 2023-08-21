import React from "react";
import './loginForm.css'
import '../../base.css'
import Input from "../Input/Input";
import { useState } from "react";

const LoginForm = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()
        console.log("User Logged In!")
        props.toggle()
    }

    return (
        <div className="login-form-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <Input onChange={e => setUsername(e.target.value)} value={username}>
                    Username:
                </Input>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
            <button onClick={props.toggle}>Close</button>
        </div>
    );
}
 
export default LoginForm;