/* В отдельном файле ts создайте interface Airplane - самолет с полями:
- numberOfEngines - количество двигателей
- isJet - реактивный
- maxHeight - максимальная высота полета 
- capacity - опциональное поле вместимость 

Создайте несколько переменных типа Airplane.  */


interface Airplane{
    name: string,
    numberOfEngines: number,
    isJet: boolean,
    maxHight: number,
    capacity?: number,
}

const airBusA310: Airplane ={
    name: "Airbus310",
    numberOfEngines: 4,
    isJet: true,
    maxHight: 40000,
    capacity: 250
}

const an24: Airplane ={
    name: "АН 24",
    numberOfEngines: 2,
    isJet: false,
    maxHight: 7700
}
console.log(airBusA310);
console.log(an24);


