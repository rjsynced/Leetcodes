/**
 * @param {string[]} strs
 * @return {string[][]}
 */

strs = ["aet", "tea", "tan", "ate", "nat", "bat"]
// time complexity: O(n*k log(k) where n = length of input & k is the max length of string in the input array
// space complexity: O(n)
function groupAnagram1(strs) {
    // result is an object of letter occurance and pushing the key of those strs of matching letters
    let result = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt() - 97]++;
        let key = count.join("#");
        result[key] ? result[key].push(str) : result[key] = [str];
    }
    return Object.values(result);
};
console.log(groupAnagram1(strs))

// hashmap with built in methods to accomplish same goal as #1
function groupAnagram2(strs) {
    const map = new Map();

    strs.forEach(v => {
        const key = v.split('').sort().join('');
        map.has(key) ? map.set(key, [...map.get(key), v]) : map.set(key, [v]);
    })

    return [...map.values()];
}
console.log(groupAnagram2(strs))

// prime*prime is unique, which each character can be represented by a prime
function groupAnagram3(strs) {
    const map = {};
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    strs.forEach(str => {
        let result = str.split("").reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
        map[result] ? map[result].push(str) : map[result] = [str];
    });
    return Object.values(map);
}
console.log(groupAnagram3(strs))