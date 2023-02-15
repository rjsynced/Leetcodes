arr1 = [1, 1, 5]
arr2 = [2, 2, 3]



function mergeSortedArrays(arr1, arr2) {
    const result = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1
    let j = 1

    if (arr1.length === 0) {
        return arr2
    }

    if (arr2.length === 0) {
        return arr1
    }

    while(arr1Item || arr2Item) {
        if(arr2Item === undefined || arr1Item < arr2Item) {
            result.push(arr1Item)
            arr1Item = arr1[i]
            i++
        } else {
            result.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
    }
    return result
}

console.log(mergeSortedArrays(arr1, arr2))