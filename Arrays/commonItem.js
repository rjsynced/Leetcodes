// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']

const array3 = ['a', 'b', 'c', 'x']
const array4 = ['z', 'y', 'x']
// brute force method
function compareItems(array1, array2) {
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array1[i] == array2[j]) {
                return true
            }
        }
    }
    return false
}
console.log(compareItems(array1, array2))
// brute force method test case #2
function compareItems1(array3, array4) {
    for(let i = 0; i < array3.length; i++) {
        for(let j = 0; j < array4.length; j++) {
            if(array3[i] == array4[j]) {
                return true
            }
        }
    }
    return false
}
console.log(compareItems1(array3, array4))