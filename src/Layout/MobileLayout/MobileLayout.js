import React from "react";
import classes from './MobileLayout.module.css';
import ScrollNavBar from "../../Components/ScrollNavBar/ScrollNavBar";
import MediaControl from "../../Components/MediaControl/MediaControl";
import Logo from "../../Components/Logo/Logo";
import Profile from "../../Components/Profile/Profile";
import Notification from "../../Components/Notification/Notification";
import IDCard from "../../Components/IDCard/IDCard";
import TopBar from "../../Components/TopBar/TopBar";
import {Route} from "react-router-dom";
import MainContent from "../../Container/MainContent/MainContent";

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
        <Route
            path="/"
            exact
            render={({ location }) => {
                const { pathname, search, hash, state } = location;
                return (
                    <MainContent component={state===undefined?'about':state.component} />
                );

            }}
        />
    </header>
);

export default MobileLayout;