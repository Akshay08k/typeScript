//it is just a basic funtion while defining it instead of given types we pass
//like some values which work as placeholder and we can define the type at calling time
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}
//here S & T are two placeholder i defined types at calling time
  console.log(createPair<string, number>('hello', 42)); 



  //Same in class

  class NamedValue<T> { //here T is a placeholder a type of class
    private _value: T | undefined; // saying that if doesnt receive any datatype then it will be undefined
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber'); //Defining Number type instead of T number will work
  value.setValue(10);
  console.log(value.toString()); // myNumber: 10