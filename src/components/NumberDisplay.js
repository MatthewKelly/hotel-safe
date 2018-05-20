import React from "react";
import "../styles/numberDisplay.css";
const NumberDisplay = ({keypadEntries, invalid}) => {
    return (
        <div className="number-display">
            <div className="number-display_message">
                { keypadEntries.map((number, index) => <span key={index}>{number}</span>) }
                { invalid &&  <span>INVALID</span> }
            </div>
        </div>
    )
}
export default NumberDisplay;