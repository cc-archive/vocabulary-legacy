<template>
      <article class="card entry-post entry-event horizontal" style="height: 310px; margin: 15px;">
        <header class="card-header">
          <div class="card-date">
            <span class="day" style="font-size:15px">{{ releaseItem.created_at }}</span>
          </div>
        </header>
        <div class="card-content">
          <h4 class="card-title"><a :href="releaseItem.html_url">{{ releaseItem.name }}</a></h4>
          <div class="content">
            {{ releaseItem.body.length >175 ? releaseItem.body.substring(0,175)+'...' : releaseItem.body }}
          </div>
          <a :href="releaseItem.html_url" target="blank" class="read-more">Read more</a>
        </div>
      </article>
</template>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'

export default {
    name: 'Release',
    props: ['releaseItem']
}
</script>