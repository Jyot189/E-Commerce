import React,{useContext,useEffect} from 'react'
import styled from 'styled-components'
// import {popularProducts} from '../data'
import Product from './Product'
import itemContext from '../context/items/itemContext'

const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:space-between;
`

const Products = () => {
  const context = useContext(itemContext);
  const {popularProducts,getPopularProducts}=context;

  useEffect(()=>{
    getPopularProducts();
    // eslint-disable-next-line
  },[])
  return (
    <Container>
        {
            popularProducts.map(item => (
                <Product item={item} key={item.id}/>
                ))
        }
    </Container>
  )
  }
export default Products
