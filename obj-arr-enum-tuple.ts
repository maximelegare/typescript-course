//object type
// specify what the object is supposed to contain
// const person: {
//     name:string;
//     age:number;
//     hobbies:string[];
//     // tuple
//     role:[number, string]
// } =  {
//     name:"Maxime",
//     age:24,
//     hobbies:['piano', "coding", "climbing"],

//     // tuple
//     role:[2,"author"]
// }


// can make a default {ADMIN = 1, READ_ONLY = "THIS IS A STRING", AUTHOR = 100}
//           0        1        2 
enum Role {ADMIN, READ_ONLY, AUTHOR};

const person: {
        name:string;
        age:number;
        hobbies:string[];
        // tuple
        role:number
    } =  {
        name:"Maxime",
        age:24,
        hobbies:['piano', "coding", "climbing"],
    
        // enum
        role:Role.ADMIN // 0
    }



//      0      ===       0
if(person.role === Role.ADMIN){
    console.log("the person is an admin")
}    
console.log(person.age)

for(let hoby of person.hobbies){
    // can access propriety of hoby (string pripriety) bc Ts knows it's always gonna be an []
    console.log(hoby.toUpperCase())
}


//tuple
// array with a fixed length & fixed types
// ex. we want a role attribute that always has two elements => identifyer & the name of the role.
// TS will infer that it can be a number or a string => replace an existing string with a number.
// the tupple prevents it. 
// push is an exception => a person could push in a tupple 

// enum
// if I have strings roles, I can use enum to make it a global variable and be accessed



// any 
// can store anything, try not to use it.