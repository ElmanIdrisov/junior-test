/* function sum(arr) {
    return arr.reduce((acc, item) => acc + item, 0)
}

console.log(sum([1,2,3,4,5])); */

/* // * напишите функцию, которая принимает массив чисел и возвращает сумму всех положиетльных элементов

const arr = [1,2,3,4,5,6,7,8,9,10];

function sumNumbers(array = []) {
    let sum = 0

    for(let index = 0; index < array.length; index++){
        if(array[index] > 0){
            sum += array[index];
        }
    }

    return sum;
}

console.log(sumNumbers(arr)); */

// * второй способ верхнего задания

/* const submit = document.querySelector('.submit')


submit.addEventListener('click', () => {
    
    const pass = document.querySelector('.password').value;
    const classPass = document.querySelector('.confirm-password').value;

    if(pass === classPass){
        alert('ok');
    } else {
        alert('Password not the same');
    }

}) */

// * создайте форму для регистрации пользователя, которая будет содержать поля для ввода имени, email, пароля и подтверждения пароля. При отправке формы должны выполнятся проверки все поля должны быть заполнены, email должен быть валидным, пароли должны совпадать

/* function paindrom(word) {
    return word.split('').reverse().join('') === word
}

console.log(paindrom('abba')); */

// * напишите функцию, которая принимает строку и возвращает true, если строка является палиндромом, и false в противном случае

/* window.addEventListener('scroll', (event) => {
    let pageHeight = document.body.offsetHeight;
    let currentPosition = window.pageYOffset;
    let windowHeight = window.innerHeight;
    let scrolled = (currentPosition / (pageHeight - windowHeight)) * 100;

    if(scrolled >= 100){
        console.log('you reached end of the page');
    } console.log(scrolled); */
    
/* }) */

// * напишите скрипт, который будет отслеживать положение скролла на странице и вычислять процент прокрутки страницы. Когда пользователь достигает нижней границы страницы, скрипт должен вывести сообщение "Вы достигли нижней границы страницы"