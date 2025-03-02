"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(6)
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/api`);
      const data = await res.json();
      setProducts(data.res);
    };
    getAllProducts();
  }, []);

  const handleIncrement = ()=>{
    setVisibleProducts(visibleProducts +2)
  }

  return (
    <div className="w-[1100px] mx-auto">
      <h1>This is my product page</h1>
      <div className="grid grid-cols-3 gap-6">
        {products?.slice(0, visibleProducts).map((product) => (
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
      <Button onClick={handleIncrement} color="secondary">See More</Button>
      </div>
    </div>
  );
};

export default Products;
