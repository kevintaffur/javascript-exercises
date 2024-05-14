const repeatString = function(str, times) {
  if (times < 0) {
    return "ERROR";
  }
  let txt = "";
  for (let i = 0; i < times; i++) {
    txt += str;
  }
  return txt;
};

// Do not edit below this line
module.exports = repeatString;
