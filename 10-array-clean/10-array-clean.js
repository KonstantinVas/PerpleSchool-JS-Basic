function checkArray(arr, item, callback) {
    for (let el of arr) {
        if (el === item) {
            console.log(true);
            return console.log(callback(arr, el));
        }
    }
    console.log(false)
    console.log(arr);
    return;
}

function deleteItemArray(arr, item) {
    let index = arr.indexOf(item);
    arr.splice(index, 1);
    return arr;
}

checkArray([3, 6, 9, 2], 6, deleteItemArray);