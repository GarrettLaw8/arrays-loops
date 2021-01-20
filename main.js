// console.log("arrays and loops");

//const students = ["Garrett","ally","jeffery","stoooppid","greg"];

// console.log(students.length); 
// //finds the length of the array


// accessing items in the array

//console.log(students[0]

// const valuePrinter = (array,index) => {
//   console.log(array[index])
// }
// console.log(valuePrinter(students, 3)) // prints stoooopid


// function search (name) {
//   for (var i = 0, len = students.length; i < len; i++) {
//     if (name[i] === term) {
//       console.log(name[i] + ' is found at ' + i);
//     }
//   }
// }

// console.log(search('greg'));


//for loop 

// //for (let i = 0 ; i <= 15; i++){

// }

// array with loops 

// const array = ["g",'d','t','hh','kdcj']

// for (let i = 0; i < array.length;i++){
//   console.log(array[i])
// }


//Arrays, loops , functions




// const colors = ['blue','red','orange','yellow','green','black']

// const colorLoop = () => {
//   let domString = ""
  
//   for (let i = 0; i < colors.length;i++){
//     domString += `<h1>${colors[i]}</h1>`
//   }
//   console.log(domString)
// }

// colorLoop();








// const instructors = [
//   {first: 'garrett', last:'lawson'},
//   {first:'dr.t', last:'the doc!!'},
//   {first:'ohhh yeah',last:'yes sir'},
// ];

// const nameLoop = () => {
//   let domString = '';
//   for (let i = 0; i < instructors.length;i++){
//     domString += `<h1>${instructors[i].first} ${instructors[i].last}</h1>`
//   }
//   console.log(domString)
// }

// nameLoop();




const array1 = ['cow','dog','cat','alligator'];
const string1 = array1.join(',')
console.log(string1)   
// ***adds the array into a string seperated by a comma****

const string1BackToArray = string1.split(',');
console.log(string1BackToArray)
//****tells the string to convert back to an array , the .spilt(',') lets the methof know where to split it */


// .push & .pop

array1.pop();
console.log(array1)
