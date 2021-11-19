import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                console.log(res)
            })

    }
    return (
        <div className="add-product">
            <h3>Add New Products</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="title" {...register("title")} />
                <input placeholder="image" {...register("image_url")} />
                <textarea placeholder="description" {...register("description")} />
                <input placeholder="price" {...register("price")} type="number" />
                <input placeholder="type" {...register("type")} type="string" />

                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;