function createPassword(password) {
    const result = password.split('');
    const res2 = result.splice(2, 1)[0];
    const res3 = result.splice(3, 1)[0];
    result.unshift(res3, res2);
    const encrypted = result.join('');
    console.log('Зашифрованный пароль:', encrypted);
    checkPassword(encrypted, password);
}

function checkPassword(encrypted, password) {
    const result = encrypted.split('');
    const res2 = result.shift();
    const res3 = result.shift();
    result.splice(3, 0, res2);
    result.splice(2, 0, res3);
    const decrypted = result.join('');
    console.log(`Расшифрованный пароль: ${decrypted}
Пароли совпадают: ${decrypted === password ? 'Да' : 'Нет'}`);
}

createPassword('password');