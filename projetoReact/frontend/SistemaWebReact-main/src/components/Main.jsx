import React from "react";
import Header from './Header'

export default function AppMain
        ({icon, title, children}){
    return(
        <React.Fragment>
            <Header icon={ icon } title={ title }>

            </Header>
            <main className="maincontent"> 
                { children }
            </main>
        </React.Fragment>
    )
}