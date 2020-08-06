import React from "react";
import classes from './ScrollNavBar.module.css';

// ScrollNavBar Component represents the part where we can render different content
// by selecting different items in the scroll menu
const ScrollNavBar = () => (
    <div className={classes.ScrollNavBar} dir={"rtl"}>
        <a href="#home">نبذة عن هند</a>
        <a href="#news">متجر</a>
        <a href="#contact">برودكاست</a>
        <a href="#about">كورسات</a>
        <a href="#home">حجز عيادة (20 دينار كويتي)</a>
    </div>
);
export default ScrollNavBar;