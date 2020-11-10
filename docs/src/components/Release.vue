<template>
    <article class="card entry-post entry-event horizontal release-card padding-section-margin">
      <header class="card-header">
        <div class="card-date">
          <span class="day" style="font-size: 2rem;">{{ releaseItem.created_at.substring(0,10) }}</span>
        </div>
      </header>
      <div class="card-content">
        <h4 class="card-title"><a :href="releaseItem.html_url">{{ releaseItem.name }}</a></h4>
        <div class="content">
          {{ releaseItem.body.length >50 ? releaseItem.body.substring(0,50)+'...' : releaseItem.body }}
        </div>
        <a :href="releaseItem.html_url" target="blank" rel="noopener" class="read-more" style="color: gray;">Read more</a>
      </div>
    </article>
</template>

<style scoped>
  .card {
    height: 15rem;
    width: 21rem;
    margin: 1rem;
  }
</style>

<script>
export default {
    name: 'Release',
    props: [
      'releaseItem'
    ]
}
</script>
