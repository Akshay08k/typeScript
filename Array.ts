//Array In Typescript

const Names:string[] = [];
console.log(`Type of Names is ${typeof Names}`);
//Dont Know It still works that i can push number in it
// Names.push(1);
console.log(Names);

//readOnly
const Names1:readonly string[] = ["Akshay", "Shubham","Vishal"];
//Dont Know It still works that i can push anything in it Although It is readonly
// Names1.push("namrita");
console.log(Names1);