import React from "react";
import classes from './MobileLayout.module.css';
import ScrollNavBar from "../../Components/ScrollNavBar/ScrollNavBar";
import MediaControl from "../../Components/MediaControl/MediaControl";
import Logo from "../../Components/Logo/Logo";
import Profile from "../../Components/Profile/Profile";
import Notification from "../../Components/Notification/Notification";
import IDCard from "../../Components/IDCard/IDCard";
import TopBar from "../../Components/TopBar/TopBar";

// MobileLayout Layout will be rendered in the small screens sizes
const MobileLayout = () => (
    <header className={classes.MobileLayout}>
        <TopBar />
        <div className={classes.MobileLayout__SecondSection}>
            <Logo />
            <div className={classes.MobileLayout__Space_2}></div>
            <Profile />
            <div className={classes.MobileLayout__Space}></div>
            <Notification />
        </div>
        <MediaControl />
        <div className={classes.MobileLayout__FourthSection}>
            <IDCard />
            <ScrollNavBar />
        </div>
    </header>
);

export default MobileLayout;