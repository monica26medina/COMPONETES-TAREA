import React from 'react';
/*import ficha from './assets/getContentCards';;
import getContentCards from './assets/getContentCardsO';*/
import './global.css';

export default function App() {
    const variableUno = getContentCards();
    const variableDos= getContentCadsO();
    return (
        <div className="container">
            {
                data.map((component)=>{
                    return <Component variableUno={ficha}/>
                })
            }
        </div>
    );
}
