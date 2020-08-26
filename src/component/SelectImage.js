import React from "react";
import Sun from "../images/039-sun.png";
import Cloud from "../images/001-cloud.png";
import Cloudy from "../images/011-cloudy.png";
import Cloud1 from "../images/002-cloud-1.png";
import Rainy1 from "../images/004-rainy-1.png";
import Rainy from "../images/003-rainy.png";
import Snowy from "../images/006-snowy.png";
import Storm2 from "../images/013-storm-2.png";
import Night2 from "../images/021-night-2.png";
import Night3 from "../images/022-night-3.png";
import Cloudy3 from "../images/038-cloudy-3.png";

const images = [
    {
        id: 0,
        src: Cloud,
        main: "Clouds",
        description: "overcast clouds",
        time: "day",
    },
    { id: 3, src: Rainy1, main: "Rain", time: "day" },
    { id: 4, src: Snowy, main: "Snow", time: "day" },
    { id: 5, src: Storm2, main: "Thunderstorm", time: "day" },
    {
        id: 14,
        src: Cloudy3,
        main: "Clouds",
        description: "scattered clouds",
        time: "day",
    },
    { id: 15, src: Sun, main: "Clear", time: "day" },
    { id: 16, src: Rainy, main: "Drizzle", time: "day" },
    {
        id: 17,
        src: Cloudy,
        main: "Clouds",
        description: "broken clouds",
        time: "day",
    },
    { id: 8, src: Night2, main: "Rain", time: "night" },
    { id: 9, src: Night2, main: "Drizzle", time: "night" },
    { id: 10, src: Night3, main: "Clear", time: "night" },
    { id: 12, src: Cloud1, main: "Clouds", time: "night" },
];

const SelectImage = (props) => {
    let images2 = images;
    if (props.timeOfDay === "night") {
        images2 = images2.filter((item) => item.time === "night");
    } else if (props.timeOfDay === "day") {
        images2 = images2.filter((item) => item.time === "day");
    }
    let image = images2.filter((item) => {
        if (item.main === props.main) {
            if (item.description && item.description === props.description) {
                return true;
            } else return true;
        } else return false;
    });
    return <img src={image[0].src} alt="" />;
};

export default SelectImage;
