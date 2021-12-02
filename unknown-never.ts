// unknown type
let userInput : unknown;
let userName :string;


userInput = 3
userInput = "Max"


// cannot set userName equal to userInput bc we don't know what it is.
// userName = userInput

// it's better than any because it needs this check....

// needs an if statement to work... to be sure it will be a string
if(typeof userInput === "string"){
    userName = userInput
}



// the never type => usually used with a function that throws errors.
function generateError(message:string, code:number):never {
    throw {message:message, errorCode:code}
}

generateError("this is an error", 500)
