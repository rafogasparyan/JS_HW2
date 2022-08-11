//Write a JavaScript function to clone an array.
function cloneArray(arr) {
    let newArr = new Array();
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}

let arr1 = [1,2,3,4];
arr2 = cloneArray(arr1);
arr2[2] = 10;
console.log(arr1);
console.log(arr2);
