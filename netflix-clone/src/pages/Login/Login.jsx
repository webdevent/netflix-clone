import React, { createContext, useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css'
import logo from '../pictures/netflix-clone.png'

function Login() {
    const [nameLogin, setNameLogin] = useState('');
    const [signState, setSignState] = useState("Sign Up")
    const NameLoginContext = createContext();
    const handleNameChange = (event) => {
        setNameLogin(event.target.value);
    }
    return (
        <div className="login">
            <div className="logo-cover">
                <img src={logo} alt="Netflix Logo" className="logo" />
            </div>
            <div className="form-cover" >
                <form className="form">
                    <h2>{signState}</h2>
                    {signState==="Sign Up"? <input type="text" placeholder="Your Name" value={nameLogin} onChange={handleNameChange}/>:<></>}
                    <input type="text" placeholder="Email or Phone Number"/>
                    <input type="password" placeholder="Password"/>
                    <Link to={'/'}><button className="btn">{signState}</button></Link>
                    <div className="footer-line">
                        <div>
                            <input type="checkbox"/><span>Remember me</span>
                        </div>
                        <p>Need Help?</p>
                    </div>
                    {signState==="Sign In"?
                    <p>New to Neflix? <span onClick={() => {setSignState("Sign Up")}}>Sign up now</span></p>
                    :<p>Already have account? <span onClick={() => {setSignState("Sign In")}}>Sign in</span></p>}
                </form>
            </div>
        </div>
        );
}
export default Login;