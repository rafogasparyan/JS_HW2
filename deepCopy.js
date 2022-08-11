//Write a JS function that receives object and returns it’s deep copy.

function deepCopy(obj) {
    let newObj = new Object();
    const keys = Object.keys(obj);
    for (let key of keys) {
        let value = obj[key];
        if (isObject(key)) {
            deepCopy(value);
        } else {
            newObj[key] = value;
        }
    }
    return newObj;

}

function isObject(object) {
    return object != null && typeof object === 'object';
}


let a = {
    a: 5,
    b: {c:10}
};

let b = deepCopy(a);
console.log(a);
console.log(b);
b.b.c = 15;
console.log(b)
