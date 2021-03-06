
// 列表类实现

function List() {
    this.listSize = 0 // 列表的元素个数
    this.pos = 0 // 列表的当前位置
    this.dataStore = [] // 初始化一个空数组来保存列表元素
    this.clear = clear // 清空列表中的所有元素
    this.find = find // 查找元素在列表中的位置
    this.toString = toString // 返回列表的字符串形式
    this.insert = insert // 在指定元素之后插入元素
    this.append = append // 在列表的末尾添加新元素
    this.remove = remove // 从列表中删除元素
    this.front = front // 将列表的当前位置设移动到第一个元素
    this.end = end // 将列表的当前位置移动到最后一个元素
    this.prev = prev // 将当前位置前移一位
    this.next = next // 将当前位置后移一位
    this.length = length // 返回列表中元素的个数
    this.currPos = currPos // 返回列表的当前位置
    this.moveTo = moveTo // 将当前位置移动到指定位置
    this.getElement = getElement // 返回当前位置的元素
    this.contains = contains

    function clear() {
        delete this.dataStore
        this.dataStore = []
        this.listSize = this.pos = 0
    }

    function toString() {
        return this.dataStore
    }

    function insert(element, after) {
        let insertPos = this.find(after) + 1
        if (insertPos > -1) {
            this.dataStore.splice(insertPos, 0, element)
            ++this.listSize
            return true
        }
        return false
    }

    function append(element) {
        this.dataStore[this.listSize++] = element
    }

    function find(element) {
        // for循环，return就可以直接跳出循环，break不报错
        let len = this.listSize
        for (let index = 0; index < len; index++ ) {
            if (this.dataStore[index] === element) {
                return index
            }
        }
        return -1

        // forEach(), return 无法跳出循环，break直接报错
        // this.dataStore.forEach((item, index) => {
        //     debugger
        //     if (item === element) {
        //         return index
        //     }
        // })
        // return -1
    }

    function remove(element) {
        let pos = this.find(element)
        if (pos > -1) {
            this.dataStore.splice(pos, 1)
            --this.listSize
            return true
        } 
        return false
    }

    function length() {
        return this.listSize
    }

    function contains(element) {
       return this.dataStore.some((item) => item === element)
    }

    function front() {
        this.pos = 0
    }

    function end() {
        this.pos = this.listSize - 1
    }

    function prev() {
        if (this.pos > 0) --this.pos
    }

    function next() {
        if (this.pos < this.listSize) ++this.pos
    }

    function currPos() {
        return this.pos
    }

    function moveTo(pos) {
        this.pos = pos
    }

    function getElement() {
        return this.dataStore[this.pos]
    }
    
    
}

let list1 = new List()
list1.append('a')
list1.append('b')
list1.append('c')
console.log(list1.toString())
console.log(list1.remove('b'))
console.log(list1.toString())
list1.insert('d', 'c')
console.log(list1.toString())
// list1.clear()
// console.log(list1.toString())
console.log(list1.contains('a'))

console.log('///////////////////////////')
let list2 = new List()
list2.append('a')
list2.append('b')
list2.append('c')
list2.append('d')
list2.front()
console.log(list2.getElement())
list2.next()
list2.next()
console.log(list2.getElement())
list2.prev()
console.log(list2.getElement())

console.log('迭代器////////////////////////////')
for (list2.front(); list2.currPos() < list2.length(); list2.next()) {
    console.log(list2.getElement())
}
console.log(list2.currPos())

