import React, { useState } from "react";


export function TrafficLight() {
    const [trafficLightColor, setTrafficLightColor] = useState("");


    return (
        <div className="daLight">
            <div className={`redLight ${trafficLightColor === "red" ? "selected" : ""}`}
            onClick={() => setTrafficLightColor("red")}></div>
            <div className={`yellowLight ${trafficLightColor === "yellow" ? "selected" : ""}`}
            onClick={() => setTrafficLightColor("yellow")}></div>
            <div className={`greenLight ${trafficLightColor === "green" ? "selected" : ""}`}
            onClick={() => setTrafficLightColor("green")}></div>
        </div>

    )

}
