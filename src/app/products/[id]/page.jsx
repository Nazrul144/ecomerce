"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailsPage = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const res = await fetch(`http://localhost:3000/products/api/${params.id}`);
      const data = await res.json();
      setProducts(data.res);
    };
    getAllProducts();
  }, []);
  console.log(products);
  return (
    <div className="w-[1100px] mx-auto">
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
           <Image src={products.image} alt="Image" width={300} height={200}/>
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-xl font-bold leading-none sm:text-6xl">
              Brand: {products.name}
            </h1>
            <h1>Price: {products.price}</h1>
            <h1>Description: {products.description}</h1>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link href={'/'}
                rel="noopener noreferrer"
               
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
              >
                Back to home
              </Link>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800"
              >
                Malesuada
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
