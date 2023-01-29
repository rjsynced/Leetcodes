/**
 * @param {string[]} sentences
 * @return {number}
 */

sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

function mostFoundWords(sentences) {
    let max = 0
    let temp = 0
    for(let i = 0; i < sentences.length; i++) {
        temp = sentences[i].split(" ").length;
        if(temp > max) {
            max = temp;
        }
    }
    return max
};
console.log(mostFoundWords(sentences))

function mostFoundWords1(sentences) {
    let max = 0
    for(let sentence of sentences) {
        let words = sentence.split(" ")
        max = Math.max(max, words.length)
    }
    return max
}
console.log(mostFoundWords1(sentences))