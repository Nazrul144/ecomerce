"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { FaSearch } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState([])
  const [loading, setLoading] = useState(true);

  const [searchItems, setSearchItems] = useState('')

  //Showing all data after see more button click:
  // Step1: declare two state where one state will contain all data and another state will contain 6 data. And you will set it like setProducts(data.res) and for second state like: setVisible(data.res.slice(0,6)). Remember, when you keep 6 the data in the 2nd state you must slice it like slice(0, 6). now map the state and show six data in UI. Then when user will click see more button this time call a function and from the function setVisible(products)
  
  //Steps2: If you want showing 6 data step by step, this time just declare 2nd stare and assign static 6 value, now slice products when map like (0, stateName) that you have assigned 6. If user click see more button just call a function and setVisible(visible+6). That means add the value with it. How easy the process it right?


  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/api`);
      const data = await res.json();
      setProducts(data.res);
      setVisible(data.res.slice(0,6))
      setLoading(false)
    
    };
    getAllProducts();
  }, []);

  const handleIncrement = ()=>{
    setVisible(products)
  }

  const handleInputChange = (event)=>{
    setSearchItems(event.target.value)
    console.log(event.target.value);
  }

  //Handle search:
  const handleSearch = (event)=>{
    console.log(searchItems);
  }
  
  return (
    <div className="lg:w-[1100px] mx-auto">
      <h1 className="font-bold text-center mt-4">Search Your Products</h1>
      <div className="lg:w-[1100px] border-2 border-amber-400 rounded-xl mx-auto mt-4">
        <input onChange={handleInputChange} className="px-4 py-2 lg:w-full relative" type="text" placeholder="Search..." />
        <FaSearch onClick={handleSearch} className="absolute right-82 top-24 text-2xl" />
      </div>
      <div className="flex justify-center items-center text-2xl text-red-400 mt-20">
        {
          loading ?    <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box> : ""
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {visible?.map((product) => (
          <Card key={product._id} sx={{ maxWidth: 345 }}>
            <Image src={product.image} height={200} width={300} alt="Image" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <h1>{product.name}</h1>
                <h1 className="text-orange-500 text-sm">Price: {product.price}</h1>
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={`/products/${product._id}`}>View Details</Link>
            </CardActions>
          </Card>
        ))}
        <div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3">
      <Button onClick={handleIncrement}  color="secondary">See More</Button>
      </div>
    </div>
  );
};

export default Products;
