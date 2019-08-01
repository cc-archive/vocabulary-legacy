let navLinkList
let navLinkMap = {}
let navLinks
let activeLink
let searchField

function hashToNav () {
  mapLinks()

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

function filterOn () {
  navLinkList.classList.add('cc-filtering')
}

function filterOff () {
  if (!searchField.value) {
    navLinkList.classList.remove('cc-filtering')
    hashToNav()
  }
}

function mapLinks () {
  navLinkList = document.querySelector('div[class*="rsg--sidebar"] nav > ul')
  navLinks = navLinkList.children
  navLinks.forEach(navLink => {
    navLinkMap[navLink.innerText] = navLink
  })
}

window.onload = () => {
  hashToNav()

  searchField = document.querySelector('input[placeholder="Filter by name"')
  searchField.onfocus = filterOn
  searchField.onblur = filterOff
}

window.onhashchange = hashToNav
