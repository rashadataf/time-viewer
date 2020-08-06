import React from "react";
import classes from "./IDCard.module.css";
import profile_1 from "../../assets/Icons/Profile_1.png";
import profile_2 from "../../assets/Icons/Profile_2.png";
import profile_3 from "../../assets/Icons/Profile_3.png";
import rstar from "../../assets/Icons/RStar.svg";
import estar from "../../assets/Icons/EStar.svg";

// a function to draw stars to represent the rate
const drawRate = (rate) => {
    // the array which will hold the drawn elements
    let stars = [];
    for (let i = 0; i < 4; i++) {
        if (rate > 0)
            stars.push(<img src={rstar} alt={"red star"} key={i}/>)
        else
            stars.push(<img src={estar} alt={"empty star"} key={i}/>)
        rate--;
    }
    return stars;
}

// IDCard Component represents the Card of the Doctor
// The status of the doctor, The rate, and personal information
const IDCard = () => (
    <div className={classes.IDCard}>
        <div className={classes.IDCard__Status}>
            <p className={classes.IDCard__Status__Text}>مشغول بإستشارة</p>
        </div>
        <div className={classes.IDCard__Card} dir="rtl">
            <div className={classes.IDCard__Card__Profile}>
                <img src={profile_1} alt={"profile"}
                     srcSet={`${profile_2} 2x,
                         ${profile_3} 3x`}/>
            </div>
            <div className={classes.IDCard__Card__Texts}>
                <p>العيادة الرقمية</p>
                <p>ل د. هند الناهض</p>
                <div className={classes.IDCard__Card__Texts__Rate}>
                    <div>{drawRate(3)}</div>
                    <p>تقييم</p>
                </div>
            </div>
        </div>
    </div>
);

export default IDCard;