import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../../Navbar"

const Home = () => {
    const [menus, setMenus] = useState([])

    const getMenus = () => {
      axios
      .get(`https://api.mudoapi.tech/menus`)
      .then( (respon) => {
        setMenus(respon.data.data.Data)
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    console.log(menus)
  
    useEffect(()=>{
      getMenus();
    }, []);

    return(
        <div>
            <Navbar/>
            <h1>Ini Halaman Home</h1>
            { menus.length ? (
                menus.map((item,index)=>(
                    <div key={index}>
                        <p> {item.name} </p>
                        <img src={item.imageUrl} width={"200px"} height={"200px"} style= {{ objectFit : 'cover' }} />
                        <p> ${item.price} </p>
                        <Link to={`/user/${item.id}`}>
                            <button className="btn btn-primary">Detail</button>
                        </Link>
                    </div>
                ))
            ) : <h1>Loading...</h1> }
        </div>
    )
}

export default Home;