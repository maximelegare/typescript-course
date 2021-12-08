
// it's like the shape() in proptypes
interface Person {
    name:string;
    age:number;
    greet(phrase:string):void;
}

let user1:Person;
user1 = {
    name:"max",
    age:24,
    greet(phrase:String){
        console.log(phrase + " " + this.name)
    }
}

user1.greet("Hello")