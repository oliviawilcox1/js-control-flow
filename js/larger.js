function whosBigger(num1,num2) {
    if (num1>num2) {
        console.log(`The larger number of ${num1} and ${num2} is ${num1}`)
    } else {
        console.log(`The larger number of ${num1} and ${num2} is ${num2}`)
    }
}
whosBigger(7,3)

// or 
let num1 = 7
let num2 = 3

if (num1 > num2) {
    console.log(`The larger number of ${num1} and ${num2} is ${num1}`)
} else {
    console.log(`The larger number of ${num1} and ${num2} is ${num2}`)
}