const form = document.querySelector('.form');
const inputOne = document.querySelector('.input-one');
const inputTwo = document.querySelector('.input-two');
const result = document.querySelector('.result');
const button = document.getElementsByClassName('button');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!inputOne.value || !inputTwo.value) {
        return;
    }
    switch (e.submitter.innerText) {
        case 'Сложение':
            createEl(Number(inputOne.value) + Number(inputTwo.value), e.submitter.innerText);
            break;
        case 'Вычитание':
            createEl(Number(inputOne.value) - Number(inputTwo.value), e.submitter.innerText);
            break;
        case 'Деление':
            createEl(Number(inputOne.value) / Number(inputTwo.value), e.submitter.innerText);
            break;
        case 'Умножение':
            createEl(Number(inputOne.value) * Number(inputTwo.value), e.submitter.innerText);
            break;
    }
    inputOne.value = '';
    inputTwo.value = '';
})

function createEl(res, action) {
    result.innerHTML = `<div>Результат: ${action} ${Math.round(res * 100) / 100}</div>`
}