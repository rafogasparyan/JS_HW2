//Implement REDUCE function which should work like JS reduce.
// It should take as the same parameters as JS reduce does.

function reduce(callback, initialValue) {
    let accumulator = ( initialValue == undefined) ? this[0] : initialValue;
    let start = (initialValue == undefined) ? 1 : 0;
    for (let i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i])
    }
    return accumulator;
}
Array.prototype.myReduceFunction = reduce;
console.log([1,2,3,4,5].myReduceFunction((sum,curElem) => sum+curElem));