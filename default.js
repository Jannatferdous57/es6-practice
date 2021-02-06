// function add (num1,num2){
//     return num1+num2;
// }

// const total = add(15,17);
// console.log(total);

// output  32

// function add (num1,num2){
//     if(num2 ==undefined){
//         num2 = 0;
//     }
//     return num1 + num2;
// }

// const total = add(15);
// console.log(total);

// output 15


// function add (num1,num2){
//     num2 = num2 || 0;
//     return num1 + num2;
// }

// const total = add(15);
// console.log(total);

// output 15

// function add (num1,num2=17){
  
//     return num1 + num2;
// }

// const total = add(15);
// console.log(total);

// output 32


function add (num1,num2=17){
  
    return num1 + num2;
}

const total = add(15,1);
console.log(total);

// num2 17 ke dhorbe na..num2 value 1 dhorbe...jehetu value 1 provide kora hoyeche...so 17 holo backup value...

// output 15


