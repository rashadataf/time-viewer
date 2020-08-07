import React from "react";
import menu from "../../assets/Icons/Menu_Icon.svg";
import arrow from "../../assets/Icons/Arrow-Right.svg";
import classes from "./TopBar.module.css";
import Hoc from "../../HOC/Hoc";

// TopBar Component represents the top bar of our app
const TopBar = (props) => (
    <div className={classes.TopBar}>
        <img src={menu} alt={"menu"} className={classes.TopBar__Menu}/>
        <div className={classes.TopBar__Space}></div>
        <div className={classes.TopBar__Paragraph}>
            <img src={arrow} alt="arrow" />
            <p>14</p>
            <p>قائمة الانتظار</p>
        </div>
        <div className={classes.TopBar__Space__DeskTop}></div>
        {props.children === undefined?null:props.children.map((child, index) => {
            return (
                <Hoc key={index}>
                    <div className={classes.TopBar__Space__Small}></div>
                    {child}
                </Hoc>
            );
        })}
    </div>

);

export default TopBar;