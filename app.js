let passwordBox = document.querySelector('#password');
let img = document.querySelector('.img-1');
// let button = document.querySelector('#button-main');

let length = 12;

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let symbol = '!@#$%^&*()_+-=[]{}|;:<>,./?';
let number = '0123456789';
let allChars = uppercase + lowercase + number + symbol;


function generatePassword() {
    let password = '';
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
    // console.log('work');
}
img.addEventListener('Click', function () {
    passwordBox.select();
    document.execCommand('copy');
})

