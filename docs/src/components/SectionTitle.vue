<template>
    <div class="notification warning" :id="id" style="max-width: 2000px; margin: 0 auto;">
      <span class="notification-container" id="notif-section">
        <h2 class="b-header" id="title-content">{{ title }}</h2>
        <span class="notification-content" id="content">{{ content }}
            <br><br>
            <form :action="href" target="_blank">
              <button class="button is-warning" id="know-more-button">Know More</button>
            </form>
        </span>
        <span class="icon-container" id="svg-container">
          <img :src="require(`@/assets/${pathtosvg}`)" alt="svgs" width="200" height="200" loading="lazy">
        </span>
      </span>
      </div>
</template>

<style scoped>
  #svg-container {
    border: none; 
    height: 25%; 
    width: 25%;
  }

  #know-more-button {
    color:black; 
    background-color:#FBD43C
  }

  #content {
    color:white;
  }

  #title-content {
    text-decoration:none; 
    color:white;
  }

  #notif-section {
    background-color: #000;
  }
</style>

<script>
export default {
    name: 'SectionTitle',
    props: [
      'title',
      'content',
      'id', 
      'pathtosvg',
      'href'
    ]
}
</script>
