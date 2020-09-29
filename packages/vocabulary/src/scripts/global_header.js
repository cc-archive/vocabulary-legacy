import {
  CC_ORG_URL,

  GLOBAL_HEADER_API_URL,

  VISIT_SITE_BUTTON_TEXT,
  NAVIGATION_TAB_TEXT
} from './constants'

import { h } from './render'
import { patchAssetIntoDom } from './assets'

/**
 * This class represents an instance of the Global Header component.
 *
 * It abstracts JavaScript code pertaining to the rendering and interactivity
 * of the global header.
 */
class GlobalHeader {
  constructor () {
    patchAssetIntoDom('/assets/logos/cc/logomark.svg')
    this.logomark = `<svg xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 304 73">
        <use href="#logomark"></use>
      </svg>`
    this.element = null
  }

  queryApi (callbackFn) {
    fetch(GLOBAL_HEADER_API_URL).then(response => {
      return response.json()
    }).then(data => {
      callbackFn(data)
    }).catch(err => {
      console.log(err)
    })
  }

  build (data) {
    const headerSection = h('header', ['column'], [
      h('a', ['main-logo'], [
        h('div', ['has-text-white'], [], element => {
          element.innerHTML = this.logomark
        })
      ], element => {
        element.setAttribute('href', CC_ORG_URL)
        element.setAttribute('target', '_blank')
      })
    ])

    const visitSiteColumn = h('div', ['column'], [
      // Visit CC site section
      h('aside', ['donate-section'], [
        // Button
        h('a', ['button', 'small', 'donate'], [
          document.createTextNode(VISIT_SITE_BUTTON_TEXT),
          h('i', ['icon', 'external-link', 'margin-left-small', 'is-size-5', 'padding-top-smaller'])
        ], element => {
          element.setAttribute('href', CC_ORG_URL)
          element.setAttribute('target', '_blank')
        })
      ])
    ])

    const productsColumn = h('div', ['column'], [
      // Navigation section
      h('nav', ['products'], [
        h('div', ['product-list'], data.map(product => {
          // Product
          return h('a', ['column', 'product-item'], [
            // Title
            h('strong', [], [
              document.createTextNode(product.title)
            ]),
            // Description
            h('span', ['item-description'], [
              document.createTextNode(product.description)
            ])
          ], element => {
            element.setAttribute('href', product.url)
            element.setAttribute('target', '_blank')
          })
        }))
      ], element => {
        element.setAttribute('role', 'navigation')
        element.setAttribute('aria-label', 'global navigation')
      })
    ])

    let openTab = null
    const mainContainer = h('header', ['cc-global-header'], [
      h('div', ['container'], [
        // Open tab
        h('a', ['open-tab'], [
          document.createTextNode(NAVIGATION_TAB_TEXT)
        ], element => {
          element.setAttribute('href', '#')
          openTab = element
        }),
        // Content
        h('div', ['columns', 'is-multiline', 'is-mobile', 'global-header-content'], [
          // header section
          h('div', ['columns', 'is-multiline', 'global-header-head'], [
            headerSection,
            visitSiteColumn
          ]),
          // Main columns
          h('div', ['columns', 'is-multiline', 'global-header-main'], [
            productsColumn
          ])
        ])
      ])
    ])
    openTab.addEventListener('click', event => {
      event.preventDefault()
      mainContainer.classList.toggle('is-active')
    })

    const mobileView = window.matchMedia('(max-width: 768px)')
    const exploreTab = document.querySelector('.explore-tab')
    const explorePanel = document.querySelector('.explore')
    exploreTab.addEventListener('click', event => {
      event.preventDefault()
      mainContainer.classList.toggle('is-active')
    })
    if (mobileView.matches) {
      explorePanel.append(mainContainer)
    } else {
      document.body.prepend(mainContainer)
    }
    this.element = mainContainer
  }

  up () {
    this.queryApi(this.build.bind(this))
  }
}

export function createGlobalHeader () {
  const globalHeader = new GlobalHeader()
  globalHeader.up()
  return globalHeader
}
