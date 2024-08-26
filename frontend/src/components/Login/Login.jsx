import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import  axios from "axios"

const Login = ({ setShowLogin }) => {

    const {url,setToken} = useContext(StoreContext)
    const [curState, setCurState] = useState("Login")
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}))
    }


    const onLogin = async (e)=>{
        e.preventDefault();
        let newUrl = url
        if (curState==="Login"){
            newUrl += "/api/user/login";
        }
        else{
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl,data)
        if (response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }
        else{
            alert (response.data.message)
        }
    }
    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{curState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {curState === "Login" ? <></> : <input onChange={onChangeHandler} value={data.name} name='name' type="text" placeholder='Your Name' />}
                    <input onChange={onChangeHandler} value={data.email} name='email' type="email" placeholder='Email' />
                    <input onChange={onChangeHandler} value={data.password} name='password' type="password" placeholder='Password' />
                </div>
                <button type='submit'>{curState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {curState === "Login"
                    ? <p>Create a new account ? <span onClick={()=>setCurState("Sign Up")}>Click here</span></p> 
                    : 
                    <p>Already have an account ? <span onClick={()=>setCurState("Login")} >Login here</span></p>
                }
            </form>
        </div>
    )
}

export default Login