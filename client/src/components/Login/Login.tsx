import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isAdmin } from "../../redux/action";

export default function Login() {
    
    const dispatch = useDispatch
    const [{username, password}, setCredentials] = useState({
        username: '',
        password: ''
    })

   function handleClick({username,password}: any){
    dispatch(isAdmin())
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
            <button type="submit">Login</button>
        </form>
    )
}