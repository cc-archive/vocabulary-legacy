<template>
    <div
      :id="id"
      class="has-background-black has-text-white padding-top-bigger padding-bottom-bigger"
    >
      <div class="container">
        <div class="columns content-wrap" style="margin: 1rem;">
          <div class="column is-three-quarters">
            <h1 class="title is-2 has-text-white">{{ title }}</h1>
            <p>{{ content }}</p><br>
              <button class="button is-warning" id="know-more-button">KNOW MORE</button>
            <br><br><br>
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
  #svg-container {
    border: none; 
    height: 25%; 
    width: 25%;
  }

  #know-more-button {
    color:black; 
    background-color:#FBD43C
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
