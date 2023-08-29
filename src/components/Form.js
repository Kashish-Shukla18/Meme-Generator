import React from "react";
import memesData from "./memesdata.js"
export default function Form() {
    const [memeImage, setMemeimage] = React.useState({ 
        First: "",
        Last: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeimage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }
    function handleChange(event){
        const{name,value}=event.target
        setMemeimage(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" name="First" value={memeImage.First} onChange={handleChange}></input>
                <input type="text" className="form--input" placeholder="Bottom Text" name="Last" value={memeImage.Last} onChange={handleChange}></input>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼 "</button>
                
            </div>
            <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.First}</h2>
                <h2 className="meme--text bottom">{memeImage.Last}</h2>
            </div>
        </main>
    )
}