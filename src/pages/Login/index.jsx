import Navbar from "../../Navbar";

const Login = () => {
    return (
        <div>
            <Navbar/>
            <form action="">
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login;