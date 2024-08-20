import React from "react";
import {Routes, Route} from "react-router-dom"

import HomeContent from "./content/Home"
import AboutContent from "./content/About"
import UserContent from "./content/User"

export default function AppRouter(){
    return (
        <Routes>
            <Route exact path="/" element={<HomeContent />}/>
            <Route path="/sobre" element={<AboutContent />}/>
            <Route path="/perfil" element={<UserContent />}/>
        </Routes>
    )
}