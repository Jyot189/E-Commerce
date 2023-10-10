import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
    width:100vw;
    height:100vh;
    background-color:lightpink;
    background-size:cover;
    display: flex;
    align-items:center;
    justify-content:center;
`

const Wrapper = styled.div`
    padding:20px;
    width:25%;
    background-color:white;
`

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 10px 0px;
    padding: 10px;

`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:10px ;
`
const Box = styled.div`
    margin: 5px 0px;
    font-size:15px;
    text-decoration:underline;
    cursor: pointer;
`

const Login = () => {
    const BASE_URL = process.env.REACT_APP_BACKEND_API;

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            }), 
        });
        const json = await response.json();

        if (json.success) {
            //save the auth token
            localStorage.setItem('token', json.authToken);

            navigate('/');

        } else {
            alert('not login');
        }
        console.log("Login:" + JSON.stringify(json));
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="Email" name="email" value={credentials.email} onChange={onChange} />
                    <Input placeholder="Password" name="password" value={credentials.password} onChange={onChange} />
                    <Button type="submit">LOGIN</Button>
                    <Box>Do not you remember password?</Box>
                    <Box><Link to="/register" target="_blank">Create a new Accounl</Link></Box>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
