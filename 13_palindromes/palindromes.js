const palindromes = function (str) {
   let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
   let result = cleaned.split('').reverse().join('')
   return cleaned===result

};

// Do not edit below this line
module.exports = palindromes;
