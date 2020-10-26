<template>
  <div :id="id">
    <div class="notification warning">
      <span class="notification-container" style="background-color: #000;">
        <h2 class="b-header" style="text-decoration:none; color:white;">{{ title }}</h2>
        <span class="notification-content" style="color:white;">{{ content }}
            <br><br>
            <form :action="href" target="_blank">
              <button class="button is-warning" style="color:black; background-color:#FBD43C">Know More</button>
            </form>
        </span>
        <span class="icon-container" style="border: none; height: 25%; width: 25%;">
          <img :src="require(`@/assets/${pathtosvg}`)" alt="svgs" width="55%" height="55%" loading="lazy">
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['title','content','id', 'pathtosvg','href']
}
</script>