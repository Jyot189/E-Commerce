import React from 'react'
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaPinterest } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';


const Container = styled.div`
    display:flex;
`
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding:20px;
`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer= styled.div`
    display:flex;
`
const SocialIcon= styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color:#${props => props.color};
    display:flex;
    align-items: center;
    justify-content:center;
    margin:10px;
`

const Center = styled.div`
    flex: 1;
    padding:20px;
`
const Title = styled.h3`
    margin-bottom:30px;

`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display:flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;
`

const Right = styled.div`
    flex: 1;
    padding:20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display:flex;
    align-items: center;

`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA</Logo>
            <Desc>
                These are many variations of passages of lorem available, but the majority are
                suffered alterations in some form, by injected humour , or randomized words which
                don't look even slightly .
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <FaFacebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <BsInstagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <BsTwitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <FaPinterest/>
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
                <ListItem>Terms</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><FaMapMarkerAlt style={{marginRight:"10px"}}/>604 Setu Height, India</ContactItem>
            <ContactItem><FiPhone style={{marginRight:"10px"}}/>+91 50290 33033</ContactItem>
            <ContactItem><MdEmail style={{marginRight:"10px"}}/>contact@lama.dev</ContactItem>
            <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9BUCd7Jm3WE_NUZdGEmATeTdTDb3ggPY0XxGNj0lRedFV0d1EsKrZRmhqUgenuFKoqw&usqp=CAU"/>
        </Right>
    </Container>
  )
}

export default Footer
