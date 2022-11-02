

document.addEventListener('DOMContentLoaded' , () => {
  showMenu();
})

function showMenu() {

  const navClose = document.querySelector('#nav-close');
  const navToggle = document.querySelector('#nav-toggle');
  const navMenu = document.querySelector('#nav-menu');

  if(navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    })
  }

  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    })
  }
}

