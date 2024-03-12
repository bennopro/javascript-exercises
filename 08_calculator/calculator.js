const add = function(a, b) {
	let add = a + b;
  return add;
};

const subtract = function(a, b) {
  substraction = a - b;
  return substraction;
};

const sum = function(a) {
  let sum = a.reduce((sum, currentItem) => sum + currentItem, 0);
  return sum;
};

const multiply = function(a) {
  let product = a.reduce((product, currentItem) => product * currentItem, 1);
  return product;
}

const power = (a, b) => Math.pow(a, b);


const factorial = function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }
  else if(n > 1){
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }
  else{
    return "number has to be positive."
  }  
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
