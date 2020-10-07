<template>
<div id="release-card">
      <article class="card entry-post entry-event horizontal">
        <header class="card-header">
          <div class="card-date">
            <span class="day" style="font-size:32.5px">{{ releaseItem.created_at }}</span>
          </div>
        </header>
        <div class="card-content">
          <h4 class="card-title"><a href="#">{{ releaseItem.name }}</a></h4>
          <div class="content">
            {{ releaseItem.body }}
          </div>
          <a :href="releaseItem.html_url" target="blank" class="read-more">Read more</a>
        </div>
      </article>
    </div>
</template>

<style scoped>
  #release-card {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 750px;
  }
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

export default {
    name: 'Release',
    props: ['releaseItem']
}
</script>