// singleton object will be created when created using constructor
// Object.create//this is how we create obj using constructor

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//syntax for symbol data type
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])//another way to access object properties/methods
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])//syntax to access symbol data type which is member of object

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//no propeties will be changed after this
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){//creating func is just like vars
    console.log(`Hello JS user, ${this.name}`);//O->Hello JS user, Hitesh
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
