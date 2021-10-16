import React from "react";
import styled from "styled-components";
import {mobile} from "../../Responsive";

export default function CategoryItem(props){

    const {title, img} = props?.item

    return(
        <Container>
            <Image src={img}/>
            <Info>
                <Title>{title}</Title>
                <Button>Shop Now</Button>
            </Info>
        </Container>
    )
}

const Container = styled.div `
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`

const Image = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({height: '30vh'})}
`

const Info = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1 `
  color: white;
  margin-bottom: 20px;
`

const Button = styled.button `
  border: none;
  padding: 10px;
  background: #fff;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`
