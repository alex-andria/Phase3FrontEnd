import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {BrowserRouter as Router} from 'react-router-dom';
import "./alex.css";
import "./index.css";


ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById("root")
);