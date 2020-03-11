export default {
  title: 'Vocabulary Icons',
  decorators: [
    storyFn => `<div class="has-text-black" style="font-size: 2em;">${storyFn()}</div>`
  ]
}

export const Chevrons = () => `
  <i class="icon chevron-up"></i>
  <i class="icon chevron-right"></i>
  <i class="icon chevron-down"></i>
  <i class="icon chevron-left"></i>
`

export const Carets = () => `
  <i class="icon caret-right"></i>
  <i class="icon caret-down"></i>
`

export const Symbols = () => `
  <i class="icon tick"></i>
  <i class="icon cross"></i>
  <i class="icon circle-filled"></i>
  <i class="icon circle-outline"></i>
`

export const Internet = () => `
  <i class="icon search"></i>
  <i class="icon info"></i>
  <i class="icon globe"></i>
  <i class="icon external-link"></i>
`

export const CCLicenses = () => `
  <i class="icon cc-logo"></i>
  <i class="icon cc-by"></i>
  <i class="icon cc-nc"></i>
  <i class="icon cc-nc-eu"></i>
  <i class="icon cc-nc-jp"></i>
  <i class="icon cc-nd"></i>
  <i class="icon cc-sa"></i>
  <i class="icon cc-zero"></i>
  <i class="icon cc-pd"></i>
  <i class="icon cc-pd-alt"></i>
`

export const CCNiche = () => `
  <i class="icon cc-sampling"></i>
  <i class="icon cc-sampling-plus"></i>
  <i class="icon cc-remix"></i>
  <i class="icon cc-share"></i>
`

export const SocialMedia = () => `
  <i class="icon facebook"></i>
  <i class="icon twitter"></i>
  <i class="icon instagram"></i>
`
