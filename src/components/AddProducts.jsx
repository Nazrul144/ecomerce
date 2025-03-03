'use client'
import React from 'react';

const AddProducts = () => {

    const handleAddItems = async(event)=>{
        event.preventDefault()
        const items = {
            product : event.target.product.value,
            price : event.target.price.value,
            category : event.target.category.value,
            brand : event.target.brand.value,
            rating : event.target.rating.value,
            image : event.target.image.value,
            description : event.target.description.value,
        }
    
        const response = await fetch('/addProducts/api',{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
        const result = await response.json()
        console.log(result);
    }

    return (
        <div className='w-[1100px] mx-auto'>
            <form onSubmit={handleAddItems} className='border-2 border-rose-400 p-10 rounded-2xl mt-10 w-96 mx-auto' >
                <input className='border-2 border-amber-500 p-2 rounded-lg mb-2' type="text"  name='product' placeholder='Add your products' /> <br />
                <input className='border-2 border-amber-500 p-2 rounded-lg mb-2' type="number" name='price' placeholder='Price' /> <br />
                <input className='border-2 border-amber-500 p-2 rounded-lg mb-2' type="text" name='category' placeholder='Category' /> <br />
                <input className='border-2 border-amber-500 p-2 rounded-lg mb-2' type="text" name='brand' placeholder='Brand name' /> <br />
                <input className='border-2 border-amber-500 p-2 rounded-lg mb-2' type="number" name='rating' placeholder='Add the rating' /> <br />
                <input className='border-2 border-amber-500 p-2 rounded-lg mb-2' type="text" name='image' placeholder='Add the image' /> <br />
                <input className='border-2 border-amber-500 p-2 rounded-lg mb-2' type="text" name='description' placeholder='Write the description' /> <br />
                <input className='btn p-2 rounded-lg cursor-pointer bg-red-400' type="submit" value="Add Item" />
            </form>
        </div>
    );
}

export default AddProducts;
