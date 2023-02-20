const arr1 = [1,2,3]
const arr2 = [4,1,9]

// brute force method
function sameArray(arr1, arr2) {
    // edge case
    if(arr1.length != arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

// console.log(sameArray(arr1, arr2))

// dictionary practice
function same(arr1, arr2) {
    let counter1 = {}
    let counter2 = {}

    // edge case
    if (arr1.length != arr2.length) {
        return false
    }
    for(let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1
    }

    for(let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1
    }

    for(let key in counter1) {
        if(!(key ** 2 in counter2)) {
            return false
        }
        if(counter2[key ** 2] !== counter1[key]) {
            return false
        }
    }
    // console.log(counter1)
    // console.log(counter2)
    return true
}
console.log(same(arr1, arr2))
