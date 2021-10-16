import React from 'react'
import styled from "styled-components";
import {CATEGORIES} from "../../Data/Constant";
import CategoryItem from "../CategoryItem";
import {mobile} from "../../Responsive";

export default function Categories(){
    return(
        <Container>
            { CATEGORIES.map((item)=>(
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    )
}

const Container = styled.div `
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({padding: 0, flexDirection: 'column'})}
`
