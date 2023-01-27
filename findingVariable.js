/**
 * @param {string[]} operations
 * @return {number}
 */

operations = ["++X","++X","X++"]

// everyone string will have index 1 per string either qual + or not, after than a simple if statement will do
function finalValueAfterOperations(operations){
    let count = 0
    for(let i = 0; i < operations.length; i++) {
        console.log(operations[i][1])
        if(operations[i][1] == "+") {
            count++
        } else {
            count--
        }
    }
    return count
}
console.log(finalValueAfterOperations(operations))


// filter operation
function finalValueAfterOperations1(operations) {
    let p = operations.filter((op)=> op.includes('+')).length;
    let m = operations.length - p;

    return p + (m*-1)
};
console.log(finalValueAfterOperations1(operations))