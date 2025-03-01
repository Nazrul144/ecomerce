"use client";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Link from "next/link";


const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch("http://localhost:3000/products/api");
      const data = await res.json();
      setProducts(data.res);
    };
    getAllProducts();
  }, []);


  return (
    <div className="w-[1100px] mx-auto">
      <div className="grid grid-cols-3 gap-6">
        {products?.map((product) => (
          <Card key={product._id} sx={{ maxWidth: 345 }}>
            <Image  src={product.image} height={200} width={300} alt="Image"/>
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
      </div>
    </div>
  );
};

export default Products;
