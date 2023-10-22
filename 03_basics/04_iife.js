// Immediately Invoked Function Expressions (IIFE) 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //<= this ; is imp otherwise below written func will never be executed

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

