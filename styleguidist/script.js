let navLinkList
let navLinkMap = {}
let navLinks
let activeLink

function hashToNav () {
  let oldActiveLink, newActiveLink

  oldActiveLink = activeLink
  if (oldActiveLink) {
    oldActiveLink.classList.remove('cc-active')
  }

  if (window.location.hash === '') {
    newActiveLink = navLinks[0]
  } else {
    let hash = window.location.hash
    let componentFamily = hash.split('/')[1]
    newActiveLink = navLinkMap[componentFamily]
  }
  newActiveLink.classList.add('cc-active')

  activeLink = newActiveLink
}

window.onload = () => {
  navLinkList = document.querySelector('div[class*="rsg--sidebar"] nav > ul')
  navLinks = navLinkList.children
  navLinks.forEach(navLink => {
    navLinkMap[navLink.innerText] = navLink
  })
  hashToNav()
}

window.onhashchange = hashToNav
