import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line

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
    width:25%;
    padding:20px;
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

const Agreement = styled.span`
    font-size:12px;
    margin: 20px 0px;
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
`

const Register = () => {

    const BASE_URL = process.env.REACT_APP_BACKEND_API;

    const [credentials, setCredentials] = useState({ firstname: "", lastname: "", email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((credentials.password === credentials.confirmPassword)) {
            const response = await fetch(`${BASE_URL}/createuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: credentials.firstname,
                    lastname: credentials.lastname,
                    email: credentials.email,
                    password: credentials.password
                }),
            });
            const json = await response.json();
            console.log(JSON.stringify(json));
            if (json.success) {
                console.log(json);
                navigate('/login');

            } else {
                alert('not register');
            }
            console.log("Login:" + JSON.stringify(json));
        } else {
            setCredentials({ name: "", email: "", password: "", confirmPassword: "" })
            navigate('/register');
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
        // setNote({id:e._id,title:e.title,description:e.description,tag:e.tag})
    }

    return (
        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form onSubmit={handleSubmit}>
                    <Input placeholder="First Name" name="firstname" value={credentials.firstname} onChange={onChange} />
                    <Input placeholder="Last Name" name="lastname" value={credentials.lastname} onChange={onChange} />
                    {/* <Input placeholder="Username" /> */}
                    <Input placeholder="Email" name="email" value={credentials.email} onChange={onChange} />
                    <Input placeholder="Password" name="password" value={credentials.password} onChange={onChange} />
                    <Input placeholder="Confirm Password" name="confirmPassword" value={credentials.confirmPassword} onChange={onChange} />
                    <Agreement>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
