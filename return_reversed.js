function digitize(n) {
    //code here
    return String(n).split('').map(Number).reverse();
  }