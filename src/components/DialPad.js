import React from "react";
import "../styles/dialPad.css";
const DialPad = ({keypadNumberEntered, keypadClear, keypadEnter}) => {
    return (
        <div className="dial-pad">
            <div className="dial-pad_row">
                <button onClick={() => keypadNumberEntered(1)}>1</button>
                <button onClick={() => keypadNumberEntered(2)}>2</button>
                <button onClick={() => keypadNumberEntered(3)}>3</button>
            </div>
            <div className="dial-pad_row">
                <button onClick={() => keypadNumberEntered(4)}>4</button>
                <button onClick={() => keypadNumberEntered(5)}>5</button>
                <button onClick={() => keypadNumberEntered(6)}>6</button>
            </div>
            <div className="dial-pad_row">
                <button onClick={() => keypadNumberEntered(7)}>7</button>
                <button onClick={() => keypadNumberEntered(8)}>8</button>
                <button onClick={() => keypadNumberEntered(9)}>9</button>
            </div>
            <div className="dial-pad_row">
                <button onClick={keypadClear}>CLR</button>
                <button onClick={() => keypadNumberEntered(0)}>0</button>
                <button onClick={keypadEnter}>></button>
            </div>
        </div>
    )
}
export default DialPad;