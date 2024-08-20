import React from "react";
import Main from '../components/Main'

export default function AppAbout(){
    return(
        <Main icon='info' title='SOBRE' subtitle='NODE + REACT'>
            <div className="text-white px-3 py-2 ">
                <h1>Sobre</h1>
                <p>Tudo sobre React</p>
            </div>
        </Main>
    )
}