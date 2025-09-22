import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Rhome from "./Rhome";
import Rabout from "./Rabout";
import Rcontact from "./Rcontact";
import Layout from "./Layout";

const App = () => {
    return (
        <>


            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Rhome />}/>
                    <Route path="about" element={<Rabout />} />
                    <Route path="contact" element={<Rcontact />} />
                    <Route path="*" element={<h1>Error</h1>} />
                </Route>

            </Routes>


        </>
    )
}

export default App;