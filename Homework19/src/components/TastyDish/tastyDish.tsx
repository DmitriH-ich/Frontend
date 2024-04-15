import React, { useState } from 'react'
import style from './tastyDish.module.css'
import PlovImage from './Image/Plov.jpg';


export default function TastyDish():JSX.Element {
    const [tastyDish, setTastyDish] = useState<string>('Добавить ингредиенты: ');

    function addMeat(): void {
        setTastyDish(`${tastyDish} мясо`)    
    }
    function addCarrots(): void {
        setTastyDish(`${tastyDish} морковь`);
    }
    function addRice(): void {
        setTastyDish(`${tastyDish} рис`);
    }
    function addSpices(): void {
        setTastyDish(`${tastyDish} специи`);
    }
    function reset(): void {
        setTastyDish(`Добавить ингредиенты: `);
    }
  return (
    <div>
    <div className= {style.container}>
        <h1>Моё любимоё блюдо</h1>
        <h2>Узбекский плов:</h2>
        <img src={PlovImage} className={style.img}alt="Plov" />
    </div>
            <div className={style.rezept}>
            {tastyDish}
            </div>

            <div className={style.btnContainer}>
                <button className={style.btn} type="button" onClick={addMeat}>мясо</button>
                <button className={style.btn} type="button" onClick={addCarrots}>морковь</button>
                <button className={style.btn} type="button" onClick={addRice}>рис</button>
                <button className={style.btn} type="button" onClick={addSpices}>специи</button>
                <button className={style.btn} type="button" onClick={reset}>всё стереть</button>
            </div>
    </div>            
  );
}
