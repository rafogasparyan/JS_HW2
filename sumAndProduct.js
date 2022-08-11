//Write a JavaScript program to compute the sum and product of an array of integers

function sumAndProduct(arr) {
    let a = {
        sum: 0,
        p: 1
    };

    for (let i = 0; i <arr.length; i++) {
        a.sum += arr[i];
        a.p *= arr[i];
    }
    return  a;
}

console.log(sumAndProduct([1,2,3,4]));