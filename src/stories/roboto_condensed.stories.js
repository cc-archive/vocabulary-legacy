import { alphabetTable, numberTable, sampleTexts } from './helpers'

export default {
  title: 'Roboto Condensed',
  decorators: [
    storyFn => `<style>
  .roboto-condensed {
    font-family: 'Roboto Condensed';
  }
</style>
<div class="roboto-condensed has-text-black">
  ${storyFn()}
</div>`
  ]
}

export const uppercaseLetters = () => alphabetTable()

export const lowercaseLetters = () => alphabetTable(['lowercase'])

export const numbers = () => numberTable

export const pangrams = () => sampleTexts
