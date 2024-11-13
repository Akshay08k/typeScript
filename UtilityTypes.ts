//Partial 
//while using partial it doesnt Mean That you have to compulsory enter values
//after usiing Partial it will make all values optional
interface point{
    x:number;
    y:number;
}
let PointPart:Partial<point> = { }


//required
//while using required it will make all values mandatory
interface point1{
    x:number;
    y:number;
    z?:number
}
let PointPart1:Required<point1> = {x:10,y:20,z:30}


//record
//Record is a shortcut to defining an object type with a specific key type and value type.

let point2:Record<string,number> = {"x":10,"y":20,"z":30}
//in this point2 all character are string and values are number 



//pick

interface Person {
    Name2: string;
    age: number;
    location?: string;
  }
  
  const bob: Pick<Person, 'Name2'> = {
    Name2: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
  };