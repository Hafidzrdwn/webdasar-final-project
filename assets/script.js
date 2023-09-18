const hamburgerMenu = document.querySelector('.hamburger-menu')
const navBar = document.querySelector('nav')

hamburgerMenu.addEventListener('click', (e) => {
  navBar.classList.toggle('active')
  setTimeout(() => {
    e.target.classList.toggle('fa-times')
  }, 100);
})