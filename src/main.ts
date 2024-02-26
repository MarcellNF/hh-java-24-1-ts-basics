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

/* Tasks */
console.log("\n")
console.log("!--- AB HIER DIE AUFGABEN ---!")
console.log("\n")
console.log("!--- Step 1: Declare a variable named 'age' of type 'number' and assign a value to it. ---!")
const age: number = 32;
console.log("const age: number = " + age);

console.log("\n")
console.log("!--- Step 2: Write a 'for' loop that outputs the numbers from 1 to 'age'. ---!")
for (let i: number = 1; i <= age; i++) {
    console.log(i);
}

console.log("\n")
console.log("!--- Step 3: Use an 'if-else' statement to check if 'age' is greater than 18. Display appropriate messages depending on whether the condition is met or not.\n ---!")
if (age > 18) {
    console.log(age + " ist größer als 18.");
} else {
    console.log(age + " ist nicht größer als 18.");
}

console.log("\n")
console.log("!--- Step 4: Declare a variable named 'score' of type 'number' and assign it the value 0. ---!")
const score: number = 0;
console.log("const score: number = " + score);

console.log("\n")
console.log("!--- Step 5: Use an 'if' statement to check if 'score' has a value. Display 'Score is available.' if 'score' has a value other than 0. ---!")
if (score > 0 || score < 0) {
    console.log("Score is available.");
}
console.log(
    "if (score > 0 || score < 0) {\n" +
    "    console.log(\"Score is available.\");\n" +
    "}"
);

console.log("\n")
console.log("!--- Step 6: Use an 'if-else' statement to check if 'score' is evaluated as a 'truthy' value. Display 'Score is evaluated as truthy.' if 'score' is considered 'truthy'.\n ---!")
if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is evaluated as falsy.");
}

console.log("\n")
console.log("!--- Step 7: Declare a variable named 'username' of type 'string' and assign it the value '' (empty string).\n ---!")
const username: string = "";
console.log("const username: string = " + username);


console.log("\n")
console.log("!--- Step 8: Use an 'if' statement to check if 'username' has a value. Display 'Username is available.' if 'username' has a value.\n ---!")
if (username) {
    console.log("Username is available.");
}
console.log(
    "if (username) {\n" +
    "    console.log(\"Username is available.\");\n" +
    "}"
);

console.log("\n")
console.log("!--- Step 9: Use an 'if-else' statement to check if 'username' is evaluated as a 'falsy' value. Display 'Username is evaluated as falsy.' if 'username' is considered 'falsy'.\n ---!")
if (!username) {
    console.log("Username is evaluated as falsy.");
} else {
    console.log("Username is evaluated as truthy.");
}

console.log("\n")
console.log("!--- Step 10: Declare a variable named 'isAdmin' of type 'boolean' and assign it the value 'false'.\n ---!")
const isAdmin: boolean = false;
console.log("const isAdmin: boolean = " + isAdmin);

console.log("\n")
console.log("!--- Step 11: Use an 'if-else' statement to check if 'isAdmin' is evaluated as a 'truthy' value. Display 'isAdmin is\n ---!")
if (isAdmin) {
    console.log("isAdmin is evaluated as truthy.");
} else {
    console.log("isAdmin is evaluated as falsy.");
}

console.log("\n")
console.log("!--- Step 12: Use an 'if' statement to check if 'isAdmin' is 'false'. Display 'isAdmin is false.' if 'isAdmin' has the value 'false'.\n ---!")
if(!isAdmin){
    console.log("isAdmin is false.");
}

/*
Write a code that accepts a number n and outputs a Christmas tree with the following patterns for n = 5:
    *
   ***
  *****
 *******
*********
    *
    *
    *
    *
    *
 */
console.log("\n")
console.log("!--- BONUS ---!")
function drawChristmasTree(n: number): void {
    for (let i: number = 1; i <= n; i++) {
        let spaces: string = " ".repeat(n - i);
        let stars: string = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }

    for (let i: number = 0; i < n; i++) {
        console.log(" ".repeat(n-1) + "*");
    }
}

drawChristmasTree(5);

console.log("\n")
console.log("!--- Funktionen ---!")

function add(a: number, b: number): number {
    return a + b;
}

const arrowAdd = (a: number, b: number) => a+b;

console.log(add(3, 3));
console.log(arrowAdd(4, 4));

const evenNumbers: number[] = numbers.filter((number: number): boolean => number % 2 === 0);
const squareRootNumbers: number[] = numbers.map((number: number): number => number * 2);

console.log(evenNumbers)
console.log(squareRootNumbers)
