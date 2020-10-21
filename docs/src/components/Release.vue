<template>
    <div id="release-card">
      <article class="card entry-post entry-event horizontal">
        <header class="card-header">
          <div class="card-date">
            <span class="day" style="font-size:15px">{{ releaseItem.created_at }}</span>
          </div>
        </header>
        <div class="card-content">
          <h4 class="card-title"><a :href="releaseItem.html_url">{{ releaseItem.name }}</a></h4>
          <div class="content">
            {{ releaseItem.body.length >150 ? releaseItem.body.substring(0,150)+'...' : releaseItem.body }}
          </div>
          <a :href="releaseItem.html_url" target="blank" class="read-more">Read more</a>
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
    height: 18rem;
    width: 30rem;
  }
</style>

<script>
export default {
    name: 'Release',
    props: ['releaseItem']
}
</script>