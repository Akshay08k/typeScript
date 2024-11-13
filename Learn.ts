//Three Main Primitive Types In Typescript  
//String
let Name:string = "Akshay";
console.log(`Type of ${Name} is ${typeof Name}`); 

//Number
let age:number = 22;
console.log(`Type of ${age} is ${typeof age}`); 

//Boolean
let isLoggedIN:boolean = true;
console.log(`Type of ${isLoggedIN} is ${typeof isLoggedIN}`);

//Any
let salary:any = 10000000;
console.log(`Type of ${salary} is ${typeof salary} Using Any`);
//Overriding Any
salary = "10000000";
console.log(`Type of ${salary} is ${typeof salary} Using Any`);

//unknown
let salary1:unknown = 10000000;
console.log(`Type of ${salary1} is ${typeof salary1} Using unknown`);

// Never
// It is always Throw An Error Whenever it is defined
// let Age:never = true;
// console.log(`Type of ${Age} is ${typeof Age} Using Never`);

//undefined and Null
let Age:undefined;
console.log(`Type of ${Age} is ${typeof Age} Using undefined`);

//Null is Never Assignable
let Age1:null = null;
console.log(`Type of ${Age1} is ${typeof Age1} Using Null`);

