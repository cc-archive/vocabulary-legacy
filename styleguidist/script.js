let isolateButton

let sidebar
let searchField
let navLinkList, navLinks
let activeLink, highlightedLink

let root

let navLinkMap = {}

// Functions

/**
 * Locate elements that are never changed during the session.
 */
function oneTimeLocateElements () {
  sidebar = document.querySelector(
    'div[class*="rsg--sidebar"]'
  )
  searchField = document.querySelector(
    'input[placeholder="Filter by name"'
  )
}

/**
 * Locate elements that are destroyed and recreated during the visit.
 */
function locateElements () {
  isolateButton = document.querySelector(
    'a[aria-label="Open isolated"]'
  )

  navLinkList = document.querySelector(
    'div[class*="rsg--sidebar"] nav > ul'
  )
  navLinks = navLinkList.children
  mapLinks()

  root = document.querySelector(
    'div[class*="rsg--root"][class*="rsg--hasSidebar"]'
  )

  isolateButton.innerHTML = `\
<svg
  focusable="false"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512"
  style="height: 1em; width: 1em;">
  <path
    fill="currentColor"
    d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>
</svg>`

  if (document.querySelector('.vocab.container')) {
    // Enable collapsing sidebar

    sidebar.classList.add('cc-drawout')
    root.classList.add('cc-drawout')
  } else {
    // Disable collapsing sidebar

    sidebar.classList.remove('cc-drawout')
    root.classList.remove('cc-drawout')
  }
}

/**
 * Parse navigation tree DOM into a usable JavaScript object
 */
function mapLinks () {
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

/**
 * Split current hash to mark up active link and highlighted link
 */
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

// Event listeners

function onWindowLoad (event) {
  oneTimeLocateElements()

  onWindowHashChange(event)

  navLinkList.classList.add('cc-collapsing')

  // Attach event listeners

  searchField.addEventListener(
    'focus',
    onSearchFieldFocus
  )
  searchField.addEventListener(
    'blur',
    onSearchFieldBlur
  )

  window.addEventListener(
    'hashchange',
    onWindowHashChange
  )
  document.addEventListener(
    'click',
    onDocumentClick
  )
}

function onWindowHashChange (event) {
  locateElements()
  hashToNav()

  // Attach event listeners

  isolateButton.addEventListener(
    'click',
    onIsolateButtonClick
  )
}

function onDocumentClick (event) {
  if (
    event.target.closest('div[class*="rsg--sidebar"]') ||
    event.target.closest('a[aria-label="Open isolated"]')
  ) {
    return
  }

  sidebar.classList.remove('cc-visible')
}

function onSearchFieldFocus (event) {
  navLinkList.classList.remove('cc-collapsing') // Show expanded sidebar

  activeLink.classList.remove('cc-active')
  highlightedLink.classList.remove('cc-highlighted')
}

function onSearchFieldBlur (event) {
  if (!searchField.value) {
    locateElements()
    hashToNav()

    navLinkList.classList.add('cc-collapsing') // Restore filtered sidebar
  }
}

function onIsolateButtonClick (event) {
  event.preventDefault() // Avoid redirects to #! URLs

  if (sidebar.className.includes('cc-visible')) {
    sidebar.classList.remove('cc-visible')
  } else {
    sidebar.classList.add('cc-visible')
  }
}

// Attach event listeners

window.addEventListener(
  'load',
  onWindowLoad
)
