const isDivisibleBy = function (x) {
  return (y) => y % x === 0;
};
const isDivisibleBy3 = isDivisibleBy(3);
const isDivisibleBy5 = isDivisibleBy(5);

for (let i = 1; i <= 100; i++) {
  if (isDivisibleBy3(i)) {
    process.stdout.write("Fizz");
  }
  if (isDivisibleBy5(i)) {
    process.stdout.write("Buzz");
  }

  if (!(isDivisibleBy3(i) || isDivisibleBy5(i))) {
    process.stdout.write(i.toString());
  }
  console.log();
}
