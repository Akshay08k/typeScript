class Person{

    readonly name: string;
    age:number;
    isLoggedIN:boolean;
    public constructor(name:string,age:number,isLoggedIN:boolean){
        this.name = name;
        this.age = age;
        this.isLoggedIN = isLoggedIN;
    }
    public getDetails(){
        return `Name : ${this.name} Age : ${this.age} isLoggedIN : ${this.isLoggedIN}`
    }
}

let newPerson = new Person("Akshay",22,true);
console.log(newPerson.getDetails());
