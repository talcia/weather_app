import React from "react";
import SelectImage from "./SelectImage.js";
import "../styles/Forecast.css";

const Forecast = (props) => {
    return (
        <div className="wrapper">
            <div className={"forecast id" + props.id} onClick={props.onClick}>
                <p>{props.date.slice(0, 11) + props.time.slice(0, 5)}</p>
                <SelectImage
                    timeOfDay={props.timeOfDay}
                    main={props.main}
                    description={props.description}
                />
                <p>{Math.round(props.temp) + "\xB0C"}</p>
            </div>
        </div>
    );
};

export default Forecast;
