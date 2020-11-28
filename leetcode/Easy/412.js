/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 * But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.
 * For numbers which are multiples of both three and five output “FizzBuzz”.
 * 
 * Example:
 * n = 15,
 * Return:
    [
        "1",
        "2",
        "Fizz",
        "4",
        "Buzz",
        "Fizz",
        "7",
        "8",
        "Fizz",
        "Buzz",
        "11",
        "Fizz",
        "13",
        "14",
        "FizzBuzz"
    ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
export default function fizzBuzz(n) {
  const displayArr = [];
  for (let i = 1; i <= n; i++) {
    const val =
      i % 3 === 0 && i % 5 === 0
        ? 'FizzBuzz'
        : i % 3 === 0
        ? 'Fizz'
        : i % 5 === 0
        ? 'Buzz'
        : `${i}`;
    displayArr.push(val);
  }
  return displayArr;
}
