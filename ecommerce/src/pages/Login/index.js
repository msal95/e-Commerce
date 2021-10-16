import React from "react";
import styled from "styled-components";
import {mobile} from "../../Responsive";

export default function Login () {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder='UserName'/>
                    <Input placeholder='Password'/>
                    <Button>LOGIN</Button>
                    <Link>Forgot Password</Link>
                    <Link>Create New Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  ${mobile({width: '75%'})}
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  border-bottom: 2px solid teal;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`


const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background: teal;
  margin-bottom: 10px;
`

const Link = styled.a `
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
