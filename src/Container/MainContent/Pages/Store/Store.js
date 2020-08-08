import React from "react";
import classes from './Store.module.css';
import Card from "../../../../Components/Card/Card";
import poster from '../../../../assets/Images/Poster.jpg';
import poster_1 from '../../../../assets/Images/Poster_1.jpg';
import poster_2 from '../../../../assets/Images/Poster_2.jpg';
import Video from "../../../../UI/Video/Video";
import Hoc from "../../../../HOC/Hoc";
import cart from '../../../../assets/Icons/cart.svg';
import cart_shopping from '../../../../assets/Icons/shopping-cart.svg';

const elements = [
    {
        type: 'video',
        title: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
        price: '299',
        downloads: '104',
        poster: <img src={poster} srcSet={`${poster_1} 2x,${poster_2} 3x`} alt={"poster"} />
    },{
        type: 'video',
        title: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
        price: '149',
        downloads: '39',
        poster: <img src={poster} srcSet={`${poster_1} 2x,${poster_2} 3x`} alt={"poster"} />
    },{
        type: 'pdf',
        title: 'دورة صناعة المحتوى مع هند',
        price: '300',
        downloads: '120',
        poster: null
    },{
        type: 'word',
        title: 'فوكس حلقة 5',
        price: '150',
        downloads: '100',
        poster: null
    },{
        type: 'audio',
        title: 'تعرف على أسرار صناعة المحتوى التسويقي الفعال',
        price: '550',
        downloads: '12',
        poster: null
    }
];
const Store = (props) => (
    <div className={classes.Store}>
        <div className={classes.Store__Preview}>
            {
                elements[props.element].type==='video'?<Video />:<Hoc>
                    <Card element={elements[props.element]} />
                    <div className={classes.Store__Preview__Price}><div style={{background: `url(${cart})`}}><img src={cart_shopping} /></div><p>تحميل\شراء</p></div>
                </Hoc>
            }
        </div>
        <div className={classes.Store__Content}>
            {elements.map((element,index) => {
                return <Card element={element} key={index} elementChooseHandler={props.elementChooseHandler} index={index} style={{width: '40%'}} />
            })}
        </div>
    </div>
);

export default Store;