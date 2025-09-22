import React from "react";
import { Link,Outlet } from "react-router-dom";
import Rhome from "./Rhome";
import Rabout from "./Rabout";
import Rcontact from "./Rcontact";

const Layout = () =>{
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            
            

            <Outlet/>
        </>
    )
}

export default Layout;