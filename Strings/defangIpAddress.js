/**
 * @param {string} address
 * @return {string}
 */

address = "1.1.1.1"

function defangIp(address) {
    let result = ""
    for(let i = 0; i < address.length; i++) {
        if(address[i] == ".") {
            result += "[.]"
        } else {
            result += address[i]
        }
    }
    return result
};
console.log(defangIp(address))

function defangIp1(address) {
    let result = ""
    for(char of address) {
        if(char == ".") {
            result += "[.]"
        } else {
            result += char
        }
    }
    return result
}
console.log(defangIp1(address))