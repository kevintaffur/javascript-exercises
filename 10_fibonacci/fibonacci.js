const fibonacci = function(n) {
  if (typeof n === "string") {
    n = parseInt(n);
  }
  if (n === 0) {
    return 0;
  }
  if (n < 0) {
    return "OOPS";
  }
  if (n === 1) {
    return 1;
  }
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib[fib.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
