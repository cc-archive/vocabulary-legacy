export default { title: 'Vue Vocabulary' }

export const Welcome = () => ({
  template: `
<div class="welcome" style="text-align: center;">
  <!-- TODO Add logo from Vocabulary assets -->
  <p class="text-normal" style="margin: 0.5em;">
    Vocabulary is a design system to unify the web-facing Creative Commons. Vue Vocabulary is a collection of Vue
    components that implement this design system.
  </p>
  <a href="https://github.com/creativecommons/vocabulary" target="_blank">
    <button class="button is-primary">GitHub repository</button>
  </a>
  <a href="https://www.netlify.com" style="position: absolute; bottom: 0.5em; left: 0.5em;">
    <img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
  </a>
</div>
`
})
