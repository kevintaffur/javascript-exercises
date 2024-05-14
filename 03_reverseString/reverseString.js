const reverseString = function(str) {
  let txt = "";
  const len = str.length - 1;

  for (let i = len; i >= 0; i--) {
    txt += str[i];
  }
  return txt;
};

// Do not edit below this line
module.exports = reverseString;
