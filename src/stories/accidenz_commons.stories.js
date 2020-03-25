import { alphabetTable, numberTable, sampleTexts } from './helpers'

export default {
  title: 'Accidenz Commons',
  decorators: [
    storyFn => `<style>
  .accidenz-commons {
    font-family: 'Accidenz Commons';
  }
</style>
<div class="accidenz-commons has-text-black">
  ${storyFn()}
</div>`
  ]
}

export const uppercaseLetters = () => alphabetTable()

export const lowercaseLetters = () => alphabetTable(['lowercase'])

export const numbers = () => numberTable

export const pangrams = () => sampleTexts
