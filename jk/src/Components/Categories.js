import React,{useContext,useEffect} from 'react'
import styled from 'styled-components';
// import {categories} from '../data';
import CategoryItem from './CategoryItem';
import itemContext from '../context/items/itemContext'

const Container =styled.div`
    display:flex;
    /* padding: 20px; */
`

const Categories =  () => {
  
  const context = useContext(itemContext);
  const {categories, getCategories}=context;

  useEffect(()=>{
    getCategories();
    // eslint-disable-next-line
  },[])
  // useEffect(() =>{
  //   fetch(`${host}/product/fetchallCategories`, {
  //     method: "GET",
  //     credentials: "same-origin",
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  // })
  // .then((response) => response.json())
  // .then(data => {
  //   console.log(data);
  //   setg(data)
  // })
  
// eslint-disable-next-line
  // },[])

  // useEffect(async() => {
  //   try {
  //     const jhj=await getCategories();
  //     console.log(JSON.stringify(jhj));
  //     setCategories([{"_id":"6523e3d6d582194ba5d3a1a0","img":"https://m.media-amazon.com/images/I/61u2LOB7VFL._AC_UL1001_.jpg","title":"shirt style"}])
  //   setg(jhj)
  //   } catch (error) {
      
  //   }
  
  // },[]);
  // console.log("jffjj")
  // useEffect(() => {
  //   // alert('jjj')
  //   console.log("jjj")
  //   getCategories();
  //   // eslint-disable-next-line
  // }, [])
  // console.log("getPopularProducts :"+categories);
  return (
    <Container>
        {
            categories.map(item => (
                <CategoryItem key={item._id} item={item}/>
            ))
        }
    </Container>
  )
};

export default Categories
