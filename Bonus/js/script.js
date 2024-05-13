/*Saltare a piè dispari [Bonus] */

 let numbers = [];

 for (let i = 1; i <= 6; i++) {
     let userNumber = Number.parseInt(prompt('Scrivi un numero'));
 
     if (userNumber % 2 == 0) {
         numbers.push(userNumber)
     }
 }
 
 console.log(numbers)