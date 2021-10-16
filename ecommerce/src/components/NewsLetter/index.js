import React from 'react'
import {Send} from "@material-ui/icons";
import styled from "styled-components";
import {mobile} from "../../Responsive";

export default function NewsLetter() {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get Timely updates from your favourite Products.</Description>
            <InputContainer>
                <Input placeholder='Your Email'/>
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

const Container = styled.div`
  height: 60vh;
  display: flex;
  background: #fcf5f5;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 20px;
`

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({textAlign: 'center'})}
`

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({width: '80%'})}
`

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`

const Button = styled.button`
  flex: 1;
  border: none;
  background: teal;
  color: #fff;
`
