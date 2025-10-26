# Exercise 14 - Fibonacci

Create a function that returns a specific member of the Fibonacci sequence:

> A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
> In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
> To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

```javascript
fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
fibonacci(6); // returns 8
```

const fibbonaciNumber=(input)=>{
    let num
    if(typeOf(input)!=="number"){
        num=Number(input)
    }
    else{
        num=input
    }
    if(num===0){
        return 0
    }
    else if(num===1){
        return 1
    }
    let first =1
    let next =2
    for(let i=2;i<=num;i++){
        [first,next]=[next,first+next]
    }
    return next
}