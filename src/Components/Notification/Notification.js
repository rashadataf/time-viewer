import React from "react";
import classes from "./Notification.module.css";
import bell from "../../assets/Icons/Bell.svg";
import bellDesktop from "../../assets/Icons/Bell_Desktop.svg";
import ball from "../../assets/Icons/Red_Ball.svg";

// Notification Component represent the notification in our app
const Notification = (props) => (
    <div className={classes.Notification}>
        <img src={props.desktop?bellDesktop:bell} alt={"bell"} />
        <img src={ball} alt={"ball"} className={classes.Notification__Ball}/>
    </div>
);

export default Notification;