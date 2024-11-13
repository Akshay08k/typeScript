let x:unknown = 'Akshay';
console.log((x as string).length);

//casting with <>
let Nothing:unknown = 'Nothing';
console.log((<string>Nothing).length);

//force casting
let two:unknown = 'Two';
console.log((two as unknown as string).length);