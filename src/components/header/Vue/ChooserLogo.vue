<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        :viewBox="`0 0 ${viewBoxX} ${viewBoxY}`"
    >
        <use :href="`logos/${subDir}${iconName}.svg#${id}`" />
    </svg>
</template>

<script>
// import ChooserLogoSvg from '@/assets/logos/products/chooser.svg?inline';
// prettier-ignore
export default {
  name: 'ChooserLogo',
  props: {
    // file name inside cc/ or products/
    iconName: {
      type: String,
      default: 'chooser',
    },
    // subdirectory, if any
    // ADD THE / at the end in case you have a sub directory
    subDir: {
      type: String,
      default: 'products/',
    },
    // the svg id
    id: {
      type: String,
      default: 'chooser',
    },
    // width
    viewBoxX: {
      type: Number,
      default: 169,
    },
    // height
    viewBoxY: {
      type: Number,
      default: 40,
    },
  },
};
</script>
