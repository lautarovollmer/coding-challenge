import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { isAdmin } from "../../redux/action";

export default function Login() {
    
    const navigate = useNavigate();
    const dispatch: any = useDispatch()
    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    })
    
    function handleClick({username,password}: any){
       console.log({username, password})
    let data = {username: "admin", password: "1234"}
    if(data.username === username && data.password === password){
        dispatch(isAdmin())
        navigate("/")
        alert('Welcome admin')
    }else {
        alert('Error')
    }
}

    return(
        <form>
            <label htmlFor="username">Username</label>
            <input placeholder="Username" value={username} onChange={(e) => setCredentials ({
                username: e.target.value,
                password
            })} />
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type="password" value={password} onChange={(e) => setCredentials ({
                username,
                password: e.target.value
            })} />
            <button type="submit" onClick={() => handleClick({username, password})}>Login</button>
        </form>
    )
}