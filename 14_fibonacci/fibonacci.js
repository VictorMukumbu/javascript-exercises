const fibonacci = function(input) {
    let num
    if(typeof(input) !=='number'){
        num = Number(input)
    }
    else{
        num=input
    }
    if(num<0){return "OOPS"}
    if(num===0){return 0}
    
    else if(num===1){return 1}
    let first =0
    let second =1
    for(let i=2;i<=num;i++){
        [first,second]=[second,first+second]
        
    }
    return second

};

// Do not edit below this line
module.exports = fibonacci;
