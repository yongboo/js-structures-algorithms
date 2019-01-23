// 栈类实现

function Stack () {
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peak = peak
    this.clear = clear
    this.length = length

    function push(element) {
        this.dataStore[this.top++] = element
    }

    function pop() {
       return this.dataStore[--this.top]

    }
    
    function peak() {
        return this.dataStore[this.top - 1]
    }

    function clear() {
        this.top = 0
    }

    function length(){
        return this.top
    }
}

let stack1 = new Stack()
stack1.push('a')
stack1.push('b')
stack1.push('c')
stack1.push('d')
console.log(`this.top is ${stack1.top}`)
console.log(`the peak is: ${stack1.peak()}`)
console.log(`this stack1 is: ${stack1.dataStore}`)
console.log(`statck1 pop: ${stack1.pop()}`)
console.log(`pop after peak is: ${stack1.peak()}`)
console.log(`pop after stack1 is: ${stack1.dataStore}`)