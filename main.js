const btnBar = document.querySelector('.header__bar')
const navBar = document.querySelector('.header__navbar')
const btnCloseNavBar = document.querySelector('.btn-close')
btnBar.addEventListener('click', () => {
    navBar.classList.add('active')

})
btnCloseNavBar.addEventListener('click', () => {
    navBar.classList.remove('active')
})