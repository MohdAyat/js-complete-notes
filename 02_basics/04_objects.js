// const tinderUser = new Object() //constructor way to initiate obj(singleton obj)
const tinderUser = {}//literal way to define obj

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {    //obj in obj in obj and so on any depth of nesting is possible
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//how to access obj property

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)//concat object syntax is (target(in which all sources will be going),source(which is going in target))

const obj3 = {...obj1, ...obj2}//spread method to concat object
// console.log(obj3);


const users = [    //array of objs
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email//accessing particular objs property
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//returns array of key value pair arrays O->[[id, "123abc"],[..],..] 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//asking if this obj has this property or not

//object destructuring and JSON api from here
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course //another way to call property of course obj

// console.log(courseInstructor);
console.log(instructor);
//below is JSON an obj or arr data come from database in this format
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

