var trigger = document.querySelector('#burger');
var popup = document.querySelector('#mainmenu');

trigger.addEventListener('click', function(evt){
    popup.classList.toggle('menu--open');
})