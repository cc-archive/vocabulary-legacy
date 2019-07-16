let navLinkList
let navLinkMap = {}
let navLinks
let activeLink

window.onload = () => {
  navLinkList = document.querySelector('nav > ul')
  navLinks = navLinkList.children
  navLinks.forEach(
    navLink => {
      navLinkMap[navLink.innerText] = navLink
      navLink.addEventListener('click', () => {
        activeLink.classList.remove('cc-active')
        navLink.classList.add('cc-active')
        activeLink = navLink
      })
    }
  )
  if (window.location.hash === '') {
    activeLink = navLinks[0]
  } else {
    let hash = window.location.hash
    let componentFamily = hash.split('/')[1]
    activeLink = navLinkMap[componentFamily]
  }
  activeLink.classList.add('cc-active')
}
