/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

s = "anagram"
t = "nagaram"

function isAnagram(s, t) {
    // to count freq we make an array size of 26
    const counter = new Array(26).fill(0);
    // traverse all elements through a loop of string s
    for(let i=0; i < s.length; i++) {
        counter[s.charCodeAt(i)-97]++;
    }
    // traverse all elemetns through a loop of string t
    for(let i = 0; i < t.length; i++) {
        counter[t.charCodeAt(i)-97]--;
    }

    for(let i = 0; i < 26; i++) {
        if(counter[i] != 0) {
            return false;
        } else {
            return true;
        }
    }
}

console.log(isAnagram(s,t))

// one-liner solution (log n times slower)
function isAnagram1(s,t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
};

console.log(isAnagram1(s,t))

// standard solution using a map
function isAnagram2(s,t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
}

console.log(isAnagram2(s, t))