//load json file and store in a variable
const data=require("./students_data.json")

//access data
console.log(data.students[1].friends[1].name)

//delete data
delete data.students[1].friends[1].name
console.log(data.students[1].friends[1].name)

//modify data
data.students[1].friends[1].name="Monir"
console.log(data.students[1].friends[1].name)
