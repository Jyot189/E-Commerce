import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import { GrAdd } from 'react-icons/gr';
import { AiOutlineMinus } from 'react-icons/ai';


const Container = styled.div``

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight:300;
    text-align:center;
`

const Top= styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor: pointer;
    border:${props => props.type ==="filled" && "none"};
    background-color:${props => props.type ==="filled" ?"black":"transparent"};
    color:${props => props.type ==="filled" && "white"};
`
const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`

const Bottom= styled.div`
    display:flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const Product = styled.div`
    display:flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex:2;
    display: flex;
`

const Image = styled.img`
    width:200px;
`

const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
    
`

const ProductAmount = styled.div`
    font-size:24px;
    margin: 5px;

`

const ProductPrize = styled.div`
    font-size:30px;
    font-weight:200;
`

const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`

const Summary=styled.div`
    flex:1;
    border:0.5px solid lightgray;
    border-radius:10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight:200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
    width: 100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:600;
`




const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
          <Title>Your Bag</Title>
          <Top>
              <TopButton>Continue Shoping</TopButton>
              <TopTexts>
                  <TopText>Shoping Bag (2)</TopText>
                  <TopText>Your Wishlist (0)</TopText>
              </TopTexts>
              <TopButton type="filled">Check Now</TopButton>
          </Top>
          <Bottom>
              <Info>
                  <Product>
                  <ProductDetail>
                      <Image src="data:image/jpeg;base64,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"/>
                      <Details>
                          <ProductName><b>Product:</b>JESSIE THUNDER</ProductName>
                          <ProductId><b>Id:</b>48748</ProductId>
                          <ProductColor color="black"/>
                          <ProductSize><b>Size:</b>37.5</ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                      <ProductAmountContainer>
                            <GrAdd/>
                                <ProductAmount>2</ProductAmount>
                            <AiOutlineMinus/>
                      </ProductAmountContainer>
                      <ProductPrize>$ 30</ProductPrize>
                  </PriceDetail>
                  </Product>
                    <Hr/>
                  <Product>
                  <ProductDetail>
                      <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"/>
                      <Details>
                          <ProductName><b>Product:</b>JESSIE THUNDER</ProductName>
                          <ProductId><b>Id:</b>48748</ProductId>
                          <ProductColor color="gray"/>
                          <ProductSize><b>Size:</b>M</ProductSize>
                      </Details>
                  </ProductDetail>
                  <PriceDetail>
                      <ProductAmountContainer>
                            <GrAdd/>
                                <ProductAmount>2</ProductAmount>
                            <AiOutlineMinus/>
                      </ProductAmountContainer>
                      <ProductPrize>$ 20</ProductPrize>
                  </PriceDetail>
                  </Product>
              </Info>
              <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Check Out</Button>
              </Summary>
          </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
