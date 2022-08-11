//Write a JavaScript function to check whether an `input` is an array or not.

function isInputArray(input) {
    return Array.isArray(input);
}

console.log(isInputArray([1,2,3]));
console.log(isInputArray("dfs"));


function isInputArray2(input) {
    return input instanceof Array;
}
console.log(isInputArray2([1,2,3]));
console.log(isInputArray2("dfs"));
