// add two numbers
const addNumbers =(number1,number2) =>{
    return number1+number2
}
console.log('Add two numbers');
console.log(addNumbers(22,44));
console.log('*'.repeat(10));
// Subtract two numbers

const subtractNumbers=(n1,n2)=>{
    return n1 - n2;
}
console.log('Add two numbers');
console.log(subtractNumbers(22,44));
console.log('*'.repeat(10));

// Multiply two numbers

const MultiplyNumbers=(n1,n2)=>{
    return n1 * n2;
}
console.log('Add two numbers');
console.log(MultiplyNumbers(22,44));
console.log('*'.repeat(10));

// Divide two numbers

const divideNumbers = (n1,n2) =>{
    try{
        let res = n1/n2;
        return res
    }
    catch(error){
        return error;
    }
}
console.log('Add two numbers');
console.log(divideNumbers(10,2));
