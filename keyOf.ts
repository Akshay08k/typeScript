//When used on an object type with explicit keys, keyof creates a union type with those keys.
//Basically gives the keys of called object 

interface Vehicle{
    name:string,
    model:number
}

function printVehile(Vehicle:Vehicle,key: keyof Vehicle){
    console.log(Vehicle[key]);
}

let newCar:Vehicle = {
    name:"BMW",
    model:2022
}

printVehile(newCar,"name")