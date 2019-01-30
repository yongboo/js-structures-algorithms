// 整数翻转

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let isNeg
    if(x < 0) {
        x = Math.abs(x)
        isNeg = true
        
    }
    let result = parseFloat(x.toString().split('').reverse().join(''))
    result = isNeg ? (0 - result) : result
    if (result > (Math.pow(2, 31) - 1) || result < (Math.pow(-2, 31))) {
        return 0
    }
    return result
    
};

console.log(reverse(-120))
console.log(reverse(123456789067))