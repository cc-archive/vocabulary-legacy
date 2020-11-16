<!--
  Component: Package
  Description: Custom variant of Project index component
  Props: [ 'name', 'href', 'content', 'npmlink' ]
  Nested Components: None
-->
 
<template>
  <div class="project-index group-card">
    <article class="card entry-post vertical project-index">
      <div class="card-content">
        <h4 class="card-title b-header">
          <a :href="href" target="_blank" rel="noopener">{{ name }}</a>
        </h4>
        <div class="content">
          {{ content }}
        </div>
        <div class="labels">
          <button class="button tag">JavaScript</button>
          <button class="button tag">CSS</button>
        </div>
        <div class="external-links">
          <button class="button is-text tiny">
            <i class="icon external-link"></i>
            <a class="link-content group-card-link" :href="npmlink" target="blank" rel="noopener">Visit npmjs package</a>
          </button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
    name: 'Package',
    props: [
      'name',
      'href',
      'content',
      'npmlink'
    ]
}
</script>
