import React from "react";
import styled from "styled-components";
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";

export default function ProductItem(props){
    const {img} = props?.item
    return(
        <Container>
            <Circle />
            <Image src={img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

const Info = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.5s all ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5fbfd;
  position: relative;
  
  &:hover ${Info} {
    opacity: 1;
  }
`

const Circle = styled.div `
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
`

const Image = styled.img `
  height: 75%;
  z-index: 2;
`

const Icon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: 0.5s all ease;
  
  &:hover {
    background: #e9f5f5;
    transform: scale(1.1);
  }
`
