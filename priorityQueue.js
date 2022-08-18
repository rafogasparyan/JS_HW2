function QueueElement(key, value) {
    this.element = key,
    this.priority = value
}

function PriorityQueue() {
    this.items = [];
    PriorityQueue.prototype.insert = function (k, v) {
        let obj = new Object();
        obj.key = k;
        obj.value = v;
        this.items.push(obj);
    },
        PriorityQueue.prototype.min = function () {
        let index = 0;
            if (this.isEmpty()) return null;
            let key = this.items[0].key;
            for (let i = 1; i < this.items.length; i++) {
                if (key > this.items[i].key) {
                    key = this.items[i].key;
                    index = i;
                }
            }
            return this.items[index];
        },
        PriorityQueue.prototype.isEmpty = function () {
            if (this.items.length == 0) return true;
            return false;
        },
        PriorityQueue.prototype.insert = function (key, value) {
            let qEl = new QueueElement(key, value);
            let contain = false;
            for (let i = 0; i < this.items.length; i++) {
                if (qEl.priority < this.items[i].priority) {
                    this.items.splice(i, 0, qEl)
                    contain = true;
                    break;
                }
            }
            if (contain == false) {
                this.items.push(qEl);
            }
        },
        PriorityQueue.prototype.size = function (){
            return this.items.length;
        },
        PriorityQueue.prototype.removeMin = function () {
            if (this.isEmpty()) {
                return null;
            }
            let index = this.min();
            this.items.splice(index, 1);
        }
}






// let k = "key";
// let v = 10;
// let a = new Object();
// a.key = k;
// a.value = v;
// console.log(a)
// let b = [a]
// for (const aKey in b) {
//     console.log(aKey)
// }


