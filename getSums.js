//Write a function getSums (arr), which returns a new array of the same number of elements,
// in which at each position there must be a sum of elements arr to this position inclusive.

function getSums(arr) {
    let newArr = new Array();
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        newArr[i] = sum;
    }
    return newArr;
}

console.log(getSums([1,2,3,4,5]));