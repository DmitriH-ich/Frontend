import React from 'react';
import style from './CityPage.module.css';
import alzeyImage from '../Image/alzey.jpg';
function CityPage() : JSX.Element {
    return (
        <div className={style.cityClass}>
            <h1>Немного о моём городе</h1>
            <p>
            <span className={style.Word}>Alzey</span>  - независимый город с населением чуть менее 20 000 человек, 
            местонахождение районной администрации округа Альцай-Вормс в Рейнхессене на юго-востоке земли Рейнланд-Пфальц. 
            Alzey(Альцай) - один из городов нибелунгов, поскольку город упоминается в "Песне о нибелунгах" Фолькера фон Альцая. 
            Поэтому Альцай также известен как Фолькерштадт.
Население: 17 902 человека (31 декабря 2008 года)
Плотность населения: 547 жителей на км2
Почтовый индекс: 55232
Код района: 06731
Адрес городского совета: Ernst-Ludwig-Straße 42; 55232 Alzey
Bürgermeister: Steffen Jung (SPD)
Bundesland: Rheinland-Pfalz
            </p>
            <img src={alzeyImage} alt="Bild" />
        </div>
    );  
}
export default CityPage;