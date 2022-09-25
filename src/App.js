import palavras from "./styles/palavras"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import React, { useState } from 'react'
import styled from 'styled-components';

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [game, setGame] = useState("disabled")

    const [gallowsAppear, setGallowsAppear] = useState("hide")

    const [mistakes, setMistakes] = useState()

    const [gallows, setGallows] = useState(forca0)

    const [word, setWord] = useState("")

    const [clicked, setclicked] = useState([])

    function gameBegins() {
        setGame("")
        setGallowsAppear("")
        setMistakes(0)

        const shuffledWords = palavras.sort(shuffle)

        const shuffledWord = shuffledWords[0]

        const wordArr = []

        for (let i = 0; i < shuffledWord.length; i++) {
            wordArr.push("_")
        }

        setWord(wordArr)


    }

    function keyboard(clickedWord) {

        setMistakes(mistakes + 1)
        
        setGallows()

        setclicked([...clicked, clickedWord])

    }

    return (
        <>
            <Header>
                <div className="left" data-identifier="game-image">
                    <img className={`${gallowsAppear}`} src={gallows} />
                </div>
                <div className="right">
                    <button onClick={gameBegins} data-identifier="choose-word">Escolher Palavra</button>
                    <p className="" data-identifier="word">{word}</p>
                </div>
            </Header>
            <div className="keyboard">
                {alfabeto.map((letter) =>
                    <button onClick={() => keyboard(letter)} className={`letter ${game} ${clicked.includes(letter) ? "selected" : ""}`} data-identifier="letter"  >
                        {letter}
                    </button>
                )}

            </div>
            <div className="guess">
                <p>Já sei a palavra!</p>
                <input className={game} data-identifier="type-guess" ></input>
                <button className={game} data-identifier="guess-button" >Chutar</button>
            </div>

        </>
    )
}

function shuffle() {
    return Math.random() - 0.5;
}

const Header = styled.div`
    display: flex;
    width: 540px;
    height: 353px;
    justify-content: space-between;
    img {
        width: 300px;
    }
    p{
        letter-spacing: 10px;
    }
`;
