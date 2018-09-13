import AOS from 'aos';

const hello = 'World';
console.log(hello);

document.addEventListener("DOMContentLoaded", function () {
    console.log(AOS);
    AOS.init();
});




