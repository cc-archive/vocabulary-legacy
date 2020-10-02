import {
  CC_ORG_URL,
  DONATION_URL,

  GLOBAL_HEADER_API_URL,

  DONATION_TITLE,
  DONATION_DESCRIPTION,
  DONATION_BUTTON_TEXT,
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
    const headerSection = h('header', ['global-header-header'], [
      h('a', ['main-logo'], [
        h('div', ['has-text-white'], [], element => {
          element.innerHTML = this.logomark
        })
      ], element => {
        element.setAttribute('href', CC_ORG_URL)
        element.setAttribute('target', '_blank')
      })
    ])

    const donateColumn = h('div', ['column', 'is-one-quarter'], [
      // Donate section
      h('aside', ['donate-section'], [
        // Heading
        h('h5', [], [
          document.createTextNode(DONATION_TITLE)
        ]),
        // Plea
        h('p', [], [
          document.createTextNode(DONATION_DESCRIPTION)
        ]),
        // Button
        h('a', ['button', 'small', 'donate'], [
          h('i', ['icon', 'cc-letterheart-filled', 'margin-right-small', 'is-size-5', 'padding-top-smaller']),
          document.createTextNode(DONATION_BUTTON_TEXT)
        ], element => {
          element.setAttribute('href', DONATION_URL)
        })
      ])
    ])

    const productsColumn = h('div', ['column'], [
      // Navigation section
      h('nav', ['products'], [
        h('div', ['product-list'], data.map(product => {
          // Product
          return h('a', ['product-item'], [
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
        h('div', ['global-header-content'], [
          // Level
          h('div', ['level'], [
            h('div', ['level-left'], [
              headerSection
            ])
          ]),
          // Main columns
          h('div', ['columns', 'padding-bottom-normal'], [
            donateColumn,
            productsColumn
          ])
        ])
      ])
    ])
    openTab.addEventListener('click', event => {
      event.preventDefault()
      mainContainer.classList.toggle('is-active')
    })

    document.body.prepend(mainContainer)
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
