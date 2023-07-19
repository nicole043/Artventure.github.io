
let color1 = document.getElementById ('color1');
let color2 = document.getElementById ('color2');
let color3 = document.getElementById ('color3');
let color4 = document.getElementById ('color4');
let color5 = document.getElementById ('color5');
let color6 = document.getElementById ('color6');
let color7 = document.getElementById ('color7');
let color8 = document.getElementById ('color8');
let color9 = document.getElementById ('color9');
let color10 = document.getElementById ('color10');

window.addEventListener ('scroll',() => {
    let value = window.scrollY;

    color1.style.left = value * 1.0 + 'px';
    color2.style.left = value * -1.0 + 'px';
    color3.style.left = value * 1.0 + 'px';
    color4.style.left = value * -1.0 + 'px';
    color5.style.left = value * 1.0 + 'px';
    color6.style.left = value * -1.0 + 'px';
    color7.style.left = value * 1.0 + 'px';
    color8.style.left = value * -1.0 + 'px';
    color9.style.left = value * 1.0 + 'px';
    color10.style.left = value * -1.0 + 'px';
});