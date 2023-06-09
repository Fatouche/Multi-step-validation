import React from 'react';
import './MultiForm.css';
import Indicator from './Indicator/Indicator';
import CardBegin from './Infos/CardBegin';
import CardEnd from './Infos/CardEnd';
import DietForm from './SubForms/DietForm';
import FoodStyle from './SubForms/FoodStyle';
import Allergies from './SubForms/Allergies';
import HateLove from './SubForms/HateLove';

export default function MultiForm() {

    const [formIndex, setFormIndex] = React.useState(1);
    const [allFormData, setAllFormData] = React.useState({
        dietForm: "",
        foodStyle: [],
        allergies: [],
        prefs: {}
    });

    const modifyIndex = (index, data) => {
        setFormIndex(index);
        if (data) {
            setAllFormData({
                ...allFormData,
                ...data
            })
        }
    }

    console.log(allFormData);

    const elements = [
        <CardBegin modifyIndex={modifyIndex} />,
        <DietForm modifyIndex={modifyIndex} /> ,
        <FoodStyle modifyIndex={modifyIndex} />,
        <Allergies modifyIndex={modifyIndex} />,
        <HateLove modifyIndex={modifyIndex} />,
        <CardEnd modifyIndex={modifyIndex} />
    ]

    return (
        <div className='container-multiform'>
            <Indicator formIndex={formIndex} />
            {
                elements.map((element, index) =>{
                    if (index + 1 === formIndex) {
                        return element
                    }
                })
            }
        </div>
    )
}
