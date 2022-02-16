// function run(){
//     var a = document.getElementById("input_number").value;

//     let primeNum = a => {

//     if (a<2)
//     {
//         return `${a} is not a prime number`;
//     } 

//     {

//         for (let b= 2; b < a; b++)
//         {
//             if(a % b === 0)
//             {
//                 return `${a} is not a prime number`;
//             }
//         }
//         return `${a} is a prime number`;
//     }
//     }
// document.getElementById("output").innerHTML = primeNum(a);
// console.log(primeNum(a));


// }




function run(){

    let n = document.getElementById("input_number").value;


    let primeNum = n => {

        if(n<2)
    return `${n} is not a prime number`

    for (let i = 2; i < n; i++){
        if (n % i === 0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is a prime number`

    }

    

document.getElementById("output").innerHTML = primeNum(n);


console.log(primeNum(n)); 

}
