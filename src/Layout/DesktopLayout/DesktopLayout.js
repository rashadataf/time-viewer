import React from "react";
import classes from "./DesktopLayout.module.css";
import TopBar from "../../Components/TopBar/TopBar";
import Logo from "../../Components/Logo/Logo";
import Profile from "../../Components/Profile/Profile";
import Notification from "../../Components/Notification/Notification";
import MediaControl from "../../Components/MediaControl/MediaControl";
import IDCard from "../../Components/IDCard/IDCard";
import ScrollNavBar from "../../Components/ScrollNavBar/ScrollNavBar";

// Desktop Layout will be rendered in the big screens sizes
const DesktopLayout = () => (
    <header className={classes.DesktopLayout}>
        <TopBar>
            <Profile />
            <Notification desktop={true} />
        </TopBar>
        <div className={classes.DesktopLayout__SecondSection}>
            <Logo />
            <div className={classes.DesktopLayout__Space_2}></div>
            <IDCard />
        </div>
        <div className={classes.DesktopLayout__ThirdSection}>
            <MediaControl />
            <ScrollNavBar />
        </div>

    </header>
);

export default DesktopLayout;