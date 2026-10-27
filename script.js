alert("Welcome");
let numbers=[10,15,20,25];
console.log(numbers);
let fruits=["Apple","Banana","Strawberry"];
console.log(fruits[0]);
console.log(fruits[2]);
fruits.push("Mango");
console.log(fruits);  
let num = [10,20,30,40,50];
console.log(num.length);
function hello(){
    console.log("Hello World");
}
hello();
function sum(a,b) {
    console.log(a+b);
}
sum(5,10);
function square(num){
    return (num*num);
}
console.log(square(4));
function evenOdd(num) {
    if (num % 2 == 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
evenOdd(5);
function largest(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
largest(12, 8);
function welcome(name) {
    console.log("Welcome " + name);
}
welcome("Iqra");
let student = {
    name: "Iqra",
    age: 18,
    class: "12th"
};

console.log(student.name);
console.log(student.age);
console.log(student.class);
let car = {
    brand: "Audi",
    model: "Tesla",
    color: "Black"
};

console.log(car.brand);
let student2 = {
    name: "Fatima",
    age: 18
};

student2.age = 20;
console.log(student2.age);

let student3 = {
    name: "Fatima",
    marks: 97
};

function showStudent() {
    console.log(student3.name);
    console.log(student3.marks);
}

showStudent();