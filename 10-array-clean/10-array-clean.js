function checkArray(arr, callback) {
    let filterArr = [];
    for (let el of arr) {
        if (callback(el)) {
            filterArr.push(el);
        }
    }
    return filterArr.length > 0 ? filterArr : arr;
}

function deleteItemArray(item) {
    return item > 6;
}

console.log(checkArray([3, 6, 9, 2], deleteItemArray));
