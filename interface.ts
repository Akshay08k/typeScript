interface student{
    Name:string,
    Age:number,
    isLoggedIN:boolean
    passed?:boolean
}

let newStudent:student = {
    Name : "Akshay",
    Age :22,
    isLoggedIN : true
}

console.log(newStudent);


//Inheritance in interface
//there is two type of Inheritance
// \n 1. Class Inheritance (extends)
// 2. Interface Inheritance (Implements)


interface Shape {
    getArea: () => number;
  }
  
  class Rectangl2 implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }


//using extendss

interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  }


  //Overriding method using different definition of method rather than what declared

  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle3 implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square2 extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }