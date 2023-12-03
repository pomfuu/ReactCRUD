import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../../Navbar"

const Home = () => {
    const [menus, setMenus] = useState([])
    const [paging, setPaging] = useState({
      currentPage: 1,
      previousPage: 0,
      nextPage: 2,
    })

    const getMenus = () => {
      axios
      .get(`https://api.mudoapi.tech/menus?name=&type=&perPage=10&page=${paging.currentPage}`)
      .then( (respon) => {
        setMenus(respon.data.data.Data)
        setPaging({
          currentPage: respon.data.data.currentPage,
          previousPage: respon.data.data.previousPage,
          nextPage: respon.data.data.nextPage,
        })
      })
      .catch((error)=>{
        console.log(error)
      })
    }
    console.log(menus)
  
    useEffect(()=>{
      getMenus();
    }, [paging.currentPage]);

    const handleBack = () => {
      setPaging({
        ...paging,
        currentPage: paging.currentPage - 1,
      })
    }

    const handleNext = () => {
      setPaging({
        ...paging,
        currentPage: paging.currentPage + 1
      })
    }

    const handleDelete = (id) => {
      const token = localStorage.getItem("accessToken")
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      axios
        .delete(`https://api.mudoapi.tech/menu/${id}`, config)
        .then((res) => {
          console.log(res)
          getMenus()
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    return(
        <div>
            <Navbar/>
            <h1>Ini Halaman Home</h1>
            <h1>Page {paging.currentPage}</h1>
            <div>
              <button onClick={handleBack} disabled={!paging.previousPage}>Back</button>
              <button onClick={handleNext} disabled={!paging.nextPage}>Next</button>
            </div>
            { menus.length ? (
                menus.map((item,index)=>(
                    <div key={index}>
                        <p> {item.name} </p>
                        <img src={item.imageUrl} width={"200px"} height={"200px"} style= {{ objectFit : 'cover' }} />
                        <p> ${item.price} </p>
                        <Link to={`/user/${item.id}`}>
                            <button className="btn btn-primary">Detail</button>
                        </Link>
                        <button onClick={() => handleDelete(item.id)} className="btn btn-primary ms-2">Delete</button>
                    </div>
                ))
            ) : <h1>Loading...</h1> }
        </div>
    )
}

export default Home;