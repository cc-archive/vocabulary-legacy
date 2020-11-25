<!--
  Component: PackageGroup
  Description: Groups the 3 package cards and grids them
  Props: None
  Nested Components: [ Package ]
-->

<template>
    <div class="container group package-group padding-section-margin">
        <Package 
            name="Fonts" 
            href="https://github.com/creativecommons/vocabulary/tree/master/packages/fonts" 
            content="A collection of typefaces for the web facing Creative Commons"
            npmlink="https://www.npmjs.com/package/@creativecommons/fonts"   
        />
        <Package 
            name="Vocabulary" 
            href="https://github.com/creativecommons/vocabulary/tree/master/packages/vocabulary"
            content="A cohesive design system to unify the web facing Creative Commons"
            npmlink="https://www.npmjs.com/package/@creativecommons/vocabulary"    
        />
        <Package 
            name="Vue Vocabulary" 
            href="https://github.com/creativecommons/vocabulary/tree/master/packages/vue-vocabulary"
            content="A Vue component library to unify web facing Creative Commons"
            npmlink="https://www.npmjs.com/package/@creativecommons/vue-vocabulary"    
        />
    </div>    
</template>

<style scoped>
    .package-group {
        justify-content: space-evenly;
    }
</style>

<script>
import Package from './Package'

export default {
    name:'PackageGroup',
    components: {
        Package
    }
}
</script>
