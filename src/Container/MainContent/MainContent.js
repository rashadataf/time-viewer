import React, {Component} from "react";
import classes from './MainContent.module.css';
import About from "./Pages/About/About";
import Store from "./Pages/Store/Store";
import {Route} from "react-router-dom";
import BroadCast from "./Pages/BroadCast/BroadCast";


let component = About;

class MainContent extends Component {
    state = {
        component: 'about',
        element: 0
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.component !== this.props.component)
            this.setState({component: this.props.component})
    }

    elementChooseHandler = (index) => {
        this.setState({element: index});
    }

    drawComponenet =(component) => {
        switch (component) {
            case 'about':
                return <About />;
            case 'store':
                return <Store element={this.state.element} elementChooseHandler={this.elementChooseHandler} />;
            case 'broadcast':
                return <BroadCast element={this.state.element} elementChooseHandler={this.elementChooseHandler} />;
            case 'courses':
                return <About />;
            case 'reserve':
                return <About />;
            default:
                return <About />;
        }
    }

    render() {
        return (
            <div className={classes.MainContent}>
                {this.drawComponenet(this.state.component)}

            </div>
        );
    }
}

export default MainContent;