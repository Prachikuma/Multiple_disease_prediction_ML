let menu =document.querySelector('#main_menu');
let nav =document.querySelector('.nav');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}


