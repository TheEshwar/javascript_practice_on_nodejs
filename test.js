let max = 10, min = 0;
var randomNumber = []
for(let i = 0; i< 5; i++){
    console.log('math random :- ', Math.random());
    randomNumber.push(Math.floor(Math.random() * (max - min + 1)))
}
console.log(randomNumber);