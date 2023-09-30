module.exports = function reverse(n) {
    const numberArray = Array.from(String(n));
    const reversedArray = numberArray.reverse();
    const reversedNumber = parseInt(reversedArray.join(""));
    return reversedNumber;
};
