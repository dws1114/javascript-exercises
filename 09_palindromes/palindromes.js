const palindromes = function (string) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  cleanedString = string
    .split("")
    .filter((char) => alphanumerical.includes(char))
    .join("");

  reversedString = cleanedString
    .split("")
    .reverse()
    .join("");

  return cleanedString === reversedString;
}

// Do not edit below this line
module.exports = palindromes;
