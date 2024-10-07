const adressLat = 170; // широта адрес назначения
const adressLong = 145; // долгота адрес назначени
const positionLat = 10; // широта текущее положение пользователя
const positionLong = 15; // долгота текущее положение пользователя 

// Вариант 1
const coordinatesA = (adressLat - adressLong);
const coordinatesB = (positionLat - positionLong);

const squaringA = coordinatesA ** 2;
const squaringB = coordinatesB ** 2;

const res = squaringA + squaringB;
const distance = Math.sqrt(res);

console.log(distance)

// Вариант 2
const result = Math.sqrt(((adressLat - adressLong) ** 2) + ((positionLat - positionLong) ** 2));
console.log(result);
