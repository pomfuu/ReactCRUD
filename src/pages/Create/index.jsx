/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "../../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
    
    const [form, setForm] = useState({
        name: '',
        description: '',
        type: 'beverage',
        imageUrl: '',
        price: '',
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }
    console.log("form", form)

    const handleSubmit = () => {
        form.price = Number(form.price)

        // config authorization yg isinya token
        const token = localStorage.getItem('accessToken')
        const config = {
            headers: {
                Authorization : `Bearer ${token}`
            }
        }

        // req post
        axios
            .post('https://api.mudoapi.tech/menu', form, config )
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err)=>{
                console.log(err.response)
            })
    }

    return(
        <div>
            <Navbar />
            <h1 className="ms-5">Create Menu</h1>
            <div className="container">
            <div className="row gap-3 form-list">
                <label htmlFor="name" className="fw-semibold p-0">Food Name</label>
                <input onChange={handleChange} placeholder="Name" name="name" id="" />
                <label htmlFor="description" className="fw-semibold p-0">Food Desc</label>
                <input type="text"
                    onChange={handleChange}
                    name="description"
                    placeholder="description"
                />
                <label htmlFor="type" className="fw-semibold p-0">Food Type</label>
                <select onChange={handleChange} name="type" id="">
                    <option value={"beverage"}>Beverage</option>
                    <option value={"main-dish"}>Main Dish</option>
                </select>
                <label htmlFor="imageUrl" className="fw-semibold p-0">Food Img</label>
                <input type="text"
                    onChange={handleChange}
                    name="imageUrl"
                    placeholder="image Url"
                />
                <label htmlFor="price" className="fw-semibold p-0">Food Price</label>
                <input onChange={handleChange} name="price" type="number" placeholder="harga" />
            </div>
            <div>
                <button onClick={handleSubmit} className="my-4 btn btn-primary">Submit</button>
            </div>
            </div>
        </div>
    )
}

export default Create;