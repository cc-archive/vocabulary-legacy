import { alphabetTable, numberTable, sampleTexts } from './helpers'

export default {
  title: 'Source Sans Pro',
  decorators: [
    storyFn => `<style>
  .source-sans-pro {
    font-family: 'Source Sans Pro';
  }
  .semi-bold {
    font-weight: 600;
  }
  .bold {
    font-weight: 700;
  }
</style>
<div class="source-sans-pro has-text-black has-bottom-margin">
  ${storyFn()}
</div>
<div class="source-sans-pro semi-bold has-text-black has-bottom-margin">
  ${storyFn()}
</div>
<div class="source-sans-pro bold has-text-black">
  ${storyFn()}
</div>`
  ]
}

export const uppercaseLetters = () => alphabetTable()

export const lowercaseLetters = () => alphabetTable(['lowercase'])

export const numbers = () => numberTable

export const pangrams = () => sampleTexts
