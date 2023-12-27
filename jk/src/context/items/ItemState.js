import { useState } from 'react';
import ItemContext from './itemContext'

const ItemState=(props)=>{
    const host =process.env.REACT_APP_BACKEND_API
    const [categories, setCategories] = useState([{}]);
    const [popularProducts, setPopularProducts] = useState([{}]);
    const [sliderItems, setSliderItems] = useState([{}]);
    const [cartItem,setCartItem]=useState([{}]);

    const getCategories = async() => {
        fetch(`${host}/product/fetchallCategories`, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          setCategories(data)
        })
        // const getAllResponse = await fetch(`${host}/product/fetchallCategories`, {
        //     method: "GET",
        //     credentials: "same-origin",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // const json = await getAllResponse.json();
        
        // // console.log("getCategories :"+JSON.stringify(json));
        // setCategories(JSON.stringify(json));
        // // return JSON.stringify(json);
        // // console.log("categories:"+categories)
        // //TODO:API call
    }

    const getPopularProducts = async() => {
        fetch(`${host}/product/fetchallPopularProducts`, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          setPopularProducts(data)
        })
        // const getAllResponse = await fetch(`${host}/product/fetchallPopularProducts`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // const json = await getAllResponse.json();
        
        // console.log("getPopularProducts :"+JSON.stringify(json));
        // setPopularProducts(JSON.stringify(json));
        //TODO:API call
    }

    const getSliderItems = async() => {
        fetch(`${host}/product/fetchallSlideritems`, {
            method: "GET",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then(data => {
          console.log(data);
          setSliderItems(data)
        })
        // const getAllResponse = await fetch(`${host}/product/fetchallSlideritems`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // const json = await getAllResponse.json();
        
        // console.log("getSliderItems :"+JSON.stringify(json));
        // setSliderItems(JSON.stringify(json));
        //TODO:API call
    }


    return (
        <ItemContext.Provider value={{categories,getCategories,popularProducts,getPopularProducts,sliderItems,getSliderItems,cartItem,setCartItem}}>
            {props.children}
        </ItemContext.Provider>
    )
}

export default ItemState