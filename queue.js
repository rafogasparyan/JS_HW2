function Queue() {
    this.data = [],
    Queue.prototype.enqueue = function (e) {
        this.data.push(e);
    },
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) return null;
        return this.data.shift();
    },
    Queue.prototype.first = function () {
        if (this.isEmpty()) return null;
        return this.data[0];
    },
    Queue.prototype.size = function () {
        return this.data.length;
    },
    Queue.prototype.isEmpty = function () {
        if (this.data.length == 0) return true;
        return false;
    }

}