 <!--
  Component: PostStatistic
  Description: Custom variant of PostStatistic component
  Props: [ 'number', 'caption', 'description', 'href' ]
  Nested Components: None
-->

<template>
    <div class="group-card">
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
          <a :href="href" class="group-card-link" rel="noopener">Visit Github</a>
        </div>
      </article>
    </div>
</template>

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
