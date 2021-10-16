import React from "react";

import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {mobile} from "../../Responsive";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <NavbarLeft>
                    <Languages>EN</Languages>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: 'gray', fontSize: 16}}/>
                    </SearchContainer>
                </NavbarLeft>
                <NavbarCenter>
                    <Logo><StyledLink to='/'>MSAL.</StyledLink></Logo>
                </NavbarCenter>
                <NavbarRight>
                    <MenuItem><StyledLink to='/register'>REGISTER</StyledLink></MenuItem>
                    <MenuItem><StyledLink to='/login'>SIGNIN</StyledLink></MenuItem>
                    <MenuItem>
                        <StyledLink to='/cart'>
                            <Badge color="primary" badgeContent={6}>
                                <ShoppingCartOutlined/>
                            </Badge>
                        </StyledLink>
                    </MenuItem>
                </NavbarRight>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
  height: 60px;
  ${mobile({height: 50})}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`

const NavbarLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: 'none'})}
`

const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({width: 50})}
`

const NavbarCenter = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: 24})};
  text-decoration: none;
`
const StyledLink = styled(Link) `
  text-decoration: none;
`
const NavbarRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({flex: 2, justifyContent: 'center'})}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({fontSize: 12, marginLeft: 10})};
  text-decoration: none;
`
