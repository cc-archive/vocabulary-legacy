<template>
    <div v-if="is==a"><a :href=href :rel=rel :target=target>
      {{ content }}
      </a></div>
      <div v-else><router-link :to=to>
      {{ content }}</router-link></div>
</template>
<script>
  export default {
    name: 'FooterLink',
    props: {
      is: {
        type: String,
        required: false
      },
      href: {
        type: String,
        required: false
      },
      content: {
        type: String,
        required: false
      },
      rel: {
        type: String,
        required: false
      },
      target: {
        type: String,
        required: false
      },
      to: {
        type: String,
        required: false
      }
    }
  }
</script>
