<template>
    <div id="grp">
        <Package/>
        <Package/>
        <Package/>
    </div>    
</template>

<style scoped>
    #grp {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-bottom: 20px;
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