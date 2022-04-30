import React from 'react'
import styled from 'styled-components'

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

const Button = styled.div`
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
    return (
        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Confirm Password" />
                    <Agreement>By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
