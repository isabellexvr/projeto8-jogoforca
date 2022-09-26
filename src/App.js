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

    const imgs = {
        0: forca0,
        1: forca1,
        2: forca2,
        3: forca3,
        4: forca4,
        5: forca5,
        6: forca6
    }

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


    const [enable, setEnable] = useState("disabled")

    const [greenDisable, setGreenDisable] = useState("")

    const [gallowsAppear, setGallowsAppear] = useState("hide")

    const [mistakes, setMistakes] = useState(0)

    const [gallows, setGallows] = useState(forca0)

    const [word, setWord] = useState([])

    const [hiddenWord, setHiddenWord] = useState([])

    const [clicked, setClicked] = useState([])

    const [guess, setGuess] = useState("")

    const [end, setEnd] = useState("")

    const [selected, setSelected] = useState("")


    function gameBegins() {

        setEnable("")
        setGallowsAppear("")
        setGreenDisable("disabled")
        setMistakes(1)
        setEnd("")
        setSelected("")
        setEnable("")
        setClicked([])
        setGallows(forca0)

        const shuffledWords = palavras.sort(shuffle)

        const shuffledWord = shuffledWords[0]

        setWord([...shuffledWord])

        const wordArr = []

        for (let i = 0; i < shuffledWord.length; i++) {
            wordArr.push('_')
        }

        setHiddenWord(wordArr)

    }

    function keyboard(clickedWord) {

        const arr = [...clicked, clickedWord]

        if (clicked.length < 1) {
            clicked.push(clickedWord)
        } else {
            setClicked(arr)
        }

        const index = []

        const newWord = [...hiddenWord]
        for (let i = 0; i < word.length; i++) {

            if (clickedWord === removeAcento(word[i])) {
                index.push(i)


                for (let i = 0; i < index.length; i++) {

                    newWord[index[i]] = word[index[i]]

                }
                setHiddenWord(newWord)
            }
        }

        if (!removeAcento(word.toString()).includes(clickedWord)) {
            setMistakes(mistakes + 1)
            setGallows(imgs[mistakes])
        }

        if (mistakes === 6) {
            lost()
        }

        if (newWord.join('') === word.join('')) {
            won()
        }


    }

    function guessTry() {

        const stringWord = word.join('');

        if (guess === stringWord) {
            won()
        }

        if (guess !== stringWord) {
            lost()
        }

    }

    function won() {
        setHiddenWord(word)
        setEnd("won")
        setSelected("selected")
        setEnable("disabled")
        setGreenDisable("")


    }

    function lost() {
        setHiddenWord(word)
        setEnd("lost")
        setSelected("selected")
        setEnable("disabled")
        setGreenDisable("")
    }


    return (
        <>
            <Header>
                <div className="left" data-identifier="game-image">
                    <img alt="gallows" className={`${gallowsAppear}`} src={gallows} />
                </div>
                <div className="right">
                    <button onClick={gameBegins} className={greenDisable} data-identifier="choose-word">Escolher Palavra</button>
                    <p className={end} data-identifier="word">{hiddenWord}</p>
                </div>
            </Header>
            <div className="keyboard">
                {alfabeto.map((letter, index) =>
                    <button onClick={() => keyboard(letter)} key={index} className={`letter ${enable} ${clicked.includes(letter) ? "selected" : ""} ${selected}`} data-identifier="letter"  >
                        {letter}
                    </button>
                )}

            </div>
            <div className="guess">
                <p>Já sei a palavra!</p>
                <input className={`${enable}`} placeholder="Digite aqui o seu chute..." value={guess} onChange={e => setGuess(e.target.value)} data-identifier="type-guess" ></input>
                <button onClick={guessTry} className={`${enable}`} data-identifier="guess-button" >Chutar</button>
            </div>

        </>
    )
}

function shuffle() {
    return Math.random() - 0.5;
}

function removeAcento(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
    return text;
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
