import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetail from "./pages/UserDetail";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <Home/> } />
        <Route path="/login" element = { <Login/> } />
        <Route path="/new-menu" element = { <Create/> } />
        <Route path="/user/:id" element = { <UserDetail/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
