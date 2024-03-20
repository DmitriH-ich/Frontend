const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

//                        Задание 1
// Создайте на основе страрого массива новый массив объектов по образу:
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

//                        Вариант 1
const newCars = cars.map((car) => ({ 
     brand: car.brand,
     isDiesel: car.isDiesel
}));
console.log(newCars);

//                        Вариант 2
const newCars1 = cars.map((car)=> car.brand + " " + car.isDiesel);
console.log(newCars1);


  //                      Задание 2
//Создайте новый массив, где оставьте только машины с дизельным двигателем.
const newCars2 = cars.map((car) => car.isDiesel ? car : null).filter(Boolean);
console.log(newCars2);


//                        Задание 3
//Создайте новый массив, где оставьте только машины не с дизельным двигателем.
const newCars3 = cars.filter((car)=> !car.isDiesel);
console.log(newCars3);


//                        Задание 4
//Посчитайте общую стоимость всех машин не с дизельным двигателем.
const newCars4 = newCars3.reduce((acc, car) => acc + car.price, 0);
console.log((newCars4) + "$");

//                        Задание 5
//Повысьте цену всех машин в массиве на 20%.

//                        Вариант 1  -  не мутирует массив
const newCars5 = cars.map((car) => {
    const increasedPrice = car.price * 1.2; // Increase price by 20%
    return { ...car, price: increasedPrice };
});
console.log(newCars5);

//                        Вариант 2  -  мутирует массив
cars.forEach((car) => car.price *= 1.2);
console.log(cars);

//                        Задание 6
//Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }
const newCars6 = cars.map((car) => {
    if (car.isDiesel) {
        return { brand: "Tesla", price: 25000, isDiesel: false };
    }
    return car;
});
console.log(newCars6);

//                        на уроке:
const newCars7 = cars.map((car) => 
    car.isDiesel ? {brand: "Tesla", price: 25000, isDiesel: false} : car
);
console.log(newCars7);