var number = 12345;
var sum = 0;
while (number != 0) {
    sum += number % 10;
    number = number / 10;
}
console.log(sum);
