function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("false");
      return false;
    }
  }
  console.log("true");
  return true;
}

//Big - O = O(n)

isPrime(5);
isPrime(2);
isPrime(6);
isPrime(4);
isPrime(9);
