import React, { useEffect, useCallback, useMemo,useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import BookComponent from "./BookComponent";

const ProductPage = () => {
  const [search, setSearch]= useState('')
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://www.googleapis.com/books/v1/volumes?q='+search+'health&key=AIzaSyArjpdUWJlz6CbQM7h7tlOaNdfAEBclN_U" + '& maxResults=100')
      .catch((err) => {
        // console.log(response)
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data.items));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  
  const products1 =(e)=>{
    if(e.key=='Enter')
    {
      console.log('adam')
    }
  }
  return (
    <> 
     <div className="ui fixed menu">
     
        <div className="header">
        <h2>Alera!!!</h2>
    
    <input type='text' placeholder='search here' className="header_input"
      
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      onKeyPress={products1}
      
      />
        </div>
    </div>


    <div className="ui grid container">
      <BookComponent />
    </div>
    </>
  );
};

export default ProductPage;