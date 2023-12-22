// Program 1
// reverse each word of string
// var str = "My name is Eshwar";
// var temp = str.split(" ").map(function(word){
//     return word.split("").reverse().join("")
// })
// console.log(temp.join(" "));

// *********************************************************

// Program 2
// check object/variable is array or not
// function checkIsArray(element){
//     if(Array.isArray(element)){
//         console.log("Its an array")
//     }else{
//         console.log("Its NOT an array")
//     }
// }

// checkIsArray([]);
// checkIsArray({});

// *********************************************************

// Program 3
// How to empty an array? without reset it to new array, without using any loop to pop each value
// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr.length = 0

// *********************************************************

// Program 4
// check if number is integer

// var int = 10202;

// method 1
// console.log("is integer? :- ", Number.isInteger(int))

// method 2
// if(int%1 === 0){
//     console.log("value is integer")
// }
// else{
//     console.log("value is NOT integer")
// }

// *********************************************************

// Program 5
// duplicate passed array like
// duplicete([1,2,3,4]) :- output will be [1,2,3,4,1,2,3,4]

// function duplicate(arr){
//     console.log(arr.concat(arr));
// }

// duplicate([1,2,3,4])

// *********************************************************

// Program 6
// reverse a number

// function reverseNumber(num) {
// 	// method 1
// 	// let revNum = num.toString().split("").reverse().join("");
// 	// console.log("reversed number :- ", Number(revNum));

// 	// method 2
// 	let rev = 0;
// 	while (num > 0) {
// 		var rem = num % 10;
// 		rev = rev * 10 + rem;
// 		num = Math.floor(num / 10);
// 	}
//     console.log("reverse number with loop :- ", rev)
// }
// reverseNumber(1922);


// *********************************************************

// Program 7
// check string is palindrom or not

// function palindromStr(str){
//     let revStr = str.split("").reverse().join("");
//     // if(revStr === str)
//     //     console.log("Palindrome");
//     // else
//     //     console.log("NOT Palindrome");
//     return revStr === str ? "Palindrom" : "Not palindrome";
// }
// console.log(palindromStr("ABCBA"));

// *********************************************************

// Program 8
// write a function that returns a passed string with letters in alphabetical order
// Apple => Aelpp

// let str = "Apple";
// function reorder(str){
//     return str.split("").sort().join("");
// }
// console.log("string is :- ", str);
// console.log("string revered alphabetically :- ", reorder(str));

// *********************************************************

// Program 9
// Convert first letter of each word of the string in upper case.

// function capitaliseFirstLetter(str){
//     let result = str.split(' ').map(s => {
//         return s.charAt(0).toUpperCase() + s.substring(1);
//     });
//     return result.join(" ")
// }
// let str = "My name is Eshwar";
// console.log("after capitalised first letter :- ", capitaliseFirstLetter(str));

// *********************************************************

// Program 10
// 











