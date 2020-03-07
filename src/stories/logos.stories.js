import { config, withDesign } from 'storybook-addon-designs'

export default {
  title: 'Logos',
  decorators: [withDesign]
}

const invertedBackground = {
  parameters: {
    backgrounds: [
      { name: 'dark background', value: '#000', default: true },
      { name: 'light background', value: '#fff', default: false }
    ]
  }
}

const logomark = '' +
  '<svg width="266.5205" height="64" viewBox="0 0 304 73" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/cc/logomark.svg#creativecommons"></use>' +
  '</svg>'
export const CCLogomark = () => `<div class="has-text-black">${logomark}</div>`
CCLogomark.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=1%3A13'
    })
  }
}
export const CCLogomarkWhite = () => `<div class="has-text-white">${logomark}</div>`
CCLogomarkWhite.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=476%3A0'
    }),
    ...invertedBackground.parameters
  }
}

const lettermark = '' +
  '<svg width="64" height="64" viewBox="5.5 -3.5 64 64" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/cc/lettermark.svg#creativecommons"></use>' +
  '</svg>'
export const CCLettermark = () => `<div class="has-text-black">${lettermark}</div>`
CCLettermark.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=712%3A8'
    })
  }
}
export const CCLettermarkWhite = () => `<div class="has-text-white">${lettermark}</div>`
CCLettermarkWhite.story = invertedBackground

const letterheart = '' +
  '<svg width="64" height="64" viewBox="0 0 46296.26 40689.13" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/cc/letterheart.svg#creativecommons"></use>' +
  '</svg>'
export const CCLetterheart = () => `<div class="has-text-black">${letterheart}</div>`
CCLetterheart.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=712%3A8'
    })
  }
}
export const CCLetterheartWhite = () => `<div class="has-text-white">${letterheart}</div>`
CCLetterheartWhite.story = invertedBackground

const globalNetwork = '' +
  '<svg width="250" height="79" viewBox="0 0 250 79" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/global_network.svg#globalnetwork"></use>' +
  '</svg>'
export const CCGlobalNetwork = () => `<div class="has-text-black">${globalNetwork}</div>`
CCGlobalNetwork.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=784%3A2'
    })
  }
}
export const CCGlobalNetworkWhite = () => `<div class="has-text-white">${globalNetwork}</div>`
CCGlobalNetworkWhite.story = invertedBackground

const openSource = '' +
  '<svg width="250" height="76" viewBox="0 0 250 76" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/open_source.svg#opensource"></use>' +
  '</svg>'
export const CCOpenSource = () => `<div class="has-text-black">${openSource}</div>`
CCOpenSource.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=784%3A41'
    })
  }
}
export const CCOpenSourceWhite = () => `<div class="has-text-white">${openSource}</div>`
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
CCCertificates.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=784%3A101'
    })
  }
}
export const CCCertificatesBlack = () => `<div class="has-text-black">${certificatesMonochrome}</div>`
export const CCCertificatesWhite = () => `<div class="has-text-white">${certificatesMonochrome}</div>`
CCCertificatesWhite.story = invertedBackground

const vocabulary = '' +
  '<svg width="250" height="41" viewBox="0 0 250 41" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/vocabulary.svg#vocabulary"></use>' +
  '</svg>'
export const CCVocabulary = () => `<div class="has-text-black">${vocabulary}</div>`
CCVocabulary.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=784%3A97'
    })
  }
}
export const CCVocabularyWhite = () => `<div class="has-text-white">${vocabulary}</div>`
CCVocabularyWhite.story = invertedBackground

const search = '' +
  '<svg width="250" height="81" viewBox="0 0 250 81" xmlns="http://www.w3.org/2000/svg">' +
  '<use href="logos/products/search.svg#search"></use>' +
  '</svg>'
export const CCSearch = () => `<div class="has-text-black">${search}</div>`
CCSearch.story = {
  parameters: {
    design: config({
      type: 'figma',
      url:
        'https://www.figma.com/file/l4Mt3dn3Ndtrvrb4aLcwXI/Design-Library?node-id=784%3A80'
    })
  }
}
export const CCSearchWhite = () => `<div class="has-text-white">${search}</div>`
CCSearchWhite.story = invertedBackground
