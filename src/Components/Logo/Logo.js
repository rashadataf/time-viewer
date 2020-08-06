import React from "react";
import classes from "./Logo.module.css";
import logo from "../../assets/Icons/Logo.svg";

// The Logo Component represents the logo of the app
const Logo = () => (
    <div className={classes.Logo}>
        <img src={logo} alt={"logo"}/>
        <div className={classes.Logo__Text}>
            <p>timeviewer</p>
            <p>العيادة الرقمية</p>
        </div>
    </div>
);

export default Logo;