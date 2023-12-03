import { useState } from "react";
import Navbar from "../../Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onChangeUsername = (event) => {
        setUsername(event.target.value)
        console.log(event.target.value)
        setError('')
        setSuccess('')
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        console.log(event.target.value)
        setError('')
        setSuccess('')
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        const payload = {
            username: username,
            password: password,
        }
        console.log(payload)
        
        axios
        .post("https://api.mudoapi.tech/login", payload)
        .then((res)=>{
            const token = res.data.data.token
            localStorage.setItem("accessToken", token)
            console.log(res)
            setSuccess(res.data.message)
            
            navigate("/")
        })
        .catch((error)=>{
            console.log(error.response)
            setError(error.response.data.message)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    console.log(loading)
    
    return (
        <div>
            <Navbar/>
            {error.length ? <h1> {error} </h1> : null}
            {success.length ? <h1> {success} </h1> : null}
            <form method="POST">
                <div>
                    <label>Username</label>
                    <input onChange={onChangeUsername} type="text" />
                </div>
                <div>
                    <label>Password</label>
                    <input onChange={onChangePassword} type="password" />
                </div>
                <button disabled= { loading ? true : false } onClick={onSubmit} className="btn btn-primary"> { loading? "loading...." : "Submit" } </button>
            </form>
        </div>
    )
}

export default Register;