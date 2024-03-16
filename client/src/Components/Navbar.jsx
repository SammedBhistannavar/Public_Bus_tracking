import { NavLink } from "react-router-dom"
import "./Navbar.css";



export  const Navbar = ()=>{
    return <>
    <header>
        <div className="container">
            <div className="logo-BRAND">
               <NavLink to="/">BUS</NavLink>
            </div>
<div className="parent">
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink  to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/route">Route</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/map">Map</NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">Services</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/contact_us">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
    
    </>
}