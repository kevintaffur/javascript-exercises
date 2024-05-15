const sumAll = function(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return "ERROR";
  }
  if (n1 < 0 || n2 < 0) {
    return "ERROR";
  }

  let minNumber = n1;
  let maxNumber = n2;
  if (n2 < n1) {
    minNumber = n2;
    maxNumber = n1;
  }
  let sum = 0;
  for (let i = minNumber; i <= maxNumber; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
