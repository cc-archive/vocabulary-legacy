<template>
    <div :id="id" class="has-background-black has-text-white padding-top-bigger padding-bottom-bigger section-title">
      <div class="container">
        <div class="columns content-wrap section-margin">
          <div class="column is-three-quarters">
            <h1 class="title is-2 has-text-white">{{ title }}</h1>
            <p>{{ content }}</p><br>
              <button class="button is-warning know-more-button">KNOW MORE</button>
            <br>
          </div>
          <div class="column">
            <center>
              <img :src="require(`@/assets/${pathtosvg}`)" alt="svgs" width="200" height="200" loading="lazy">
            </center>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
  .know-more-button {
    color:black; 
    background-color:#FBD43C
  }

  .section-title {
    min-height: 20rem;
  }
</style>

<script>
export default {
    name: 'SectionTitle',
    props: [
      'title',
      'content',
      'id', 
      'pathtosvg',
      'href'
    ]
}
</script>
