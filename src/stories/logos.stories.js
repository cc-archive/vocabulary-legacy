export default { title: 'Logos' }

const invertedBackground = {
  parameters: {
    backgrounds: [
      { name: 'dark background', value: '#000', default: true },
      { name: 'light background', value: '#fff', default: false }
    ]
  }
}

const wordmark = '' +
  '<svg width="266.5205" height="64" viewBox="0 0 304 73" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/cc/wordmark.svg#creativecommons"></use>' +
  '</svg>'
export const CCWordmark = () => wordmark
export const CCWordmarkWhite = () => `<div style="color:white;">${wordmark}</div>`
CCWordmarkWhite.story = invertedBackground

const lettermark = '' +
  '<svg width="64" height="64" viewBox="5.5 -3.5 64 64" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/cc/lettermark.svg#creativecommons"></use>' +
  '</svg>'
export const CCLettermark = () => lettermark
export const CCLettermarkWhite = () => `<div style="color:white;">${lettermark}</div>`
CCLettermarkWhite.story = invertedBackground

const letterheart = '' +
  '<svg width="64" height="64" viewBox="0 0 46296.26 40689.13" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/cc/letterheart.svg#creativecommons"></use>' +
  '</svg>'
export const CCLetterheart = () => letterheart
export const CCLetterheartWhite = () => `<div style="color:white;">${letterheart}</div>`
CCLetterheartWhite.story = invertedBackground

const globalNetwork = '' +
  '<svg width="250" height="79" viewBox="0 0 250 79" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/global_network.svg#globalnetwork"></use>' +
  '</svg>'
export const CCGlobalNetwork = () => globalNetwork
export const CCGlobalNetworkWhite = () => `<div style="color:white;">${globalNetwork}</div>`
CCGlobalNetworkWhite.story = invertedBackground

const openSource = '' +
  '<svg width="250" height="76" viewBox="0 0 250 76" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/open_source.svg#opensource"></use>' +
  '</svg>'
export const CCOpenSource = () => openSource
export const CCOpenSourceWhite = () => `<div style="color:white;">${openSource}</div>`
CCOpenSourceWhite.story = invertedBackground

const certificates = '' +
  '<svg width="160" height="174" viewBox="0 0 160 174" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/certificates.svg#content"></use>' +
  '<use href="logos/products/certificates.svg#dots"></use>' +
  '</svg>'
const certificatesMonochrome = '' +
  '<svg width="160" height="174" viewBox="0 0 160 174" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/certificates.svg#content"></use>' +
  '<use href="logos/products/certificates.svg#monochrome"></use>' +
  '</svg>'
export const CCCertificates = () => certificates
export const CCCertificatesBlack = () => `<div style="color: black;">${certificatesMonochrome}</div>`
export const CCCertificatesWhite = () => `<div style="color: white;">${certificatesMonochrome}</div>`
CCCertificatesWhite.story = invertedBackground

const vocabulary = '' +
  '<svg width="250" height="41" viewBox="0 0 250 41" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/vocabulary.svg#vocabulary"></use>' +
  '</svg>'
export const CCVocabulary = () => vocabulary
export const CCVocabularyWhite = () => `<div style="color: white;">${vocabulary}</div>`
CCVocabularyWhite.story = invertedBackground

const search = '' +
  '<svg width="250" height="81" viewBox="0 0 250 81" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/search.svg#search"></use>' +
  '</svg>'
export const CCSearch = () => search
export const CCSearchWhite = () => `<div style="color: white;">${search}</div>`
CCSearchWhite.story = invertedBackground
