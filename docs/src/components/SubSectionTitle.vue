<template>
<div id="sub-section" style="margin: 0.5rem;">
  <article class="card entry-post horizontal">
    <div class="card-content with-button">
        <h2 class="card-title">{{ title }}</h2>
        <div class="content">
           {{ content }}
        </div>
    </div>
  </article>
</div>
</template>

<script>
export default {
    name:'SubSectionTitle',
    props: [
      'title',
      'content'
    ]
}
</script>
