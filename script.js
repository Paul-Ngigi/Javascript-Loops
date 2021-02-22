// // numbers = [1, 2, 3, 4, 5];

// // var doubleNumbers = numbers.map(function(number){
// //     return number**2;
// // })
// // alert(doubleNumbers);

// // var trippleNumbers = numbers.map(function(number){
// //     return number ** 3;
// // })
// // alert(trippleNumbers);

// // var addingOne = numbers.map(function(number){
// //     return number += 1;
// // })
// // alert(addingOne);

// // let names = ["Paul","Ngigi","Kuria"];

// // let upperCasing = names.map(function(name){
// //     return name.toUpperCase();
// // })
// // alert(upperCasing);

// let friends = ["Dennis","Stephen","Samuel"];

// friends.forEach(function(friend){
//     console.log("Hello " + friend)
// });


numbers = [1, 2, 3, 4, 5];

let multiply = numbers.map(function(number){
    return number *= 3;
})
console.log(multiply);