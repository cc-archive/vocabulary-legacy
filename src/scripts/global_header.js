import { logoMarkSvg } from 'logos.js'
/**
 * This script query the WordPress API to gather global navigation elements
 */

function GlobalNavigation () {
  this.data = ''
  const API_URL = 'https://creativecommons.lo/wp-json/ccglobal/menu'
  const WEBSITE_URL = 'https://creativecommons.org'
  const DONATION_URL = 'https://us.netdonor.net/page/6650/donate/1?ea.tracking.id=global-navigation-bar'
  const DONATION_TITLE = 'Our work relies on you!'
  const DONATION_DESCRIPTION = 'Help us keep the internet free and open.'
  const DONATION_BUTTON_TEXT = 'Donate now'
  const NAVIGATION_TAB_TEXT = 'Explore CC'

  /** Query API function */
  this.queryApi = () => {
    fetch(API_URL).then(response => {
      return response.json()
    }).then(data => {
      this.data = data
      BuildNavigation(data)
    }).catch(err => {
      console.log(err)
    })
  }
  var headerSection = () => {
    var headerLogoSection = document.createElement('header')
    headerLogoSection.className = 'global-header-header'
    var logoLink = document.createElement('a')
    var logoWrapper = document.createElement('div')
    logoWrapper.className = 'has-text-white'
    logoLink.className = 'main-logo'
    logoLink.setAttribute('href', WEBSITE_URL)
    logoLink.setAttribute('target', '_blank')
    logoWrapper.insertAdjacentHTML('beforeend', logoMarkSvg())
    logoLink.appendChild(logoWrapper)
    headerLogoSection.appendChild(logoLink)

    return headerLogoSection
  }
  var BuildMainLayout = (NavigationItems) => {
    var mainLayout = document.createElement('div')
    mainLayout.className = 'container'

    var openTab = document.createElement('a')
    openTab.setAttribute('href', '#')
    openTab.className = 'open-tab'
    var openTabText = document.createTextNode(NAVIGATION_TAB_TEXT)
    openTab.appendChild(openTabText)

    var headerContent = document.createElement('div')
    headerContent.className = 'global-header-content'

    var levelContainer = document.createElement('div')
    levelContainer.className = 'level'

    var levelLeft = document.createElement('div')
    levelLeft.className = 'level-left'
    levelLeft.appendChild(headerSection())

    var mainColumns = document.createElement('div')
    mainColumns.classList.add('columns', 'padding-bottom-normal')

    var firstColumn = document.createElement('div')
    firstColumn.classList.add('column', 'is-one-third')

    var donateSection = document.createElement('aside')
    donateSection.className = 'donate-section'

    var donateTitle = document.createElement('h5')
    var donateTitleText = document.createTextNode(DONATION_TITLE)
    donateTitle.appendChild(donateTitleText)

    var donateDescription = document.createElement('p')
    var donateDescriptionText = document.createTextNode(DONATION_DESCRIPTION)
    donateDescription.appendChild(donateDescriptionText)

    var donateButton = document.createElement('a')
    donateButton.classList.add('button', 'small', 'donate')
    donateButton.setAttribute('href', DONATION_URL)

    var donateIcon = document.createElement('i')
    donateIcon.classList.add('icon', 'cc-letterheart', 'margin-right-small', 'is-size-5', 'padding-top-smaller')

    var donateIconText = document.createTextNode(DONATION_BUTTON_TEXT)
    donateButton.appendChild(donateIcon)
    donateButton.appendChild(donateIconText)

    donateSection.appendChild(donateTitle)
    donateSection.appendChild(donateDescription)
    donateSection.appendChild(donateButton)

    var secondColumn = document.createElement('div')
    secondColumn.className = 'column'

    var navigationMenu = document.createElement('nav')
    navigationMenu.className = 'products'
    navigationMenu.setAttribute('role', 'navigation')
    navigationMenu.setAttribute('aria-label', 'global navigation')
    navigationMenu.appendChild(NavigationItems)

    levelContainer.appendChild(levelLeft)
    headerContent.appendChild(levelContainer)

    firstColumn.appendChild(donateSection)
    secondColumn.appendChild(navigationMenu)

    mainColumns.appendChild(firstColumn)
    mainColumns.appendChild(secondColumn)

    mainColumns.appendChild(firstColumn)
    mainColumns.appendChild(secondColumn)

    headerContent.appendChild(mainColumns)
    mainLayout.appendChild(openTab)
    mainLayout.appendChild(headerContent)

    return mainLayout
  }

  var BuildNavigation = (data) => {
    var mainContainer = document.createElement('header')
    mainContainer.className = 'cc-global-header'
    var menuElements = document.createElement('div')
    menuElements.className = 'product-list'
    data.forEach(element => {
      var currentElement = document.createElement('a')
      currentElement.className = 'product-item'
      currentElement.setAttribute('href', element.url)
      currentElement.setAttribute('target', '_blank')
      var elementTitle = document.createElement('strong')
      var textItself = document.createTextNode(element.title)
      elementTitle.appendChild(textItself)

      var elementDescription = document.createElement('span')
      elementDescription.className = 'item-description'
      var descriptionItself = document.createTextNode(element.description)
      elementDescription.appendChild(descriptionItself)

      currentElement.appendChild(elementTitle)
      currentElement.appendChild(elementDescription)

      menuElements.appendChild(currentElement)
    })
    var mainLayout = BuildMainLayout(menuElements)
    mainContainer.appendChild(mainLayout)
    document.body.prepend(mainContainer)

    var ButtonEvent = document.querySelector('.cc-global-header .open-tab')
    ButtonEvent.addEventListener('click', event => {
      event.preventDefault()
      mainContainer.classList.toggle('is-active')
    })
  }
}

export function getGlobalMenu () {
  const CCGlobalNavigation = new GlobalNavigation()
  CCGlobalNavigation.query_api()
}
