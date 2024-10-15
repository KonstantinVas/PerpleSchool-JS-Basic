const card = '4561-1213-4367-2612';

function checkCardLuna(card) {
    card = card.replaceAll('-', '');
    card = card.split('').reverse();

    const arr = card.map((el, i) => {
        if (i % 2 == 0) {
            el *= 2;
            if (el > 9) el -= 9;
        }
        return el;
    }).reduce((acc, el) => {
        acc + el;
    }, 0)
    return arr % 10 == 0;
}

console.log(checkCardLuna(card));