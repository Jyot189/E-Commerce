import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai'
import { Link } from "react-router-dom";
import itemContext from '../context/items/itemContext'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../state/index'

const Info = styled.div`
    opacity:0;
    width: 100%;
    height:100% ;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.2);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index: 3;
    transition:all 1s ease;
    cursor:pointer;
`
const Container = styled.div`
    flex: 1;
    margin:5px;
    min-width: 280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f5fbfd;
    position:relative;

    &:hover ${Info}{
        opacity: 1;
    }
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;

`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:all 0.5s ease;

    &:hover{
        background-color:#e9f5f5;
        transform: scale(1.1);
    }
`


const Product = ({ item }) => {
    const context = useContext(itemContext);
    const {  setCartItem } = context;
    const dispatch = useDispatch();
    const {depositMoney,withdrawMoney}=bindActionCreators(actionCreators,dispatch);
    // console.log("item:" + JSON.stringify(item))

    // const clickHandler=(item)=>{
        
    // }
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <Link to="/cart" >
                        <div onClick={()=>{depositMoney(item)}}><AiOutlineShoppingCart /></div>
                        {/* <AiOutlineShoppingCart /> */}
                    </Link>
                </Icon>
                <Icon>
                    <Link to="/productlist"><BsSearch /></Link>
                </Icon>
                <Icon>
                    <AiOutlineHeart />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
