import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import classes from './ScrollNavBar.module.css';

// ScrollNavBar Component represents the part where we can render different content
// by selecting different items in the scroll menu
const ScrollNavBar = () => (
    <div className={classes.ScrollNavBar} dir={"rtl"}>
        <NavLink to={{
                pathname: '/',
                state: {component: 'about'}
        }} >نبذة عن هند</NavLink>
        <NavLink to={{
                pathname: '/',
                state: {component: 'store'}
        }}>متجر</NavLink>
        <NavLink to={{
                pathname: '/',
                state: {component: 'broadcast'}
        }}>برودكاست</NavLink>
        <NavLink to={{
                pathname: '/',
                state: {component: 'courses'}
        }}>كورسات</NavLink>
        <NavLink to={{
                pathname: '/',
                state: {component: 'reserve'}
        }}>حجز عيادة (20 دينار كويتي)</NavLink>
    </div>
);
export default withRouter(ScrollNavBar);