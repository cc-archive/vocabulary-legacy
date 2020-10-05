<template>
    <div id="release-group">
        <Release/>
        <Release/>
        <Release/>
    </div>
</template>

<style scoped>
#release-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-top: 25px;
}
</style>

<script>
import Release from './Release'

export default {
    name: 'ReleaseGroup',
    components: {
        Release
    }
}
</script>