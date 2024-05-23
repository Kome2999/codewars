function squareSum(numbers){
    //function(sum,n) is a parameter of reduce as well as 0
    return numbers.reduce(function(sum,n){
        return n * n + sum;
    },0)

}