import React from "react";
import classes from './About.module.css';
import Video from "../../../../UI/Video/Video";

const skillsList = [
    'تطوير الأعمال',
    'المشاريع الصغيرة',
    'القيادة',
    'التحدث أمام الجمهور',
    'الدعاية والإعلان',
    'الإعلام',
    'التسويق الرقمي',
    'مشاركة العملاء'
];

const About = () => (
    <div className={classes.About}>
        <div className={classes.About__Video}>
            <Video />
        </div>
        <div className={classes.About__Video__Second}>
            <div className={classes.About__Intro}>
                هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل الاجتماعي.
            </div>
            <div className={classes.About__Skills}>
                <h3 className={classes.About__Skills__Title}>الخبرات</h3>
                <div className={classes.About__Skills__List}>
                    {skillsList.map((skill,index) => {
                        return <div className={classes.About__Skills__List__Skill} key={index}>
                            <p className={classes.About__Skills__List__Skill__Text}>{skill}</p>
                        </div>;
                    })}
                </div>
            </div>
        </div>
    </div>
);

export default About;