function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

//Big - O = O(logn)

powerOfTwo(1);
powerOfTwo(2);
powerOfTwo(5);
powerOfTwo(8);
powerOfTwo(10);
