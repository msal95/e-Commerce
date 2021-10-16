import React, {useState} from "react";
import styled from "styled-components";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {SLIDER_ITEMS} from "../../Data/Constant";
import {mobile} from "../../Responsive";

export default function Slider() {
    const [slideIndex, setSLideIndex] = useState(0)

    const handleOnClick = (direction) => {
        if (direction === 'left') {
            setSLideIndex(slideIndex > 0 ? slideIndex - 1 : 2
            )
        } else {
            setSLideIndex((slideIndex < 2 ? slideIndex + 1 : 0))
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleOnClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SLIDER_ITEMS.map(item => (
                    <Slide background={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img}/>
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => handleOnClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display: 'none'})}
`

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === 'left' && "10px"};
  right: ${props => props.direction === 'right' && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * - 100}vw);
  transition: 1.5s all ease;
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: ${props => props.background};
`

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`

const InfoContainer = styled.div`
  flex: 1;
`

const Title = styled.h1`
  font-size: 70px;
`

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`
