<template>
    <div class="post-card">
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
          <a :href="href" class="read-more" rel="noopener">Visit Github</a>
        </div>
      </article>
    </div>
</template>

<style scoped>
  .post-card {
    width: 25rem;
    margin: 0.5rem;
  }

  .read-more {
    color:gray;
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
