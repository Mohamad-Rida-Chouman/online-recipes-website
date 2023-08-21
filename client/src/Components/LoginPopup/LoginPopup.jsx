import React, {useState} from "react";
import '../../base.css'
import './loginPopup.css'
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginPopup = (props) => {

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loginSignupState, setLoginSignupState] = useState(false)

    function handleLogin(e) {
        e.preventDefault()
        console.log("User Logged In!")
        props.closePopup()
    }

    const handleSignup = (e) => {
        e.preventDefault()
        console.log("User Registered!")
        setLoginSignupState(!loginSignupState)
        setEmail('')
        setPassword('')
    }

    const toggleSignup = () => {
        setEmail('')
        setPassword('')
        setLoginSignupState(!loginSignupState)
    }

    if (!loginSignupState){
        return (
            <div className='popup'>
                <div className='popup_inner flex flex-col justify-center align-center gap-m'> 
                    <h2>Welcome Back!</h2>
                    <div className="input-container flex flex-col gap-m align-center">
                    
                    <Input onChange={e => setEmail(e.target.value)} value={email}>
                        E-mail:
                    </Input>
                    <Input onChange={e => setPassword(e.target.value)} value={password}>
                        Password:
                    </Input>
                    </div>
                    <Button onClick={handleLogin}>Login</Button>
                    <p>Not a user? &nbsp;&nbsp;&nbsp;<Button onClick={toggleSignup}>Signup</Button></p>    
                </div>
            </div>
        );
    }

    else {
        return (
            <div className='popup'>
                <div className='popup_inner flex flex-col justify-center align-center gap-m'> 
                    <h2>Create an Account!</h2>
                    <div className="input-container flex flex-col gap-m align-center">
                    <Input onChange={e => setUsername(e.target.value)} value={username}>
                        Username:
                    </Input>
                    <Input onChange={e => setEmail(e.target.value)} value={email}>
                        E-mail:
                    </Input>
                    <Input onChange={e => setPassword(e.target.value)} value={password}>
                        Password:
                    </Input>
                    </div>
                    <Button onClick={handleSignup}>Signup</Button>
                    <p>Already a User? &nbsp;&nbsp;&nbsp;<Button onClick={toggleSignup}>Login</Button></p>    
                </div>
            </div>
            );
    }

}

export default LoginPopup;