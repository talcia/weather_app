import React from "react";
import "../styles/ErrorPage.css";

const ErrorPage = (props) => {
    return (
        <div className="error">
            <h2>
                <span>{props.city}</span> not found
            </h2>
        </div>
    );
};

export default ErrorPage;
