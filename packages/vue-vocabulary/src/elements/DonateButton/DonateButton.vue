<template>
  <VButton :class="['donate', { 'is-header': isHeader }]" :size="size" v-bind="$attrs">
    <span class="icon heart" v-if="isHeader">
      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M27.088 3.668c-3.211-2.736-7.986-2.244-10.934.797L15 5.655l-1.154-1.19C10.904 1.424 6.123.932 2.912 3.668c-3.68 3.14-3.873 8.777-.58 12.182L13.67 27.557a1.837 1.837 0 002.654 0L27.662 15.85c3.299-3.405 3.106-9.041-.574-12.182z" fill="currentColor"/></svg>
    </span>
    <span class="icon cc-heart" v-if="!isHeader && !noIcon">
      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.638C10.832.33 4.3 1.193 1.297 6.165.299 7.816-.075 9.735.013 11.641c.152 3.306 1.563 6.195 3.635 8.689 2.79 3.357 6.825 5.995 11.264 7.964l.008.004.08.035c.027-.011.074-.033.089-.04 4.417-1.968 8.473-4.607 11.263-7.963 2.072-2.494 3.483-5.383 3.636-8.689.088-1.905-.287-3.825-1.284-5.476C25.7 1.193 19.168.33 15 3.638zm-2.018 10.58l1.897.952c-.35.832-1.226 1.603-2.014 2.003-1.019.516-2.216.573-3.316.33-2.255-.5-3.305-2.41-3.345-4.623-.038-2.164 1.055-4.17 3.212-4.754 2.027-.55 4.418.12 5.438 2.09l-2.071 1.074c-.238-.56-.682-1.182-1.725-1.236-1.631-.085-2.11 1.51-2.053 2.892.042 1.012.364 2.218 1.452 2.52 1.386.383 1.865-.275 2.525-1.247zm8.944 0l1.897.952c-.35.832-1.226 1.603-2.014 2.003-1.019.516-2.216.573-3.316.33-2.255-.5-3.305-2.41-3.345-4.623-.038-2.164 1.055-4.17 3.212-4.754 2.027-.55 4.418.12 5.438 2.09l-2.071 1.074c-.238-.56-.682-1.182-1.725-1.236-1.631-.085-2.11 1.51-2.053 2.892.042 1.012.364 2.218 1.452 2.52 1.386.383 1.866-.275 2.525-1.247z" fill="currentColor"/></svg>
    </span>
    <!-- @slot This is the content of the donate button -->
    <span>
      <slot default />
    </span>
  </VButton>
</template>

<script>
  import VButton from '../VButton/VButton'
  import { sized } from '@/mixins/sized'

  export default {
    name: 'DonateButton',
    props: {
      isHeader: {
        type: Boolean,
        default: false
      },
      noIcon: {
        type: Boolean,
        default: false
      }
    },
    inheritAttrs: false,
    mixins: [sized],
    components: { VButton }
  }
</script>
