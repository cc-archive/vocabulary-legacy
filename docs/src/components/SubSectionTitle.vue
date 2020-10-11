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
    margin-left: 35px;
    margin-right: 35px;
    padding: 10px;

    width: 100%;
}
</style>

<script>
export default {
    name:'SubSectionTitle',
    props: ['title','content']
}
</script>