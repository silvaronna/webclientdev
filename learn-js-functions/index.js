const readline = require('readline');
const fahrenheitToCelsius = require('./functions/fahrenheitToCelsius');
const kmToCm = require('./functions/kmToCm');
const cmToKm = require('./functions/cmToKm');
const isEven = require('./functions/isEven');
const removeFirstOccurrence = require('./functions/removeFirstOccurrence');
const isPalindrome = require('./functions/isPalindrome');
const log = require('./functions/logger');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function ask(question) {
    return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function main() {
    log('\n=== Menu ===');
    log('1. Fahrenheit → Celsius');
    log('2. KM → CM');
    log('3. CM → KM');
    log('4. Ganjil/Genap');
    log('5. Hapus huruf dari "Hello World"');
    log('6. Cek Palindrome');
    log('7. Keluar');

    const choice = await ask('\nPilih menu (1-7): ');

    switch (choice) {
        case '1':
            const f = await ask('Masukkan Fahrenheit: ');
            log(`Hasil: ${fahrenheitToCelsius(parseFloat(f)).toFixed(2)} °C`);
            break;
        case '2':
            const km = await ask('Masukkan KM: ');
            log(`Hasil: ${kmToCm(parseFloat(km))} cm`);
            break;
        case '3':
            const cm = await ask('Masukkan CM: ');
            log(`Hasil: ${cmToKm(parseFloat(cm))} km`);
            break;
        case '4':
            const n = await ask('Masukkan bilangan: ');
            log(isEven(parseInt(n)) ? 'Genap' : 'Ganjil');
            break;
        case '5':
            const del = await ask('Hapus beberapa huruf dari "Hello World": ');
            log(`Hasil: ${removeFirstOccurrence("Hello World", del)}`);
            break;
        case '6':
            const str = await ask('Masukkan string: ');
            log(isPalindrome(str) ? 'Palindrome' : 'Bukan Palindrome');
            break;
        case '7':
            log('Terima kasih!');
            rl.close();
            return;
        default:
            log('Pilihan tidak valid.');
    }

    main();
}

main();
