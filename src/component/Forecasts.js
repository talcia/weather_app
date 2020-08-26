import React from "react";
import "../styles/Forecasts.css";
import Forecast from "./Forecast";
import FadeInResult from "./FadeInResult.js";

const Forecasts = (props) => {
    let tab = [];
    for (let i = 0; i < props.weather.main.length; i++) {
        const date = new Date((props.time[i] + (props.timezone - 7200)) * 1000);
        tab.push(
            <Forecast
                onClick={props.onClick}
                id={i}
                key={i}
                main={props.weather.main[i]}
                description={props.weather.description[i]}
                temp={props.weather.temp[i]}
                date={props.weather.time_txt[i]}
                time={date.toLocaleTimeString()}
                timeOfDay={props.checkTimeOfDay(props.weather.icon[i])}
            />
        );
    }

    return (
        <FadeInResult>
            <div className="forecasts">
                <span>Forecast:</span>
                <div className="forecastsDetails">{tab}</div>
            </div>
        </FadeInResult>
    );
};

export default Forecasts;
