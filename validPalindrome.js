/**
 * @param {string} s
 * @return {boolean}
 */

s = "A man, a plan, a canal: Panama"
// function beats 99% in speed and memory
function isPalindrome(s) {
    // changed methods to turn string to lowercase and use regex to remove non-alphanumeric
    let newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");

    let start = 0;
    let end = newStr.length-1;
    while(start < end){
        if(newStr[start] !== newStr[end]) return false
        start++
        end--
    }
    return true
};

console.log(isPalindrome(s))