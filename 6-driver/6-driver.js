const hasLicence = true;
const age = 19;
const isDrunk = false;

const isRules = hasLicence && (age >= 18) && !isDrunk;
console.log(`Можно ли мне сесть за руль: ${isRules ? 'Да' : 'Нет'}`);