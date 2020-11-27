<!--
  Component: Hero
  Description: Custom variant of PageHeader component
  Props: None
  Nested Components: None
-->

<template>
  <div style="hero">
    <div :id="id" class="has-background-white padding-bigger section-title">
      <div class="container">
        <div class="content-wrap section-margin">
          <div class="title is-1 has-text-gray">Vocabulary is the <span class="has-text-forest-green">design system</span> powering <span class="has-text-gold">Creative Commons</span>.</div><br>
          <p class="subtitle is-4 sub-title">Vocabulary is a cohesive design system and component library used on all Creative Commons web properties. The code is freely available to anyone and everyone to inspect, modify & use for their own purposes.</p>
          <p class="monospace"><code class="body-big margin-top-bigger is-inline-block">npm install @creativecommons/vocabulary</code></p><br>
          <div class="group">
            <form action="https://cc-vocabulary.netlify.app" target="_blank" class="separator spacer">
              <button class="button is-success small">Visit Documentation</button>
            </form>
            <form action="https://github.com/creativecommons/vocabulary" target="_blank">
              <button class="button small"><i class="icon github" style="margin-top:0.5rem; margin-right: 0.25rem;"></i>Visit GitHub</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .sub-title {
    width: 500px; 
    max-width: 100%;
  }
</style>

<script>
export default {
    name: 'SectionTitle',
    props: [
      'content',
      'id', 
      'pathtosvg',
      'href',
      'hero'
    ]
}
</script>
