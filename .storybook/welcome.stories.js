export default { title: 'Vocabulary' }

import { CCVocabulary } from '../src/stories/logos.stories'

export const Welcome = () => `
<style>
  .welcome {
    text-align: center;
  }
  .welcome p {
    margin: 0.5em;
  }
  .netlify {
    position: absolute;
    bottom: 0.5em;
    left: 0.5em;
  }
</style>
<div class="welcome">
  ${CCVocabulary()}
  <p class="text-normal">
    Vocabulary is a design system to unify the web-facing Creative Commons.
  </p>
  <a href="https://github.com/creativecommons/vocabulary" target="_blank">
    <button class="button is-primary">GitHub repository</button>
  </a>
</div>
<a class="netlify" href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg"/>
</a>
`
