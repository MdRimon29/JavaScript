//create an object

const data={
    name:"Rimon",
    age:22
}

//convert an object to a json format
console.log(JSON.stringify(data))

//convert a json format to an object
console.log(JSON.parse('{"name":"Rimon","age":22}'))