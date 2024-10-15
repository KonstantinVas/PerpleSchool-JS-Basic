function checkArray(arr, item, callback) {
    for (let el of arr) {
        if (el === item) {
            return callback(arr, el);
        }
    }
    return false;
}

function deleteItemArray(arr, item) {
    let index = arr.indexOf(item);
    const result = arr.splice(index, 1);
    console.log(true);
    return result;
}

console.log(checkArray([3, 6, 9, 2], 2, deleteItemArray));