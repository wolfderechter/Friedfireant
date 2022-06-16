// toggle navbar
const toggle = document.getElementById('navToggler')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})