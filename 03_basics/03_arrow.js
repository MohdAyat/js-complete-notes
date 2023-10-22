const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);//it will give current username
        console.log(this);
    }

}

// user.welcomeMessage()//in output u will see hitesh as a username
// user.username = "sam"
// user.welcomeMessage()//in output u will see sam as a username

// console.log(this); this refers to current context but keep an eye on the scope here it is in the global scope so it won't give u above defined obj

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // it won't give u hitesh it works with objs
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {  //arrow method to define function very short method
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //syntax for objects 


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
