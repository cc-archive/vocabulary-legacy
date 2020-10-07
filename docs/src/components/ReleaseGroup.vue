<template>
    <div id="release-group">
        <div v-for="(item,index) in releaseList" :key="index">
            <Release :releaseItem="item"/>
        </div>
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
    },
    data(){
        return {
            releaseList: null
        }
    },
    created(){
        fetch('https://api.github.com/repos/creativecommons/vocabulary/releases')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.releaseList=data
        });
    }
}
</script>