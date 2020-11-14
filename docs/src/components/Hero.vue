<!--
  Component: Hero
  Description: Custom variant of PageHeader component
  Props: None
  Nested Components: None
-->

<template>
    <div style="min-height: 40vmax;">
      <div :id="id" class="has-background-white padding-bigger section-title">
      <div class="container">
        <div class="content-wrap section-margin">
          <div class="is-three-quarters">
            <p class="title is-1 has-text-gray">WELCOME TO THE DESIGN SYSTEM OF CREATIVE COMMONS OPEN SOURCE.</p><br>
            <p class="subtitle is-4" style="font-weight: normal; color: #767676;">{{ content }}</p><br>
              <form action="https://cc-vocabulary.netlify.app" target="_blank">
                <button class="button">VISIT DOCUMENTATION<center><br><i class="icon external-link"></i></center></button>
              </form>
              <br>
              <form action="https://github.com/creativecommons/vocabulary" target="_blank">
                <button class="button">VISIT GITHUB<center><br><i class="icon github"></i></center></button>
              </form>
            <center><p style="monospace"><code class="body-big margin-top-bigger is-inline-block">npm install @creativecommons/vocabulary</code></p></center>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>
  .section-title {
    min-height: 20rem;
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
