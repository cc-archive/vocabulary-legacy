export default { title: 'Fonts' }

export const Welcome = () => `
<style>
  .welcome {
    text-align: center;
  }
  .welcome p {
    margin: 0.5em;
  }
</style>
<div class="welcome">
  <div class="has-text-black">
    <svg viewBox="0 0 171.979 68.792" height="65" width="162.5">
      <use href="logos/fonts.svg#fonts"></use>
    </svg>
  </div>
  <p class="text-normal">
    Fonts is a collection of typefaces that lend personality to the web facing Creative Commons.
  </p>
  <a href="https://github.com/creativecommons/fonts" target="_blank">
    <button class="button small is-primary">GitHub repository</button>
  </a>
</div>
`
