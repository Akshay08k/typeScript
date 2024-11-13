//Syntax of function
//In typescript function also have a return type like c

function displayName():number {
    console.log("Akshay");
    return 0
}

function getNothing():void {
    console.log("This fuction returns Nothing");
 } 


function greet(str:any):string{
    return "Hello Welcome "+str;
}

let result = greet("Akshay");
console.log(result);