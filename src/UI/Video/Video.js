import React from "react";
import classes from './Video.module.css';
const Video = (props) => (
    <div className={classes.Video__Container}>
        <p className={classes.Video__Caption}>تعرف على الاسرار</p>
        <video controls>
            <source src={props.video} type="video/mp4" />
            Your browser does not support HTML video.
        </video>
    </div>
);

export default Video;