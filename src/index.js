import ReactDOM from "react-dom";
import "./styles/reset.css"
import "./styles/style.css"

function A () {
    return (
        <div>olá!</div>
    )
}

ReactDOM.render(<A/>, document.querySelector(".root"))