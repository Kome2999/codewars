function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return sum + (n * n);
    },0);
  }