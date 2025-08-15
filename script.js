
//bouton navigation

const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const closeBurger = document.getElementById("closeBurger");

burger.addEventListener('click',()=>{
  menu.style.display = 'block';
  burger.style.display = 'none';
  closeBurger.style.display = 'block';
});

closeBurger.addEventListener('click',()=>{
  menu.style.display = 'none';
  burger.style.display = 'block';
  closeBurger.style.display = 'none';
});

const lesmenus = document.querySelectorAll('.lesmenus').forEach(
  item => {
    item.addEventListener('click', () => {
      menu.style.display = 'none';
      burger.style.display = 'block';
      closeBurger.style.display = 'none';
    })
  }
);

//desactiver le service Orange