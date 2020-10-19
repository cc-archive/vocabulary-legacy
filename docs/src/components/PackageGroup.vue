<template>
    <div id="grp">
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
    #grp {
        margin-left: 37.5px;
        margin-right: 37.5px;
        padding-top: 10px;

        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }
</style>

<script>
import '@creativecommons/vocabulary/css/vocabulary.css'
import Package from './Package'

export default {
    name:'PackageGroup',
    components: {
        Package
    }
}
</script>