<template>
  <VButton class="donate" :size="size">
    <i class="icon cc-letterheart-filled margin-right-small padding-top-smaller" />
    <slot default />
  </VButton>
</template>

<script>
  import VButton from '../VButton/VButton'
  import { sized } from '@/mixins/sized'

  export default {
    name: 'DonateButton',
    mixins: [sized],
    components: { VButton }
  }
</script>
