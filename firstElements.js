//Write a JavaScript function which receives ‘n’ and ‘arr’
// parameters and will return the first 'n' elements of the array.

function firstElements(arr, n) {
    return arr.slice(0, n);
}

console.log(firstElements([1,2,3,4,5,6], 3));


function firstElements2(arr, n) {
    let newArr = new Array();
    for (let i = 0; i < n; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}

console.log(firstElements2([1,2,3,4,5,6], 4))