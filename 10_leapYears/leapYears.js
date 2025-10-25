const leapYears = function(year) {
    let isYearDivisibleByFour =year%4===0
    let isYearDivisibleByFourHundred = year%400 ===0
    let divisibleByHundred = year%100 ===0

if(isYearDivisibleByFour && (isYearDivisibleByFourHundred ||!divisibleByHundred)){
    return true
}
else {return false}

};

// Do not edit below this line
module.exports = leapYears;
