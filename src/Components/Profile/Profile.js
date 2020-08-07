import React from "react";
import classes from "./Profile.module.css";
import user from "../../assets/Icons/User.svg";

// Profile Component represents the account of the user
const Profile = () => (
    <div className={classes.Profile}>
        <p className={classes.Profile__Text}>
            مرحبا بك <span className={classes.Profile__Text__Name}>مالك محمد</span>
        </p>
        <div className={classes.Profile__Image}>
            <img src={user} alt={"profile"}/>
        </div>
    </div>
);

export default Profile;