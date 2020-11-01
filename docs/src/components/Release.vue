<template>
    <div id="release-card">
      <article class="card entry-post entry-event horizontal">
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
    </div>
</template>

<style scoped>
  #release-card {
    padding: 0.25rem;
    margin: 0.25rem;
  }

  .card {
    height: 15rem;
    width: 21rem;
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
