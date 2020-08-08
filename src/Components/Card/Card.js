import React from "react";
import classes from './Card.module.css';
import cart from '../../assets/Icons/cart.svg';
import shopping_cart from '../../assets/Icons/shopping-cart.svg';
import file from '../../assets/Icons/file.svg';
import video from '../../assets/Icons/video.svg';
import audio from '../../assets/Icons/audio.svg';
import download from '../../assets/Icons/enter.svg';

const drawIcon = (element, iconClass, iconClassVideo) => {
    switch (element.type) {
        case 'video':
            return <img src={video} alt={"video icon"} className={iconClassVideo}/>
        case 'audio':
            return <div className={iconClass}>
                <p>{element.type.toUpperCase()}</p>
                <img src={audio} alt={"video icon"}/>
            </div>
        case 'word':
            return <div className={iconClass}>
                <p>{element.type.toUpperCase()}</p>
                <img src={file} alt={"video icon"}/>
            </div>
        case 'pdf':
            return <div className={iconClass}>
                <p>{element.type.toUpperCase()}</p>
                <img src={file} alt={"video icon"}/>
            </div>
    }
}
const Card = (props) => (
    <div style={props.style} className={classes.Card} onClick={(ev) => {
        if (props.elementChooseHandler)
            props.elementChooseHandler(props.index);
        // ev.target.classList.add('clicked');
    }}>
        <div className={classes.Card__Poster}>
            {props.element.poster?props.element.poster:<div className={classes.Card__Poster__Null} id={"poster"}></div>}
            {drawIcon(props.element, classes.Card__Poster__Icon, classes.Card__Poster__Icon__Video)}
        </div>
        <div className={classes.Card__Title}>
            {props.element.title}
        </div>
        <div className={classes.Card__Info}>
            <p className={classes.Card__Info__Downloads}>
                <img src={download} />{props.element.downloads}
            </p>
            <p className={classes.Card__Info__Price} dir={"rtl"}>
                <span className={classes.Card__Info__Price__Num}>{props.element.price}</span> دينار كويتي
            </p>
        </div>
    </div>
);

export default  Card;