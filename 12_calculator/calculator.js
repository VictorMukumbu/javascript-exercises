const add = function(num1,num2) {
  let added =num1+num2
  return added
	
};

const subtract = function(num1,num2) {
  let subtracted = num1-num2
  return subtracted

	
};

const sum = function(array) {
  return array.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
	
};


const multiply = function(array) {
  return array.reduce((accumulator,currentValue)=>accumulator*currentValue,1)

};

const power = function(base,exponent) {
  return Math.pow(base,exponent)
	
};

const factorial = function(num) {
	if(num===0||num===1){
    return 1;
  }
  else{
    let result =1
    for(let i=2;i<=num;i++){
       result*=i
    }
    return result
  }
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
