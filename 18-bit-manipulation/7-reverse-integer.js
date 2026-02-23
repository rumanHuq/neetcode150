function reverse(x) {
  const INT32_MAX = 2147483647;
  const INT32_MIN = -2147483648;

  let result = 0;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  while (x !== 0) {
    const digit = x % 10;
    x = Math.floor(x / 10);

    if (result > Math.floor(INT32_MAX / 10) || 
        (result === Math.floor(INT32_MAX / 10) && digit > 7)) {
      return 0;
    }

    result = result * 10 + digit;
  }

  return result * sign;
}

export default reverse;
