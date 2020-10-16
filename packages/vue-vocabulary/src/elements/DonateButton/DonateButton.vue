<template>
  <Button class="donate" :size="size">
    <i class="icon cc-letterheart-filled margin-right-small padding-top-smaller" />
    <slot default />
  </Button>
</template>

<script>
  import Button from '../Button/Button'
  import { sized } from '@/mixins/sized'

  export default {
    name: 'DonateButton',
    mixins: [sized],
    components: { Button }
  }
</script>
