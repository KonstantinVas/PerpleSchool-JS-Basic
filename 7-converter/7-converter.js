function getConverter(sum, currency, inCurrency) {
    const RUB_USD = 95.17;
    const RUB_EUR = 105;
    const USD_RUB = 0.90;
    const USD_EUR = 0.91;

    switch (true) {
        case currency === 'rub' && inCurrency === 'usd':
            return sum / RUB_USD;
        case currency === 'rub' && inCurrency === 'eur':
            return sum / RUB_EUR;
        case currency === 'usd' && inCurrency === 'rub':
            return sum * RUB_USD;
        case currency === 'usd' && inCurrency === 'eur':
            return sum * USD_EUR;
        case currency === 'eur' && inCurrency === 'rub':
            return sum * RUB_EUR;
        case currency === 'eur' && inCurrency === 'usd':
            return sum / USD_RUB;
        default:
            return null;
    }
}
console.log(getConverter(100, 'usd', 'rub'));