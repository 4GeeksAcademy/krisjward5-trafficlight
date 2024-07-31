// import React, { useState } from "react";


// export function TrafficLight() {

//     const colors = ["red", "yellow", "green", "purple"];
    
//     // const [trafficLightColor, setTrafficLightColor] = useState("");

//     const [currentColorIndex, setCurrentColorIndex] = useState ("")

//     function CycleColors () {
//         setCurrentColorIndex ((prevIndex)=>(prevIndex+1)%colors.length) 
//     }

//     return (
//         <div className="daContainer">
//             <div className="daLight card">
//                 <div className={`redLight ${colors[currentColorIndex] === "red" ? "selected" : ""}`}
//                     onClick={() => setCurrentColorIndex(0)}></div>
//                 <div className={`yellowLight ${colors[currentColorIndex] === "yellow" ? "selected" : ""}`}
//                     onClick={() => setCurrentColorIndex(1)}></div>
//                 <div className={`greenLight ${colors[currentColorIndex] === "green" ? "selected" : ""}`}
//                     onClick={() => setCurrentColorIndex(2)}></div>
//             </div>
//             <button className="button" onClick={CycleColors}>
//                     Click for new color
//             </button>
//         </div>
//     )
// }

import React, { useState } from "react";
export function TrafficLight() {
    const [colors, setColors] = useState(["red", "yellow", "green"]);
    const [currentColorIndex, setCurrentColorIndex] = useState("");
    const cycleColors = () => {
        setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };
    const addPurpleLight = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };
    return (
        <div className="daContainer">
            <div className="daLight card">
                {colors.map((color, index) => (
                    <div
                        key={color}
                        className={`${color}Light ${colors[currentColorIndex] === color ? "selected" : ""}`}
                        onClick={() => setCurrentColorIndex(index)}
                    ></div>
                ))}
            </div>
            <button onClick={cycleColors}>Cycle Lights</button>
            <button onClick={addPurpleLight}>Add Purple Light</button>
        </div>
    );
}
