let num1,num2,num3;

//traditional function
function addNumbers(num1,num2){
    num3=num1+num2;
    console.log(`${num1} + ${num2} = ${num3}`);
}

function subNumbers(num1,num2){
    num3=num1-num2;
    console.log(`${num1} - ${num2} = ${num3}`);
}

function mulNumbers(num1,num2){
    num3=num1*num2;
    console.log(`${num1} * ${num2} = ${num3}`);
}

function divNumbers(num1,num2){
    num3=num1/num2;
    console.log(`${num1} / ${num2} = ${num3}`);
}

//arrow function

const addNumbers2=(num1,num2)=>{
    num3=num1+num2;
    console.log(`${num1} + ${num2} = ${num3}`);
}

const subNumbers2=(num1,num2)=>{
    num3=num1-num2;
    console.log(`${num1} - ${num2} = ${num3}`);
}

const mulNumbers2=(num1,num2)=>{
    num3=num1*num2;
    console.log(`${num1} * ${num2} = ${num3}`);
}

const divNumbers2=(num1,num2)=>{
    num3=num1/num2;
    console.log(`${num1} / ${num2} = ${num3}`);
}

addNumbers(30,20);
addNumbers2(30,20);

subNumbers(30,20);
subNumbers2(30,20);

mulNumbers(30,20);
mulNumbers2(30,20);

divNumbers(30,20);
divNumbers2(30,20);

//methods

const Calculator={
    add: (num1,num2)=> num1+num2,
    sub: (num1,num2)=> num1-num2,
    mul: (num1,num2)=> num1*num2,
    div: (num1,num2)=> num1/num2,
};

console.log(Calculator.add(30,20));
console.log(Calculator.sub(30,20));
console.log(Calculator.mul(30,20));
console.log(Calculator.div(30,20));