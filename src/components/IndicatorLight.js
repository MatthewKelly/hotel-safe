import React from "react";
import "../styles/indicatorLight.css";
const IndicatorLight = ({doorLocked}) => {
    return (
        <div class="indicator-light">
            <div className={`indicator-light_circle ${doorLocked ? 'red' : 'green'}`}></div>
        </div>
    )
}
export default IndicatorLight;
