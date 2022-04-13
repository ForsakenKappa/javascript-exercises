const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
  return a - b
};

const sum = function(numbers = []) {
  let result = 0;
  if (numbers.length > 0){
    numbers.forEach((num) => result += num)
  }
  return result
};

const multiply = function(numbers = []) {
  let result = 1;
  numbers.forEach(num => result *= num)
  return result
};

const power = function(a, power) {

  let poweredNum = 1;

  for (let i = 0; i < power; i ++) poweredNum *= a

  return poweredNum
	
};

const factorial = function(a) {

  result = a
  if ( a === 1 || a === 0) return 1

	result *= factorial(a-1)
  return result

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
