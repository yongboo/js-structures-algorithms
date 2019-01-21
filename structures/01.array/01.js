// 1 数组的创建方式

// 1.1 []操作符 
let a1 = [1, 2, 3]

// 1.2 Array构造函数 
let a2 = Array(3) // [ , , ]
console.log(typeof a2[0]) // undefined

let a3 = Array(1, 2, 3) // [1, 2, 3]

// 1.3 Array.of()
let a4 = Array.of(3) // [3]
console.log(a4[0])

let a5 = Array.of(1, 2, 3) // [1, 2, 3]

// 1.4 由已有数组创建新数组 
// 1.4.1 concat(), 不会修改原数组
let a6 = ['a', 'b', 'c']
let a7 = a6.concat(['d'])
console.log('a6: ', a6)
console.log('a7: ', a7)

// 1.4.2 slice(), 不会修改原数组
let a10 = [1, 2, 3]
let a11 = a10.slice(1, 2)
console.log('a10: ', a10)
console.log('a11: ', a11)

// 1.4.3 splice(), 会修改原数组
let a8 = ['a', 'b', 'c']
let a9 = a8.splice(1, 1)
console.log('a8: ', a8) // ['a', 'c']
console.log('a9: ', a9) // ['b']





