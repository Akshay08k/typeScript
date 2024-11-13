//Tuppled Array
//A tupple array is which has fixed datatype for each index of the array

let ourArray : readonly [string,number,boolean] = ["Akshay",22,true];
// ourArray[0] = "Shubham";
console.log(ourArray);


//Named Tuppled Array
let ourArray1 : readonly [name:string,age:number,isLoggedIN:boolean] = ["Akshay",22,true];
// ourArray1[0] = "Shubham";
console.log(ourArray1);



//Destruction Arrays
const graph:[number,number] = [1,2];
const [z,y] = graph;
console.log(z,y);