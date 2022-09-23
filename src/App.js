import palavras from "./styles/palavras"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"

export default function App() {

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            <div className="header">
                <div className="left" data-identifier="game-image">
                    <img src={forca0} />
                </div>
                <div className="right">
                    <button data-identifier="choose-word">Escolher Palavra</button>
                    <p className="" data-identifier="word">_ A _ _ _ _ _ _ _</p>
                </div>
            </div>
            <div className="keyboard">
                {alfabeto.map((letra)=> 
                <button className="letter" data-identifier="letter"  >{letra}</button>
                )}

            </div>
            <div className="guess">
                <p>Já sei a palavra!</p>
                <input data-identifier="type-guess" ></input>
                <button data-identifier="guess-button" >Chutar</button>
            </div>

        </>
    )
}