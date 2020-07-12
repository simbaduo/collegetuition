const hamburgerMenu = document.querySelector('.toggle')

const navBar = document.querySelector('.navBar')

hamburgerMenu.addEventListener('click', () => {
  navBar.classList.toggle('mobileNavBar')
}, false)

document.openHamburgerMenu = function () {
  console.log('Menu Open')

  const styleBurgerContainer = document.getElementById('styleBurger')
  console.log('styleBurgerContainer', styleBurgerContainer)
  styleBurgerContainer.style.display = 'block'
}

document.closeHamburgerMenu = function () {
  console.log('Menu Close')

  const styleBurgerContainer = document.getElementById('styleBurger')
  styleBurgerContainer.style.display = 'none'
}
document.addEventListener('DOMContentLoaded')
