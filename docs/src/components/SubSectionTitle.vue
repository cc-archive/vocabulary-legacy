<template>
<div id="sub-section">
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
  #sub-section {
    padding: 0.5rem;
    margin: 0.5rem;
  }
</style>

<script>
export default {
    name:'SubSectionTitle',
    props: ['title','content']
}
</script>