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