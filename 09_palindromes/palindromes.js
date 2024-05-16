const palindromes = function (text) {
  const arr = [];
  let txt = text.toLowerCase();
  txt = [...txt].filter((char) => {
    return char !== " " && char !== "," && char !== "." && char !== "?" && char !== "!";
  })

  let reverseIndex = txt.length - 1;
  for (let i = 0; i < txt.length; i++) {
    arr[i] = txt[reverseIndex];
    reverseIndex--;
  }

  const charsToEvaluate = Math.ceil(txt.length / 2);

  for (let i = 0; i < charsToEvaluate; i++) {
    if (txt[i] !== arr[i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
