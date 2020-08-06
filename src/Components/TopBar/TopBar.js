import React from "react";
import menu from "../../assets/Icons/Menu_Icon.svg";
import classes from "./TopBar.module.css";

// TopBar Component represents the top bar of our app
const TopBar = () => (
    <div className={classes.TopBar}>
        <img src={menu} alt={"menu"}/>
        <div className={classes.TopBar__Space}></div>
        <div className={classes.TopBar__Paragraph}>
            <p>14</p>
            <p>قائمة الانتظار</p>
        </div>
    </div>

);

export default TopBar;