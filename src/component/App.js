import React, { Component } from "react";
import "../styles/App.css";
import "../styles/Media.css";
import Form from "./Form";
import Weather from "./Weather.js";
import ErrorPage from "./ErrorPage.js";
import Forecasts from "./Forecasts.js";

const APIKey = "9fd61799a7bc37094a257de440599af3";

class App extends Component {
    state = {
        index: 0,
        value: "",
        up: false,
        city: "",
        country: "",
        sunrise: "",
        sunset: "",
        timezone: "",
        err: false,
        weather: {
            time: [],
            time_txt: [],
            temp: [],
            feelsLike: [],
            pop: [],
            wind: [],
            pressure: [],
            main: [],
            description: [],
            humidity: [],
            cloudiness: [],
            icon: [],
        },
    };

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        const API = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&appid=${APIKey}&units=metric`;
        // const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;
        fetch(API)
            .then((respone) => {
                if (respone.ok) {
                    return respone.json();
                } else throw Error("nie udało sie");
            })
            .then((data) => {
                let time = [];
                let time_txt = [];
                let main = [];
                let description = [];
                let temp = [];
                let feelsLike = [];
                let pop = [];
                let wind = [];
                let pressure = [];
                let humidity = [];
                let cloudiness = [];
                let icon = [];
                for (let i = 0; i < 32; i = i + 4) {
                    time.push(data.list[i].dt);
                    time_txt.push(data.list[i].dt_txt);
                    description.push(data.list[i].weather[0].description);
                    main.push(data.list[i].weather[0].main);
                    temp.push(data.list[i].main.temp);
                    feelsLike.push(data.list[i].main.feels_like);
                    pop.push(data.list[i].pop);
                    wind.push(data.list[i].wind.speed);
                    pressure.push(data.list[i].main.pressure);
                    humidity.push(data.list[i].main.humidity);
                    cloudiness.push(data.list[i].clouds.all);
                    icon.push(data.list[i].weather[0].icon.slice(2, 3));
                }
                this.setState(() => ({
                    value: "",
                    up: true,
                    err: false,
                    city: data.city.name,
                    country: data.city.country,
                    timezone: data.city.timezone,
                    sunrise: data.city.sunrise,
                    sunset: data.city.sunset,
                    weather: {
                        time,
                        time_txt,
                        description,
                        main,
                        temp,
                        feelsLike,
                        pop,
                        wind,
                        pressure,
                        humidity,
                        cloudiness,
                        icon,
                    },
                }));
            })
            .catch((err) => {
                this.setState((prevState) => ({
                    err: true,
                    city: prevState.value,
                    country: "",
                }));
            });
    };

    checkTimeOfDay = (icon) => {
        let timeOfDay = "";
        if (icon === "d") timeOfDay = "day";
        else if (icon === "n") timeOfDay = "night";
        return timeOfDay;
        // console.log(time);
        // const date = new Date((time + (this.state.timezone - 7200)) * 1000);
        // const sunriseTime = new Date(this.state.sunrise * 1000);
        // const sunsetTime = new Date(this.state.sunset * 1000);
        // let timeOfDay = "";
        // if (
        //     date.getTime() >= sunriseTime.getTime() &&
        //     date.getTime() < sunsetTime.getTime()
        // ) {
        //     console.log();
        //     timeOfDay = "day";
        // } else if (
        //     date.getTime() < sunriseTime.getTime() ||
        //     date.getTime() >= sunsetTime.getTime()
        // ) {
        //     timeOfDay = "night";
        // }
        // // console.log(timeOfDay);
        // return timeOfDay;
    };

    handleClick = (e) => {
        this.setState({
            index: e.target.classList[1].slice(2, 3),
        });
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="app">
                <h1 className={`title ${this.state.up ? "up" : ""}`}>
                    Weather app
                </h1>

                <Form
                    up={this.state.up}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    onSubmit={this.handleFormSubmit}
                />
                {this.state.country ? (
                    <Weather
                        index={this.state.index}
                        weather={this.state.weather}
                        country={this.state.country}
                        city={this.state.city}
                        up={this.state.up}
                        time={this.state.weather.time[this.state.index]}
                        timezone={this.state.timezone}
                        checkTimeOfDay={this.checkTimeOfDay}
                    />
                ) : null}
                {this.state.err ? <ErrorPage city={this.state.city} /> : null}
                {this.state.country ? (
                    <Forecasts
                        onClick={this.handleClick}
                        index={this.state.index}
                        time={this.state.weather.time}
                        timezone={this.state.timezone}
                        weather={this.state.weather}
                        checkTimeOfDay={this.checkTimeOfDay}
                    />
                ) : null}
            </div>
        );
    }
}

export default App;
