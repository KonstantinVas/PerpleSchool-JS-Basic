const arrDate = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023'];


function parseArr(arr) {
    const res = arr.filter(elem => {
        const dateParts = elem.split(/[-\/]/);
        if (dateParts.length !== 3) return false;

        const [day, month, year] = dateParts;

        if (isNaN(day) || isNaN(month) || isNaN(year)) return false;
        if (Number(day) < 1 || Number(day) > 31) return false;
        if (Number(month) < 1 || Number(month) > 12) return false;
        if (Number(year) < 1000 || Number(year) > 9999) return false;

        return elem;
    })
        .map(elem => {
            const [day, month, year] = elem.split(/[-\/]/);
            return `${day}/${month}/${year}`;
        })
    return res;
}

console.log(parseArr(arrDate));