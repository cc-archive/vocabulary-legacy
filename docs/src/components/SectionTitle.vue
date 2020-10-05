<template>
    <div class="notification warning">
      <span class="notification-container">
        <h2 class="b-header" style="text-decoration:none;">{{ title }}</h2>
        <span class="notification-content">{{ content }}
            <br><br>
            <button  class="button is-info">Know More</button>
        </span>
        <span class="icon-container">
          <i class="icon chevron-right"></i>
        </span>
      </span>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['title','content']
}
</script>