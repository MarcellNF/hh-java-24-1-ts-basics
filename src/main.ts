/*
    Types: string, number, boolean, object, null & undefined
    Special Type: any
 */
const string: string = "Hallo";
//string = "World" nicht möglich!

let number: number = 1;
number = 3;

//var name1 = "World" Veraltet, wird nicht mehr genutzt

console.log(number + " Hello");

const x = 1;
const y = 2;

const sum: number = x + y;
const minus: number = x - y;
const multiply: number = x * y;
const divide: number = y / x;

console.log("Summe: " + sum)
console.log("minus: " + minus)
console.log("multiply: " + multiply)
console.log("divide: " + divide)

const equals: boolean = x == y;
const equals2: boolean = x === y; // Type wird mit geprüft
const unequals: boolean = x !== y;
const isBiggerThan: boolean = x > y;
const isSmallerThan: boolean = x < y;

console.log("Equals ==: " + equals)
console.log("Equals ===: "+ equals2)
console.log("Unequals !==: "+ unequals)
console.log("Bigger than >: "+ isBiggerThan)
console.log("Smaller than <: "+ isSmallerThan)

const andOperator:2 = x && y;
const orOperator = x || y;
const negation = !x

console.log("&& Operator: " + andOperator);
console.log("|| Operator: " + orOperator);
console.log("! Operator: "+ negation)

if(x > y){
    console.log(x + " ist kleiner als " + y);
} else {
    console.log(x + " ist nicht kleiner als " + y);
}

const numbers: number[] = [1, 2, 3, 4, 5];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

for(let number of numbers){
    console.log("ForEach: " + number);
}

numbers.forEach((number) => console.log("forEeach direkt: " + number));

const harald = {
    name: "Harald",
    age: 23
}

console.log(harald.name + " " + harald.age)