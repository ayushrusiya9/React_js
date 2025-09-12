import React from "react";
import { Routes,Route,Link } from "react-router-dom";
import Rhome from "./Rhome";
import Rabout from "./Rabout";
import Rcontact from "./Rcontact";

const App = () =>{
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
            
            <Routes>
                <Route path="/" element={<Rhome/>}/>
                <Route path="/about" element={<Rabout/>}></Route>
                <Route path="/contact" element={<Rcontact/>}></Route>
            </Routes>

            
        </>
    )
}

export default App;