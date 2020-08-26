import React from "react";
import "../styles/Form.css";

const Form = (props) => {
    return (
        <div className="form">
            <form
                onSubmit={props.onSubmit}
                className={props.className}
                style={props.up ? { top: "11%" } : {}}
            >
                <input
                    value={props.value}
                    type="search"
                    placeholder="city name"
                    onChange={props.onChange}
                />
            </form>
        </div>
    );
};

export default Form;
