// Navegation Menu
const btnMenu = document.querySelector('.btn-menu');
const btnMenuX = document.querySelector('.btn-menu i');
const menu = document.querySelector('.list-container');
const menuContent = document.querySelector('.menu');
let on_off = true;

// Responsive Menu
btnMenu.addEventListener('click', () => {
    btnMenuX.classList.toggle('fa-times');

    if(on_off){
      menu.style.left = "0";
      menu.style.transition = "300ms";
      menuContent.style.position ="fixed";
      on_off = false;
    }else{
      on_off = false;
      menu.style.left = "-100%";
      menu.style.transition = "300ms";
      on_off = true;
    }

});

// Scroll Efect
window.onscroll = () => {

    // Border Bottom Style
    let arriba = window.pageYOffset;

    if (arriba >= 600) {
      menuContent.classList.add('box-shadow');
    }else{
        menuContent.classList.remove('box-shadow');
    }

}