import React from "react";
import styled from "styled-components";
import {Email, Facebook, Instagram, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";
import {mobile} from "../../Responsive";

export default function Footer() {
    return (
        <Container>
            <Left>
                <Logo>MSAL.</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color='3B5999'>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color='E60023'>
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms&Conditions</ListItem>
                    <ListItem>Privacy</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:10}} />
                    PHA Flats, G10/2, Islamabad
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:10}} />
                    +92-312-4822917
                </ContactItem>
                <ContactItem>
                    <Email style={{marginRight:10}} />
                    contact@msal.com
                </ContactItem>
                <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  ${mobile({flexDirection: 'column'})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Description = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background: #${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: 'none'})}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({background: '#fff8f8'})}
`

const ContactItem = styled.div `
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img `
  width: 50%;
`
