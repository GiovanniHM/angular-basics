const username: string | number = 'iNanoTek'

//Arrow funtion

const sum= (a:number, b:number) => {
  return a + b;
}

console.log(sum(1,1));


//Form 1
class Person{
  age:number;
  lastName:string;
  constructor(age: number, lastName: string){
    this.age = age;
    this.lastName = lastName;
  }
}

//Form 2 resum
class Person2{
  constructor(public age: number,
              public lastName: string){
  }
}


const nico = new Person(22, 'Mustang');
const nico2 = new Person2(22, 'Mustang');
