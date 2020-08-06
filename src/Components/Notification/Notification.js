import React from "react";
import classes from "./Notification.module.css";
import bell from "../../assets/Icons/Bell.svg";
import ball from "../../assets/Icons/Red_Ball.svg";

// Notification Component represent the notification in our app
const Notification = () => (
    <div className={classes.Notification}>
        <img src={bell} alt={"bell"} />
        <img src={ball} alt={"ball"} className={classes.Notification__Ball}/>
    </div>
);

export default Notification;