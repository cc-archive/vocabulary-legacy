<template>
  <div :id="id">
    <div class="notification warning">
      <span class="notification-container" style="background-color: #000;">
        <h2 class="b-header" style="text-decoration:none; color:white;">{{ title }}</h2>
        <span class="notification-content" style="color:white;">{{ content }}
            <br><br>
            <button  class="button is-warning" style="color:black; background-color:#FBD43C">Know More</button>
        </span>
        <span class="icon-container" style="border: none; height: 25%; width: 25%; padding-top: 75px;">
          <!-- <i class="icon cc-letterheart" style="color: #EFBE00; font-size: 50px; padding: 15px;"></i> -->
          <img src="../assets/intro.svg" alt="intro">
        </span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: ['title','content','id']
}
</script>