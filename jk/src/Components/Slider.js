import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import {slideritems} from '../data'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    overflow:hidden;
    position: relative;
    /* background-color:coral; */
    
`

const Arrow = styled.div`
  width:50px;
  height:50px;
  background-color:white;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  position:absolute;
  top:0;
  bottom:0;
  /* left:0; */
  left:${props => props.direction === "left" && "10px"};
  right:${props => props.direction === "right" && "10px"};
  margin:auto;
  cursor:pointer;
  opacity:0.5 ;
  /* z-index: 2; */
`

const Wrapper = styled.div`
  height:100%;
  display:flex;
  transition:all 1.5s ease;
  transform:translateX(${props => props.slideIndex * -100}vw);

`

const Slide = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-items:center;
  background-color:lightgray;
`
const ImgContainer = styled.div`
  padding-left:140px;
  padding-top:40px;
  width:100%;
  height:100%;
  flex:1;
`

const InfoContainer = styled.div`
   flex:1;
   padding:50px 0;
`
const Title = styled.h1`
  font-size:70px;
`
const Desc = styled.p`
  margin:50px 0;
  font-size:20px;
  font-weight:500;
  letter-spacing:3px;
`
const Button = styled.button`
  padding:10px;
  font-size:20px;
  background-color:transparent;
  cursor: pointer;
`

const Image = styled.img`
  height:80%;
`


const Slider = () => {

  const [slideIndex,setSlideIndex]=useState(0);

  const handleClick = (direction) => {
    if(direction == "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }
    else{
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  }

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {slideritems.map(item =>(
          <Slide key={item.id}>
          <ImgContainer>
            <Image src={item.img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOW NO</Button>
          </InfoContainer>
        </Slide>

        ))}
      </Wrapper>
      <Arrow direction="left" onClick={()=>handleClick("left")}><AiOutlineArrowLeft /></Arrow>
      <Arrow direction="right" onClick={()=>handleClick("right")}><AiOutlineArrowRight /></Arrow>
    </Container>
  )
}

export default Slider
