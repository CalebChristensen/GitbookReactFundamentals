const instructors = [
    {name: 'Quincy', specialty: 'Quantum Mechanics' },
    {name: 'Kenn', specialty: 'Norse Mythology' },
    {name: 'Paul', specialty: 'Tuvan throat singing' },
    {name: 'Aaron', specialty: 'Entomolgy' },
    {name: 'Carolyn', specialty: 'Kung Fu' }
]
// OLD WAY
// let instructor_names = []
// for (let i = 0; i < instructors.length; i++) {
//     instructor_names.push(instructors[i].name);
// }
// console.log(instructor_names);

// NEW WAY
// Created a Variable = we are calling a map of instructors. the (instructor (parameter) => instructor.name)
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

//The .map() function requires a return value. This is a key rule of using .map(), so the fat arrow is taking care of that requirement.

const instructorInfo = instructors.map(x => x.specialty);
console.log(instructorInfo);

var kvArray = [
    {key:1, value: 10 },
    {key:2, value: 20 },
    {key:3, value: 30 }
];

console.log(kvArray);

var reformattedArray = kvArray.map(obj => {
    var rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
    return rObj;
})
