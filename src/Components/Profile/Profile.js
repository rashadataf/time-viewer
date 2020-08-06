import React from "react";
import classes from "./Profile.module.css";
import user from "../../assets/Icons/User.svg";

// Profile Component represents the account of the user
const Profile = () => (
    <div className={classes.Profile}>
        <img src={user} alt={"profile"}/>
    </div>
);

export default Profile;