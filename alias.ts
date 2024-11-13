//alias applyes on single variable as well as object
//where interface only applies on object
type car  = {
    name :any,
    type :any,
    model :number
}

let Toyota : car =  {
    name : "Toyota",
    type : "Sedan",
    model : 1010
}

console.log(Toyota);