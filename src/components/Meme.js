import React, { useEffect, useState } from 'react'
import Folder from '../images/Get a new meme image.png';
//import memesData from "../memesData.js"
//import Memeimg from '../images/memeimg.png';
import '../index.css';


/**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */


const Meme = () => {

    // function handleMouseOver() {
    //     console.log('Mouse Over');
    // }
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [memesImage, setMemesImage] = useState([])

    useEffect(async () => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesImage(data.data.memes))
    }, [])

    // useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setMemesImage(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    function getMemeImage() {
        //const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesImage.length)
        const url = memesImage[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
                ...prevMeme,
                [name]: value
        }))
    }

  return (
    <main>
        <div className='memecov'>
            <div className='form'>
                <input  type='text' 
                        placeholder='Top text' 
                        className='shut' 
                        name='topText'
                        value={meme.topText}
                        onChange={handleChange}
                />

                <input  type='text' 
                        placeholder='Bottom text' 
                        className='money'
                        name='bottomText'
                        value={meme.bottomText}
                        onChange={handleChange}
                />
                <button className='btn' 
                        onClick={getMemeImage}> 

                    <img src={Folder} 
                         alt=''
                    />
                </button>
            </div>

            {/* <img src={Memeimg} alt='' className='memeimg' onMouseOver={handleMouseOver} /> */}

            <div className='meme'>
                <img src={meme.randomImage} alt='' className='memeimg' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    </main>
  )
}

export default Meme
