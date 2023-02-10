/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

jewels = "aA"
stones = "aAAbbbb"
// O(n) time complexity
function jewelsAndStones(jewels, stones) {
    let object = {}
    let count = 0
    for(let i = 0; i < jewels.length; i++) {
        object[jewels[i]] = 1
    }
    for(let i = 0; i < stones.length; i++) {
        if(object[stones[i]]) {
            count++
        }
    }
    return count
}
console.log(jewelsAndStones(jewels, stones))


function jewelsAndStones1(jewels, stones) {
    const set = new Set(jewels)
    return stones.split('').reduce((res, stones) => res + set.has(stones), 0)
};
console.log(jewelsAndStones1(jewels, stones))