import React from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs';
import {MdLocalGroceryStore} from 'react-icons/md'
import { Link,useNavigate } from "react-router-dom";

const Container = styled.div`
    height:60px;
`

const SearchContainer= styled.div`
    border:0.5px solid lightgray;
    display:flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`

const Input = styled.input`
  border: none;
`
const Logo= styled.h1`
  font-weight:bold ;
`

const Wrrapper = styled.div`
  padding:10px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
`
const Left = styled.div`
  flex:1;
  display:flex;
  align-items:center;
`

const Lanuage = styled.span`
  font-size:14px;
  cursor: pointer;
`

const Center = styled.div`
  flex:1;
  text-align:center;
`
const Right = styled.div`
  flex:1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`

const MenuItem = styled.div`
  font-size:14px;
  cursor: pointer;
  margin-left: 25px;
`
const Button = styled.button`
    width:70%;
    border:none;
    padding:5px 10px;
    background-color:teal;
    color:white;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:10px ;
`
const Navbar = () => {
  const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }
  return (
    < Container>
      <Wrrapper>
        <Left>
          <Lanuage></Lanuage>
          <SearchContainer>
            <Input></Input>
            <BsSearch style={{color: 'gray',fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center><Logo>LAMA</Logo></Center>
        {!localStorage.getItem('token') ?<Right>
          <MenuItem><Link to="/register" target="_blank">REGISTER</Link></MenuItem>
          <MenuItem><Link to="/login" target="_blank">SIGN IN</Link></MenuItem>
        </Right>
        :<Right>
          <MenuItem><Button onClick={handleLogout}>logout</Button></MenuItem>
          <MenuItem><Link to="/cart"><MdLocalGroceryStore/></Link></MenuItem>
        </Right>}
      </Wrrapper>
    </Container>
  )
}

export default Navbar
