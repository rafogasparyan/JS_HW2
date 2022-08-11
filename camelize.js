//Write the function camelize (str), which converts lines of the form "my-short-string" to "myShortString".

function camelize(str) {
    return str.replace(/-/g, "");
}

console.log(camelize("hell-oo-ooo"));