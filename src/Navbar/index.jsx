import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="col d-flex gap-5 p-4 mb-4" style={{ backgroundColor:"#1e1e1e" }}>
            <Link className="text-decoration-none text-white" to={"/"}>
                <p>Home</p>
            </Link>
            <Link className="text-decoration-none text-white" to={"/login"}>
                <p>Login</p>
            </Link>
        </div>
    )
}

export default Navbar;