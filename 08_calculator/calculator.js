const add = function(...numbers) {
	return numbers.reduce((acc, current) => {
    return acc + current;
  }, 0);
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((acc, current) => {
    return acc + current;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, current) => {
    return acc * current;
  }, 1);
};

const power = function(base, pw) {
  let result = 1;
  for (let i = 0; i < pw; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(n) {
	let result = 1;
	for (let i = 1; i <= n; i++) {
    result *= i;
	}
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
