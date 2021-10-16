import React from "react";
import styled from "styled-components";

export default function Announcement(){
    return (
        <Container>
            Super Deals! Free Shipping over order of 50$.
        </Container>
    )
}

const Container = styled.div `
  height: 30px;
  background: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`
