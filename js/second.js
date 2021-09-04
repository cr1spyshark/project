"use strict"

// if (4 < 2){
//     console.log("Ok!");
// } else{
//     console.log("Not a true!");
// }
//
// const num = 50;
//
// if (num < 49){
//     console.log("Error");
// }else if (num > 100){
//     console.log("To much");
// }else{
//     console.log("Okay")
// }


// const num = 50;
//
// switch (num) {
//     case 49:
//         console.log("Неверно")
//         break;
//     case 100:
//         console.log("Неверно")
//         break;
//     case 50:
//         console.log("Верно")
//         break;
//     default:
//         console.log("Не в этот раз")
//         break;
// }

let num = 50;
// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

for (let i = 1; i <= 10; i++){
    if ( i === 6 ){
        // break;
        continue;
    }
    console.log(i)
}