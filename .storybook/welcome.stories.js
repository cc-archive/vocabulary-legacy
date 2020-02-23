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
</div>
`
})
