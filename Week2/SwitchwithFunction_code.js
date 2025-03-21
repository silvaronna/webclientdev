const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function kmToCm(km) {
    return km * 100000;
}

function cmToKm(cm) {
    return cm / 100000;
}

function isEven(n){
    return n % 2 == 0;
}

function removeFirstOccurrence(str, search) {
    return str.replace(search, '');
}
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '')();
    return cleanedStr === cleanedStr.split('');
}
function showMenu() {
    console.log('\nMenu:');
    console.log('1. Konversi Fahrenheit ke Celsius');
    console.log('2. Konversi KM ke CM');
    console.log('3. Konversi CM ke KM');
    console.log('4. Bilangan ganjil atau genap');
    console.log('5. Hapus Huruf dari string');
    console.log('6. Pengecekan string palindrome')
    console.log('7. Keluar');
    
    rl.question('Pilih menu (1-X): ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Masukkan suhu dalam Fahrenheit: ', (input) => {
                    console.log(`Hasil: ${fahrenheitToCelsius(parseFloat(input))}°C`);
                    showMenu();
                });
                break;
            case '2':
                rl.question('Masukkan jarak dalam Kilometer: ', (input) => {
                    console.log(`Hasil: ${kmToCm(parseFloat(input))} cm`);
                    showMenu();
                });
                break;
            case '3':
                rl.question('Masukkan jarak dalam Centimeter: ', (input) => {
                    console.log(`Hasil: ${cmToKm(parseFloat(input))} km`);
                    showMenu();
                });
                break;
            case '4':
                rl.question('Masukkan bilangan: ', (input) => {
                    const number = parseInt(input);
                    console.log(isEven(number) ? 'Genap' : 'Ganjil');
                    showMenu();
                });
                break;
            case '5':
                rl.question('String = Hello World. Delete from String: ', (input) => {
                    console.log(`Hasil: ${removeFirstOccurrence("Hello World", input)}`);
                    showMenu();
                });
                break;
            case '6':
                rl.question('Masukkan string untuk dicek palindrom: ', (input) => {
                    console.log(isPalindrome(input) ? 'Palindrome' : 'Bukan Palindrome');
                    showMenu();
                });
                break;
            case '7':
                console.log('Terima kasih!');
                rl.close();
                break;
            default:
                console.log('Pilihan tidak valid. Silakan coba lagi.');
                showMenu();
        }
    });
}

showMenu();
