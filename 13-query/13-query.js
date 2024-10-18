const obj = {
    search: 'Вася',
    take: 10,
}

function getURLQuery(obj) {
    let queryString = '';

    for (const key in obj) {
        if (queryString !== '') {
            queryString += '&';
        }
        queryString += `${key}=${obj[key]}`;
    }

    return queryString;
}

console.log(getURLQuery(obj)); 