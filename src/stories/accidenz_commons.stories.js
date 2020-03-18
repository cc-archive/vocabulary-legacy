export default {
  title: 'Accidenz Commons',
  decorators: [
    storyFn => `<div class="has-text-black">${storyFn()}</div>`
  ]
}

export const demo = () => `
  <style>
  .accidenz-commons {
    font-family: 'Accidenz Commons';
  }
  </style>
  <p class="accidenz-commons">
    The quick brown fox jumps over the lazy dog.
  </p>
`
