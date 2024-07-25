let num=48;
while(num <=122){
  //console.log('char code',num,String.fromCharCode(num))
  num++
}
let num1 = 768;
let sum = 0;
while (num1 > 0) {
  sum += (num1 % 10); // Add the last digit to the sum
  num1 = Math.floor(num1 / 10); // Remove the last digit from the number
}
console.log(sum); // Expected output: 21

