import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken")
    console.log("token", accessToken)

    const logout = () => {
        localStorage.removeItem("accessToken")
        navigate("/login")
        // localStorage.clear();
    }
    
    const handleClick = () => {
        if (accessToken) {
            localStorage.removeItem("accessToken");
            navigate('/');
        } else {
            navigate('/login');
        }
    };
    
    return (
        <div className="col d-flex gap-5 p-4 mb-4" style={{ backgroundColor:"#1e1e1e" }}>
            <Link className="text-decoration-none text-white" to={"/"}>
                <p>Home</p>
            </Link>
            <Link className="text-decoration-none text-white" to={"/new-menu"}>
                <p>Create Menu</p>
            </Link>
            {/* <Link onClick={() => accessToken ? navigate('/') : navigate('/login')} className="text-decoration-none text-white">
                <p> {accessToken ? "Logout" : "Login"} </p>
            </Link> */}
            { accessToken? 
                ( <Link className="text-decoration-none"><p className="text-white" onClick={logout}>Logout</p></Link> ) : ( <Link to={"/login"}  ><p>Login</p></Link> )
            }
        </div>
    )
}

export default Navbar;