import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { isAdmin } from "../../redux/action";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import '../Login/login.css'

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
        <div className="formcontainer">
        <Form>
        <FormGroup >
            <div>

            <Label className="me-sm-2" for="exampleEmail">Username</Label>
            </div>
            <div className="input">

            <Input id="exampleEmail" name="email"  placeholder="username"type="email" value={username} onChange={(e) => setCredentials ({
                username: e.target.value,
                password
            })} />
            </div>
            </FormGroup>
            <FormGroup >
                <div>

            <Label className="me-sm-2" for="examplePassword">Password</Label>
                </div>
                <div className="input">

            <Input  id="examplePassword" name="password" placeholder="******" type="password" value={password} onChange={(e) => setCredentials ({
                username,
                password: e.target.value
            })} />
                </div>
        </FormGroup>
            <Button type="submit" onClick={() => handleClick({username, password})}>Login</Button>
        </Form>
        </div>
    )
}