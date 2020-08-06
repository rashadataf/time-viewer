import React from "react";
import wifi from "../../assets/Icons/wifi.svg";
import video from "../../assets/Icons/Video.svg";
import audio from "../../assets/Icons/Audio.svg";

import classes from './MediaControl.module.css';

// an array to hold the values of the arabic numbers
let arabicNumbers = ['۰', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
// a function to transform any latin number into an arabic one
const toArabic = (number) => {
    let chars = number.toString().split('');
    for (let i = 0; i < chars.length; i++) {
        if (/\d/.test(chars[i])) {
            chars[i] = arabicNumbers[chars[i]];
        }
    }
    return chars.join('');
}

// MediaControl Component represents the Audio, Wifi, and Video buttons
const MediaControl = () => (
    <div className={classes.MediaControl}>
        <div className={classes.MediaControl__InternetSpeed}>
            <p>سرعة الانترنت</p>
            <p lang="ar">{toArabic(36)} Mgps</p>
        </div>
        <div className={classes.MediaControl__Wifi}>
            <img src={wifi} alt={"wifi"}/>
        </div>
        <div className={classes.MediaControl__Video}>
            <img src={video} alt={"video"}/>
        </div>
        <div className={classes.MediaControl__Audio}>
            <img src={audio} alt={"audio"}/>
        </div>
    </div>
);

export default MediaControl;