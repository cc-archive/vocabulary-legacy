import {
  CDN_BASE_URL
} from './constants'
import { h } from './render'

/**
 * Get the fully-qualified URL of a Vocabulary asset.
 *
 * @param {string} version - the Vocabulary version in which to locate the asset
 * @param {string} path - the path of the asset being patched
 * @return {string} the fully qualified URL of the asset
 */
const getFullyQualifiedUrl = (version, path) => {
  return `${CDN_BASE_URL}@${version}/${path}`
}

/**
 * Create an invisible container and place the asset into the DOM.
 *
 * This function is intended to be used to patch SVG assets that are later
 * referenced inside `<use>` tags in `<svg>` tags. It can also be used to force
 * an image to be downloaded to speed up its loading when referenced again.
 *
 * @param {string} path - the path of the asset being patched
 * @param {string} version - the Vocabulary version in which to locate the asset
 */
export const patchAssetIntoDom = (path, version = 'latest') => {
  fetch(getFullyQualifiedUrl(version, path)).then(response => {
    return response.text()
  }).then(data => {
    return h('div', [], [], element => {
      element.innerHTML = data
      element.style.display = 'none'
    })
  }).then(div => {
    document.body.prepend(div)
  })
}
