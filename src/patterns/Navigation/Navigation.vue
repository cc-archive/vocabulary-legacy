<template>
  <nav :class="{inverted: inverted}">
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.href">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    props: {
      links: {
        type: Array,
        validator: val => val.every(
          item => {
            let keys = ['text', 'href']
            return keys.every(key => key in item)
          }
        )
      },
      /**
       * whether the content is on a dark background
       */
      inverted: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped lang="stylus" src="./Navigation.styl">
</style>
