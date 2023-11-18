import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../Navbar";

const UserDetail = () => {

    const param = useParams()
    console.log(param.id)

    const [menu, setMenu] = useState({})
    const [error, setError] = useState("")

    const getMenuDetail = () => {
        axios
        .get(`https://api.mudoapi.tech/menu/${param.id}`)
        .then((respon)=>{
            setMenu(respon.data.data)
        })
        .catch((error)=>{
            console.log(error.response.data)
            setError(error.response.data)
        })
    }
    console.log(menu)

    useEffect(()=>{
        getMenuDetail()
    }, [])

    return (
        <div>
            <Navbar />
            <Link className="fw-semibold text-decoration-none text-black" to={"/"} >
                <p> {'<'} Back to Home </p>
            </Link>
            <h1>Ini Halaman User Detail</h1>
            {
                error.length ? <h1> {error} </h1> : null 
            }
            <div className="container">
                <p> {menu.name} </p>
                <img src= {menu.imageUrl} alt="img" className="img-fluid" />
                <p> ${menu.price} </p>
                <p> {menu.description} </p>
            </div>
        </div>
    )
}

export default UserDetail;