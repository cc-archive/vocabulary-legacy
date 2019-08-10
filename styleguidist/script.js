let searchField

let navLinkList
let navLinks

let navLinkMap = {}

let activeLink
let highlightedLink

// Map active hash to classes on navigation tree

function hashToNav () {
  let hash = window.location.hash
  let parts = hash.split('/')

  let family = parts[1]
  if (family) {
    family = family.replace('%20', ' ')
  } else {
    family = 'Vocabulary'
  }
  let member = parts[2]
  if (member) {
    member = member.replace('%20', ' ')
  }

  mapLinks()

  if (activeLink) {
    activeLink.classList.remove('cc-active')
  }
  if (highlightedLink) {
    highlightedLink.classList.remove('cc-highlighted')
  }

  activeLink = navLinkMap[family].domObject
  activeLink.classList.add('cc-active')

  if (member) {
    highlightedLink = navLinkMap[family].children[member].domObject
    highlightedLink.classList.add('cc-highlighted')
  }
}

// Convert navigation tree to JavaScript object

function mapLinks () {
  navLinkList = document.querySelector(
    'div[class*="rsg--sidebar"] nav > ul'
  )

  navLinks = navLinkList.children
  navLinks.forEach(navLink => {
    let innerText = navLink.querySelector('a').innerText
    navLinkMap[innerText] = {
      domObject: navLink,
      children: Array.from(navLink.querySelector('ul').children).reduce(
        (obj, item) => {
          obj[item.innerText] = {
            domObject: item
          }
          return obj
        },
        {}
      )
    }
  })
}

// Filter field focus and blur events

function filterOn () {
  navLinkList.classList.remove('cc-collapsing')
  activeLink.classList.remove('cc-active')
  highlightedLink.classList.remove('cc-highlighted')
}

function filterOff () {
  if (!searchField.value) {
    hashToNav()
    navLinkList.classList.add('cc-collapsing')
  }
}

// Attach listeners to window events

window.onload = () => {
  hashToNav()
  navLinkList.classList.add('cc-collapsing')

  searchField = document.querySelector(
    'input[placeholder="Filter by name"'
  )

  // Attach listeners to search field focus and blur events

  searchField.onfocus = filterOn
  searchField.onblur = filterOff
}
window.onhashchange = hashToNav
