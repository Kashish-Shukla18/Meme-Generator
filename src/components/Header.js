import React from "react";
export default function Header(){
    return(
        <div className="header">
            <img src={require("../images/Logo.png")} className="header--img"/>
            <h2 className="header--title">Meme Generator</h2>
            <h3 className="header--project">React Course - Project 3</h3>
        </div>
    )
}