import React from "react";
import "../styles/Weather.css";
import SelectImage from "./SelectImage.js";
import FadeInResult from "./FadeInResult.js";

const Weather = (props) => {
    const date = new Date((props.time + (props.timezone - 7200)) * 1000);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const {
        temp,
        feelsLike,
        pop,
        wind,
        pressure,
        description,
        main,
        humidity,
        cloudiness,
        icon,
    } = props.weather;

    const { index } = props;

    return (
        <FadeInResult>
            <div className="date">
                <h1>
                    {props.city} <span>{props.country}</span>
                </h1>
                <h2>{days[date.getDay() - 1]}</h2>
                <h2>
                    {date.getDate()}
                    {"  "}
                    {months[date.getMonth()]}
                    {"  "}
                    {date.getFullYear()}
                </h2>
                <h3>{date.toLocaleTimeString().slice(0, 5)}</h3>
            </div>
            <div className="main">
                <SelectImage
                    description={description[index]}
                    main={main[index]}
                    timeOfDay={props.checkTimeOfDay(icon[index])}
                />
                <h1>{Math.round(temp[index]) + "\xB0C"}</h1>
                <h2>{description[index]}</h2>
            </div>
            <div className="details">
                <p>
                    {Math.round(feelsLike[index]) + "\xB0C"}
                    <span>Feels like</span>
                </p>
                <p>
                    {pop[index] * 100 + "%"}
                    <span>Probability of precipitation</span>
                </p>
                <p>
                    {wind[index] + " km/h"}
                    <span>Wind</span>
                </p>
                <p>
                    {pressure[index] + "  hPa"}
                    <span>Pressure</span>
                </p>
                <p>
                    {humidity[index] + "%"}
                    <span>Humidity</span>
                </p>
                <p>
                    {cloudiness[index] + "%"}
                    <span>Cloudiness</span>
                </p>
            </div>
        </FadeInResult>
    );
};

export default Weather;
