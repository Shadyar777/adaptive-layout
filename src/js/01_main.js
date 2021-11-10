let burger = document.querySelector('.header .icon-menu');
let menu__body = document.querySelector('.header .menu__body');

burger.addEventListener('click', function() {
  console.log("tab");
  this.classList.toggle('_active');
  menu__body.classList.toggle('_active');
})