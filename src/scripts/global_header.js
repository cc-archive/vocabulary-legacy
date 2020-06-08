import { logoMarkSvg } from 'logos.js'
/**
 * This script query the WordPress API to gather global navigation elements
 */

function GlobalNavigation () {
  this.data = ''
  const API_URL = 'https://creativecommons.org/wp-json/ccglobal/menu'
  const WEBSITE_URL = 'https://creativecommons.org'
  const DONATION_URL = 'https://us.netdonor.net/page/6650/donate/1?ea.tracking.id=global-navigation-bar'

  /** Query API function */
  this.queryApi = () => {
    fetch(API_URL).then((response) => {
      return response.json()
    }).then((data) => {
      this.data = data
      BuildNavigation(data)
    }).catch((err) => {
      console.log(err)
    })
  }
  var HeaderSection = () => {
    var HeaderSection = '<header class="global-header-header">' +
      '<a href="' + WEBSITE_URL + '" target="_blank" class="main-logo">' +
      '<div class="has-text-white">' +
      logoMarkSvg() +
      '</div>' +
      '</a>' +
      '</header>'
    return HeaderSection
  }
  var BuildMainLayout = (NavigationItems) => {
    var MainLayout = '<div class="container">' +
      '<a href="#" class="open-tab">Explore CC</a>' +
      '<div class="global-header-content">' +
      '<div class="level">' +
      '<div class="level-left">' +
      HeaderSection() +
      '</div>' +
      '</div>' +
      '<div class="columns padding-bottom-normal">' +
      '<div class="column is-one-third">' +
      '<aside class="donate-section">' +
      '<h5>Our work relies on you!</h5>' +
      '<p>Help us keep the internet free and open.</p>' +
      '<a class="button small donate" href="' + DONATION_URL + '">' +
      '<i class="icon cc-letterheart margin-right-small is-size-5 padding-top-smaller"></i>' +
      'Donate now' +
      '</a>' +
      '</aside>' +
      '</div>' +
      '<div class="column">' +
      '<nav class="products" role="navigation" aria-label="global navigation">' +
      '<div class="product-list">' +
      NavigationItems +
      '</div>' +
      '</nav>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>'
    return MainLayout
  }

  var BuildNavigation = (data) => {
    var MainContainer = document.createElement('header')
    MainContainer.className = 'cc-global-header'
    var MenuElements = ''
    data.forEach(element => {
      MenuElements += '<a href="' + element.url + '" target="_blank" class="product-item">'
      MenuElements += '<strong>' + element.title + '</strong>'
      MenuElements += '<span class="item-description">' + element.description + '</span>'
      MenuElements += '</a>'
    })
    var MainLayout = BuildMainLayout(MenuElements)
    MainContainer.innerHTML = MainLayout
    document.body.prepend(MainContainer)

    var ButtonEvent = document.querySelector('.cc-global-header .open-tab')
    ButtonEvent.addEventListener('click', event => {
      event.preventDefault()
      MainContainer.classList.toggle('is-active')
    })
  }
}

export function getGlobalMenu () {
  const CCGlobalNavigation = new GlobalNavigation()
  CCGlobalNavigation.queryApi()
}
