  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5]

let results = [];

for (let num of nums){
  results.push(num*2);
}

console.log(results);

// Using map()



//defining a function to multiply by two

const multiplyBy2 = function(num) {
  return num*2;

}

//calling the map method on the array

const mapResults = nums.map(multiplyBy2);
console.log(mapResults);





// Simplified w/ map()

// Simplfied w/ map() + arrow function
const mapSimples = nums.map(num => num * 2);

console.log("Simplefied map :", mapSimples);




// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

//returnning as an array:

//const result = students.map(student => [student.name, student.id]);

//console.log(result);

//returning as objects

//const resultObjects = students.map(student => [{student: student.name, id: student.id}]);

//console.log(resultObjects);

//adding an age to each student
