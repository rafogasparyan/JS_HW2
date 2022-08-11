// Write a JS function (equals) that take 2 arguments(objects), and checks if those objects are equal(equal - all properties and their values are equal)
// hint! - recursion, properties can be objects.

function equals(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length != keys2.length) {
        return false;
    }
    for (let key of keys1) {
        let value1 = object1[key];
        let value2 = object2[key];
        let areObjects = isObject(value1) && isObject(value2);
        if (areObjects && !equals(value1, value2) ||
            !areObjects && value1 !== value2) {
            return false;
        }
    }
    return true;
}

function isObject(object) {
    return object != null && typeof object === 'object';
}

let a = {
    a: 5,
    b: {
        k: "str"
    }
};

let b = {
    a: 5,
    b: {
        k: "str"
    }
}

let c = {
    a: 51,
    b: {
        k: "str"
    }
}

console.log(equals(a,b));
console.log(equals(a,c));