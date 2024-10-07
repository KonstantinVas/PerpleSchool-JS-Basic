const de = 'DE';
const en = 'EN';
const ru = 'RU';
const es = 'ES';
const ga = 'GA';

const lang = prompt('Language, de, en, ru, es, ga');

if (lang === null) {
    console.log('Отменено');
} else {
    switch (true) {
        case lang.toLowerCase() === de.toLowerCase():
            console.log('Guten Tag!');
            break;
        case lang.toLowerCase() === en.toLowerCase():
            console.log('Good afternoon!');
            break;
        case lang.toLowerCase() === ru.toLowerCase():
            console.log('Добрый день!');
            break;
        case lang.toLowerCase() === es.toLowerCase():
            console.log('Buenas tardes!');
            break;
        case lang.toLowerCase() === ga.toLowerCase():
            console.log('God ettermiddag!');
            break;
        default:
            console.log('Не понимаю');
    }
}