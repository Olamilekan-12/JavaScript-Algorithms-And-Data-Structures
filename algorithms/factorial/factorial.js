function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  console.log(result);
  return result;
}

//Big - O = O(n)

factorial(0);
factorial(1);
factorial(2);
factorial(3);
factorial(5);
