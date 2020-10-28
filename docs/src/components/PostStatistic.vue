<template>
    <div id="post-card">
      <article class="card entry-post entry-statistic horizontal">
        <header class="card-header">
          <div class="card-statistic">
            <span class="number">{{ number }}</span>
            <span class="caption">{{ caption }}</span>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            {{ description }}
          </div>
          <a :href="href" class="read-more">Visit Github</a>
        </div>
      </article>
    </div>
</template>

<style scoped>
  #post-card {
    width: 27rem;
    margin: 0.5rem;
    padding: 0.5rem;
  }
</style>

<script>
export default {
    name: 'PostStatistic',
    props: [
      'number',
      'caption',
      'description',
      'href'
    ]
}
</script>
