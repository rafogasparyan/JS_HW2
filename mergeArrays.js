//Write a JavaScript function to merge two arrays and removes all duplicates elements.

function mergeArrays(arr1, arr2) {
    let arr = arr1.concat(arr2);
    let uniqueArr = [];
    for (let el of arr) {
        if (!uniqueArr.includes(el)) {
            uniqueArr.push(el);
        }
    }
    return uniqueArr;
}

console.log(mergeArrays([1,2,3,7], [2,3,4,6]));

