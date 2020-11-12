<!--
  Component: SubSectionTitle
  Description: Custom variant of SectionHeader component
  Props: [ 'title', 'content' ]
  Nested Components: None
-->

<template>
  <div class="section-margin container group center-container">
    <article class="card entry-post horizontal">
      <div class="card-content with-button">
          <h2 class="card-title">{{ title }}</h2>
          <div class="content">
            {{ content }}
          </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
  .center-container {
    margin: auto;
    padding: 0.5rem;
  }
</style>

<script>
export default {
    name:'SubSectionTitle',
    props: [
      'title',
      'content'
    ]
}
</script>
