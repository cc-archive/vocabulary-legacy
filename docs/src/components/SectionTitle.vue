<template>
    <div class="notification warning">
      <span class="notification-container" style="background-color: #1c1d25;">
        <h2 class="b-header" style="text-decoration:none; color:white;">{{ title }}</h2>
        <span class="notification-content" style="color:white;">{{ content }}
            <br><br>
            <button  class="button is-warning" style="color:black; background-color:#EFBE00">Know More</button>
        </span>
        <span class="icon-container">
          <i class="icon chevron-right" style="color: #EFBE00"></i>
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